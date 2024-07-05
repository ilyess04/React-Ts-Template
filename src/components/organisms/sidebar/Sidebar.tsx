import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
  FaSun,
  FaMoon,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  useLanguages,
  useSidebar,
  useThemeMode,
  useTranslation,
} from "../../../customHooks";
import { DataTSX } from "../../../common";

const CustomSidebar = () => {
  const { isCollapsed, toggleSidebarState } = useSidebar();
  const { tr } = useTranslation();
  const { isDarkMode, toggleTheme } = useThemeMode();
  const { isRtl } = useLanguages();

  return (
    <div className="px-2 py-2">
      <Sidebar collapsed={isCollapsed} className="ds-sidebar-container">
        <Menu className="ds-menu-root ds-menu-icon ds-menu-label">
          {DataTSX.getSidebarMenuItems(tr).map((item, index) => (
            <>
              {item.subItems && item.subItems.length > 0 ? (
                <SubMenu key={index} label={tr(item.title)} icon={item.icon}>
                  {item.subItems.map((subItem, subIndex) => (
                    <MenuItem
                      key={subIndex}
                      className="ds-menu-button"
                      component={<Link to={subItem.link} />}
                    >
                      {tr(subItem.title)}
                    </MenuItem>
                  ))}
                </SubMenu>
              ) : (
                <MenuItem
                  key={index}
                  icon={item.icon}
                  component={<Link to={item.link} />}
                >
                  {tr(item.title)}
                </MenuItem>
              )}
            </>
          ))}
        </Menu>
        <Menu className="ds-menu-icon ds-menu-label">
          <MenuItem
            icon={isDarkMode ? <FaMoon /> : <FaSun />}
            onClick={toggleTheme}
          >
            {tr("toggleTheme")}
          </MenuItem>
          <MenuItem
            icon={
              <div
                className="ds-icon-transition"
                style={{
                  transform: isCollapsed ? "rotate(0deg)" : "rotate(360deg)",
                }}
              >
                {isCollapsed && !isRtl ? (
                  <FaRegArrowAltCircleRight />
                ) : (
                  <FaRegArrowAltCircleLeft />
                )}
              </div>
            }
            onClick={toggleSidebarState}
          >
            {tr("collapsePanel")}
          </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
};

export default CustomSidebar;
