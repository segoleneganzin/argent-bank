import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectProfile } from '../features/profile/profileSlice';

const LoggedMenuListItems = () => {
  const dispatch = useDispatch();
  const [userFirstName, setUserFirstName] = useState('');

  const profile = useSelector((state) => selectProfile(state));

  useEffect(() => {
    if (profile) {
      setUserFirstName(profile.firstName);
    }
  }, [profile, userFirstName]);

  const logout = () => {
    dispatch(logout());
  };

  return (
    <div className='nav__list-item'>
      <Link to={'/profile'} className='nav__item'>
        <i className='fa fa-user-circle'></i>
        {userFirstName}
      </Link>
      <Link onClick={logout} className='nav__item'>
        <i className='fa fa-sign-out'></i>
        Sign Out
      </Link>
    </div>
  );
};

export default LoggedMenuListItems;
