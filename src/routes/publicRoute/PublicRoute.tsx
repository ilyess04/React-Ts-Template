import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { Authlayout } from "../../layouts";
import { ForgotPassword, Login, ResetPassword } from "../../pages";

const PublicRoute = (): JSX.Element => {
  return (
    <Routes>
      <Route
        element={
          <Authlayout>
            <Outlet />
          </Authlayout>
        }
      >
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        <Route path="/*" element={<></>} />
      </Route>
    </Routes>
  );
};

export default PublicRoute;
