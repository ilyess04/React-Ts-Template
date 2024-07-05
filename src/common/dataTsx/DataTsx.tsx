import { FaBriefcase, FaTachometerAlt, FaUsers } from "react-icons/fa";
import { TLangTranslate } from "../../interfaces";
import { ISidebarMenuItem } from "../../interfaces/components";

class DataTSX {
  static getSidebarMenuItems(tr: TLangTranslate): ISidebarMenuItem[] {
    return [
      {
        title: tr("dashboard"),
        link: "/",
        icon: <FaTachometerAlt />,
      },
      {
        title: tr("sector"),
        link: "",
        icon: <FaBriefcase />,
        subItems: [
          {
            title: tr("createSector"),
            link: "/sector/create",
          },
          {
            title: tr("list"),
            link: "/sector/list",
          },
        ],
      },
      {
        title: tr("users"),
        link: "/users",
        icon: <FaUsers />,
      },
    ];
  }
}
export default DataTSX;
