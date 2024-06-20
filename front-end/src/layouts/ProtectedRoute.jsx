import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectLogin,
  selectTokenExpirationDate,
  logout,
} from '../features/loginSlice';
import { isExpirToken } from '../utils/tokenExpir';

/**
 * A React functional component that protects a route from being accessed by unauthorized users.
 * If the user is not logged in, they are redirected to the home page.
 * @param {Object} props
 * @param {ReactNode} props.children
 * @returns {JSX.Element}
 */
const ProtectedRoute = ({ children }) => {
  const dispatch = useDispatch();

  // Get the login state from the Redux store
  const login = useSelector((state) => selectLogin(state));
  // Get the tokenExpirationDate state from the Redux store
  const tokenExpirationDate = useSelector((state) =>
    selectTokenExpirationDate(state)
  );

  useEffect(() => {
    if (login && isExpirToken(tokenExpirationDate)) {
      console.log('token expired');
      // set up a token regeneration logic into back ?
      dispatch(logout());
    }
  }, [login, tokenExpirationDate, dispatch]);

  if (!login) {
    return <Navigate to='/' replace />; // prevents page from being added to history
  }
  return children;
};
ProtectedRoute.propTypes = {
  children: PropTypes.element.isRequired,
};
export default ProtectedRoute;
