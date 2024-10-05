import { Navigate } from "react-router-dom";
import { ROUTE } from "../../constants/path";

export function Redirect({ children }) {
  //   const location = useLocation();
  const user = true;

  if (!user) {
    <Navigate to={ROUTE.signIn} />;
  }
  return children;
}
