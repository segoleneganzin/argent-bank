import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import LoggedMenuListItems from '../components/LoggedMenuListItems';
import UnloggedMenuListItems from '../components/UnloggedMenuListItems';
import { selectLogin } from '../features/login/loginSlice';
import logo from '../assets/img/argentBankLogo.png';

const Menu = () => {
  const login = useSelector((state) => selectLogin(state));
  return (
    <nav className='nav'>
      <Link to={'/'} className='nav__logo'>
        <img className='nav__logo-image' src={logo} alt='Argent Bank Logo' />
        <h1 className='sr-only'>Argent Bank</h1>
      </Link>
      {login ? <LoggedMenuListItems /> : <UnloggedMenuListItems />}
    </nav>
  );
};

export default Menu;
