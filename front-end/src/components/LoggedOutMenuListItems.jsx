import { Link } from 'react-router-dom';

const LoggedOutMenuListItems = () => {
  return (
    <div>
      <Link to={'/sign-in'} className='main-nav-item'>
        <i className='fa fa-user-circle'></i>
        Sign In
      </Link>
    </div>
  );
};

export default LoggedOutMenuListItems;
