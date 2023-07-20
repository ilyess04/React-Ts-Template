import { BrowserRouter, Routes, Navigate, Route } from "react-router-dom";
import { Login, Home } from "../pages";
import { useSelector } from "react-redux";
import { IRootState } from "../interfaces";
import PublicRoute from "./publicRoute/PublicRoute";
import PrivateRoute from "./privateRoute/PrivateRoute";
import { LangProvider } from "../providers";

const AppRoute = (): JSX.Element => {
  const auth = useSelector((state: IRootState) => state?.auth);

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
    <LangProvider>
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
            <Route path="/dashboard" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LangProvider>
  );
};

export default AppRoute;
