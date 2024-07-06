import { Sidebar } from "../../components";
import { ICommonLayout } from "../../interfaces";

const DashboardLayout = ({ children }: ICommonLayout) => {
  return (
    <div className="flex row-content ds-bg-white">
      <div className="px-2 py-2">
        <Sidebar />
      </div>
      <div className="flex" style={{ flex: 1 }}>
        <div style={{ flex: 1, padding: "20px" }}>{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
