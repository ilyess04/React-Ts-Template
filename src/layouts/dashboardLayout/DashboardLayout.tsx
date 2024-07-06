import { Navbar, Sidebar } from "../../components";
import { ICommonLayout } from "../../interfaces";

const DashboardLayout = ({ children }: ICommonLayout) => {
  return (
    <div className="w-100 h-100 ds-bg-secondary">
      <Navbar />
      <div className="flex row-content">
        <Sidebar />
        <div className="flex" style={{ flex: 1 }}>
          <div style={{ flex: 1, padding: "20px" }}>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
