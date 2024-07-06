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
  useTheme,
  useTranslation,
} from "../../../customHooks";
import { DataTSX } from "../../../common";
import { Fragment } from "react";

const CustomSidebar = () => {
  const { isCollapsed, collapseSidebar } = useSidebar();
  const { tr } = useTranslation();
  const { isDarkMode, toggleTheme } = useTheme();
  const { isRtl } = useLanguages();

  return (
    <Sidebar
      collapsed={isCollapsed}
      breakPoint="lg"
      rtl={isRtl}
      className="ds-sidebar-container m-2"
    >
      <Menu className="ds-menu-root ds-menu-icon ds-menu-label">
        {DataTSX.getSidebarMenuItems(tr).map((item, index) => (
          <Fragment key={index}>
            {item.subItems && item.subItems.length > 0 ? (
              <SubMenu key={index} label={tr(item.title)} icon={item.icon}>
                {item.subItems.map((subItem, subIndex) => (
                  <MenuItem
                    key={subIndex}
                    className="ds-bg-white"
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
          </Fragment>
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
          onClick={collapseSidebar}
        >
          {tr("collapsePanel")}
        </MenuItem>
      </Menu>
    </Sidebar>
  );
};

export default CustomSidebar;
