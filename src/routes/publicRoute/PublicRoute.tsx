import { Outlet } from "react-router-dom";
import { Authlayout } from "../../layouts";

const PublicRoute = (): JSX.Element => {
  return (
    <Authlayout>
      <Outlet />
    </Authlayout>
  );
};

export default PublicRoute;
