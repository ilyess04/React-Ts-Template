import { Outlet } from "react-router-dom";

const PrivateRoute = (): JSX.Element => {
  return <Outlet />;
};

export default PrivateRoute;
