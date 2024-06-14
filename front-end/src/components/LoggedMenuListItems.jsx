import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

const LoggedMenuListItems = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = () => {
    dispatch(logout());
    // navigate('/login');
  };
  return (
    <div className='nav__list-item'>
      <Link to={'/profile'} className='nav__item'>
        <i className='fa fa-user-circle'></i>
        {/* user name, context ? */}
        Tony
      </Link>
      <Link onClick={logout} to='/' className='nav__item'>
        <i className='fa fa-sign-out'></i>
        Sign Out
      </Link>
    </div>
  );
};

export default LoggedMenuListItems;
