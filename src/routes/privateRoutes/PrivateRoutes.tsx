import { Outlet, Route, Routes } from "react-router-dom";
import { DashboardLayout } from "../../layouts";
import { Home } from "../../pages";
import { NotFoundPage } from "../../components";

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
        <Route
          path="/*"
          element={
            <div className="flex justify-center align-items-center h-100 w-100">
              <NotFoundPage />
            </div>
          }
        />
      </Route>
    </Routes>
  );
};

export default PrivateRoutes;
