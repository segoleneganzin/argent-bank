import { Link } from 'react-router-dom';

const UnloggedMenuListItems = () => {
  return (
    <div>
      <Link to={'/sign-in'} className='nav__item'>
        <i className='fa fa-user-circle'></i>
        Sign In
      </Link>
    </div>
  );
};

export default UnloggedMenuListItems;
