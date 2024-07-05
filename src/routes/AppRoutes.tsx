import { useAuthentification } from "../customHooks";
import { BrowserRouter, Routes, Navigate, Route } from "react-router-dom";
import { Login, Home, ForgotPassword, ResetPassword } from "../pages";
import PublicRoute from "./publicRoute/PublicRoute";
import PrivateRoute from "./privateRoute/PrivateRoute";

const AppRoute = (): JSX.Element => {
  const { auth } = useAuthentification();

  function PrivateRouteRender(props: any) {
    return auth?.accessToken === undefined &&
      auth?.refreshToken === undefined &&
      auth?.userId === undefined ? (
      <Navigate to="/login" />
    ) : (
      props.children
    );
  }
  function PublicRouteRender(props: any) {
    return !auth?.accessToken && !auth?.refreshToken && !auth?.userId ? (
      props.children
    ) : (
      <Navigate to="/" />
    );
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <PublicRouteRender>
              <PublicRoute />
            </PublicRouteRender>
          }
        >
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
          <Route path="/*" element={<></>} />
        </Route>
        <Route
          element={
            <PrivateRouteRender>
              <PrivateRoute />
            </PrivateRouteRender>
          }
        >
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<></>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoute;
