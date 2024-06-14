import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import LoggedMenuListItems from '../components/LoggedMenuListItems';
import LoggedOutMenuListItems from '../components/LoggedOutMenuListItems';
import { selectLogin } from '../utils/selectors';
import logo from '../assets/img/argentBankLogo.png';

const Menu = () => {
  const login = useSelector(selectLogin);
  return (
    <nav className='nav'>
      <Link to={'/'} className='nav__logo'>
        <img className='nav__logo-image' src={logo} alt='Argent Bank Logo' />
        <h1 className='sr-only'>Argent Bank</h1>
      </Link>
      {login ? <LoggedMenuListItems /> : <LoggedOutMenuListItems />}
    </nav>
  );
};

export default Menu;
