import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function ProtectedRoutes() {
  const { loginAuth } = useAuth();
  return loginAuth ? (
    <Outlet />
  ) : (
    <Navigate to="/signin" state={{ error: "You need to login first" }} replace={true} />
  );
}
