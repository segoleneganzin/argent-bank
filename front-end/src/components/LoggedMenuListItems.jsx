import { Link } from 'react-router-dom';
import { useUser } from '../utils/hooks/useUser';

const LoggedMenuListItems = () => {
  const { logout } = useUser();
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
