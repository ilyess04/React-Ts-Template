import { Navbar, Sidebar } from "../../components";
import { ICommonLayout } from "../../interfaces";

const DashboardLayout = ({ children }: ICommonLayout) => {
  return (
    <>
      <Navbar />
      <div className="flex row-content p-2">
        <Sidebar />
        <div className="flex" style={{ flex: 1 }}>
          <div style={{ flex: 1, padding: "20px" }}>{children}</div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
