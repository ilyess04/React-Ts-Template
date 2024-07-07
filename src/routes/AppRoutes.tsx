import { useAuthentification } from "../customHooks";
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import { Authlayout, DashboardLayout } from "../layouts";
import { ForgotPassword, Home, Login, NotFound, ResetPassword } from "../pages";

const AppRoutes = (): JSX.Element => {
  const { accessToken, refreshToken, userId } = useAuthentification();

  function PublicRouteRender(props: any) {
    return !accessToken && !refreshToken && !userId ? (
      props.children
    ) : (
      <Navigate to="/" />
    );
  }

  function PrivateRouteRender(props: any) {
    return !accessToken && !refreshToken && !userId ? (
      <Navigate to="/login" />
    ) : (
      props.children
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <PublicRouteRender>
              <Authlayout>
                <Outlet />
              </Authlayout>
            </PublicRouteRender>
          }
        >
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
        </Route>
        <Route
          element={
            <PrivateRouteRender>
              <DashboardLayout>
                <Outlet />
              </DashboardLayout>
            </PrivateRouteRender>
          }
        >
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
