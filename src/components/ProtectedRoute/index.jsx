// hook
import { useRecoilValue } from "recoil";
// component
import { Navigate } from "react-router-dom";
// atom
import { isRegisteringState } from "src/recoil";
// Prop Types
import PropTypes from "prop-types";

const ProtectedRoute = ({ children }) => {
  const isRegistering = useRecoilValue(isRegisteringState);

  return isRegistering ? children : <Navigate to="/" />;
};

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedRoute;
