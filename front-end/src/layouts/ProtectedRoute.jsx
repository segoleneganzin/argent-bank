import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectLogin } from '../features/login/loginSlice';

const ProtectedRoute = ({ children }) => {
  const login = useSelector((state) => selectLogin(state));
  if (!login) {
    return <Navigate to='/' replace />; // prevents page from being added to history
  }
  return children;
};
ProtectedRoute.propTypes = {
  children: PropTypes.element.isRequired,
};
export default ProtectedRoute;
