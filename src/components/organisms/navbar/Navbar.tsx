import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { reactLogoImage } from "../../../assets";
import { CiMenuBurger } from "react-icons/ci";

const CustomNavbar = (): JSX.Element => {
  return (
    <Navbar className="ds-bg-white flex justify-between px-3 py-1">
      <Navbar.Brand className="flex">
        <div className="flex align-items-center">
          <CiMenuBurger
            className="pe-2 ds-menu-icon cursor-pointer block lg:hidden"
            size={35}
            onClick={() => console.log("hello")}
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
