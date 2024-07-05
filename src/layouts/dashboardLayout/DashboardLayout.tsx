import { Sidebar } from "../../components";
import { ICommonLayout } from "../../interfaces";

const DashboardLayout = ({ children }: ICommonLayout) => {
  return (
    <div className="flex ds-bg-white">
      <Sidebar />
      <div style={{ display: "flex", flex: 1 }}>
        <div style={{ flex: 1, padding: "20px" }}>{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
