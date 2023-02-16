import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectToken } from "../store/features/auth.slice";

const ProtectedRoute = ({ children }) => {
  const token = useSelector(selectToken);
  return token ? <Navigate to="/host_spots" /> : children;
};

export default ProtectedRoute;
