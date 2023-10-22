import { useContext } from "react";
import { BrowserRouter, Routes, Navigate, Route } from "react-router-dom";
import { Login, Home } from "../pages";
import { useSelector } from "react-redux";
import { IRootState } from "../interfaces";
import PublicRoute from "./publicRoute/PublicRoute";
import PrivateRoute from "./privateRoute/PrivateRoute";
import { LangContext } from "../lang/provider/Provider";

const AppRoute = (): JSX.Element => {
  const lang = useContext(LangContext);
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
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <PublicRouteRender>
              <PublicRoute />
            </PublicRouteRender>
          }
        >
          <Route path="/login" element={<Login lang={lang} />} />
        </Route>
        <Route
          element={
            <PrivateRouteRender>
              <PrivateRoute />
            </PrivateRouteRender>
          }
        >
          <Route path="/" element={<Home lang={lang} />} />
          <Route path="/home" element={<Home lang={lang} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoute;
