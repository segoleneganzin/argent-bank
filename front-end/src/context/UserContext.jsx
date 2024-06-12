import { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const UserContext = createContext(); // Creating a context for user-related data.

/** TODO replace with token and redux
 * @param {object} props
 * @param {ReactNode} props.children - Child components to be wrapped by the provider.
 * @returns {JSX.Element}
 */
export const UserProvider = ({ children }) => {
  const navigate = useNavigate();

  // State for storing the authentication status.
  const [isAuth, setIsAuth] = useState(
    localStorage.getItem('isAuth') !== null
      ? JSON.parse(localStorage.getItem('isAuth'))
      : false
  );

  // Effect for updating local storage when the authentication status changes.
  useEffect(() => {
    localStorage.setItem('isAuth', isAuth);
  }, [isAuth]);

  // use to login user and set isAuth to true and user ID
  const login = () => {
    // setCurrentUserId(userIdLog);
    setIsAuth(true);
    navigate('/user');
  };

  // use to logout user and set isAuth to false and user ID to null
  const logout = () => {
    setIsAuth(false);
    // setCurrentUserId(null);
  };

  console.log('isAuth => ' + isAuth + ' : ' + typeof isAuth);

  return (
    <UserContext.Provider value={{ isAuth, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default UserContext;
