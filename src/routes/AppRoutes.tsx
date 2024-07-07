import { useAuthentification } from "../customHooks";
import { BrowserRouter } from "react-router-dom";
import PublicRoutes from "./publicRoutes/PublicRoutes";
import PrivateRoutes from "./privateRoutes/PrivateRoutes";

const AppRoutes = (): JSX.Element => {
  const { accessToken, refreshToken, userId } = useAuthentification();
  return (
    <BrowserRouter>
      {accessToken && refreshToken && userId ? (
        <PrivateRoutes />
      ) : (
        <PublicRoutes />
      )}
    </BrowserRouter>
  );
};

export default AppRoutes;
