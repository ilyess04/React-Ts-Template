import { Outlet, Route, Routes } from "react-router-dom";
import { DashboardLayout } from "../../layouts";
import { Home } from "../../pages";

const PrivateRoutes = (): JSX.Element => {
  return (
    <Routes>
      <Route
        element={
          <DashboardLayout>
            <Outlet />
          </DashboardLayout>
        }
      >
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<></>} />
      </Route>
    </Routes>
  );
};

export default PrivateRoutes;
