import { Outlet } from "react-router-dom";
import { DashboardLayout } from "../../layouts";

const PrivateRoute = (): JSX.Element => {
  return (
    <DashboardLayout>
      <Outlet />
    </DashboardLayout>
  );
};

export default PrivateRoute;
