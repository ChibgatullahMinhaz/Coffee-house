import { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import Loader from "../components/UI/Loader";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return 
  }
  if (!user) {
    return <Navigate to="/signin" state={location?.pathname} replace />;
  }

  return children;
};

export default PrivateRoute;
