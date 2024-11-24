import { Navigate, Outlet } from "react-router-dom";
import { ROUTE } from "../../constants/path";
import TokenService from "../../model/TokenService";

export function Redirect() {
  const access = TokenService.getToken();
  
  if (!access) {
    return <Navigate to={ROUTE.signIn} />;
  }

  return <Outlet />;
}
