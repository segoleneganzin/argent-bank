import { Link } from 'react-router-dom';
import LoggedMenuListItems from '../components/LoggedMenuListItems';
import LoggedOutMenuListItems from '../components/LoggedOutMenuListItems';
import { useUser } from '../utils/hooks/useUser';
import logo from '../assets/img/argentBankLogo.png';

const Menu = () => {
  const { isAuth } = useUser();

  return (
    <nav className='main-nav'>
      <Link to={'/'} className='main-nav-logo'>
        <img
          className='main-nav-logo-image'
          src={logo}
          alt='Argent Bank Logo'
        />
        <h1 className='sr-only'>Argent Bank</h1>
      </Link>
      {isAuth ? <LoggedMenuListItems /> : <LoggedOutMenuListItems />}
    </nav>
  );
};

export default Menu;
