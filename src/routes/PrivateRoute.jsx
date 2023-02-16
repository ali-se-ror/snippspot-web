import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectToken } from "../store/features/auth.slice";

const PrivateRoute = ({ children }) => {
  const token = useSelector(selectToken);
  return token ? children : <Navigate to="/" />;
};

export default PrivateRoute;
