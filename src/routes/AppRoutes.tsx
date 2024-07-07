import { useAuthentification } from "../customHooks";
import { BrowserRouter } from "react-router-dom";
import PublicRoute from "./publicRoute/PublicRoute";
import PrivateRoute from "./privateRoute/PrivateRoute";

const AppRoute = (): JSX.Element => {
  const { accessToken, refreshToken, userId } = useAuthentification();
  return (
    <BrowserRouter>
      {accessToken && refreshToken && userId ? (
        <PrivateRoute />
      ) : (
        <PublicRoute />
      )}
    </BrowserRouter>
  );
};

export default AppRoute;
