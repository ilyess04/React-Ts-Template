import { Dropdown, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { reactLogoImage } from "../../../assets";
import { CiMenuBurger } from "react-icons/ci";

const CustomNavbar = (): JSX.Element => {
  return (
    <Navbar className="ds-bg-white flex justify-between px-3 py-1">
      <Navbar.Brand>
        <Link to="/">
          <img
            alt="app-logo"
            style={{ height: 40, width: 80 }}
            src={reactLogoImage}
          />
        </Link>
        <CiMenuBurger
          className="d-md-none d-xs-block"
          onClick={() => console.log("hello")}
        />
      </Navbar.Brand>
      <div className="flex pe-1">
        {/* <Dropdown className="mx-1" drop="down" align={dropAlign}>
          <Dropdown.Toggle
            as={CustomToggledDropItem}
            item={
              <NavIconLayout className="pt-1">
                <Avatar size="20" src={language.getStoredLangFlag()} round />{" "}
              </NavIconLayout>
            }
          />
          <Dropdown.Menu style={{ marginTop: "28px" }} className="p-0">
            <Dropdown.Item className="p-0">
              {/* <SelectLanguages options={Data.getLanguagesDropDataItems(tr)} /> */}
        {/* </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown> */}
      </div>
    </Navbar>
  );
};
export default CustomNavbar;
