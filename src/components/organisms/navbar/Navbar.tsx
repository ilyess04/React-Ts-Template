import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { reactLogoImage } from "../../../assets";
import { CiMenuBurger } from "react-icons/ci";
import { useSidebar } from "../../../customHooks";

const CustomNavbar = (): JSX.Element => {
  const { toggleSidebar } = useSidebar();
  return (
    <Navbar className="ds-bg-white flex justify-between px-3 py-1">
      <Navbar.Brand className="flex">
        <div className="flex align-items-center">
          <CiMenuBurger
            className="pe-2 ds-menu-icon cursor-pointer block lg:hidden"
            size={30}
            onClick={toggleSidebar}
          />
        </div>
        <Link to="/">
          <img
            alt="app-logo"
            style={{ height: 40, width: 80 }}
            src={reactLogoImage}
          />
        </Link>
      </Navbar.Brand>
    </Navbar>
  );
};
export default CustomNavbar;
