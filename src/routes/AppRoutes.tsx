import { useAuthentification } from "../common/customHooks";
import { BrowserRouter, Routes, Navigate, Route } from "react-router-dom";
import { Login, Home } from "../pages";
import PublicRoute from "./publicRoute/PublicRoute";
import PrivateRoute from "./privateRoute/PrivateRoute";

const AppRoute = (): JSX.Element => {
  const { auth } = useAuthentification();

  function PrivateRouteRender(props: any) {
    return auth?.accessToken === undefined &&
      auth?.refreshToken === undefined &&
      auth?.user === undefined ? (
      <Navigate to="/login" />
    ) : (
      props.children
    );
  }
  function PublicRouteRender(props: any) {
    return !auth?.accessToken && !auth?.refreshToken && !auth?.user ? (
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
        </Route>
        <Route
          element={
            <PrivateRouteRender>
              <PrivateRoute />
            </PrivateRouteRender>
          }
        >
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoute;
