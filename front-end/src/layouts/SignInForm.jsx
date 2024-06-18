import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { postLoginAsync } from '../features/login/loginSlice';
import {
  selectLoginStatus,
  selectLoginError,
} from '../features/login/loginSlice';
import Input from '../components/Input';

const SignInForm = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const status = useSelector((state) => selectLoginStatus(state));
  const error = useSelector((state) => selectLoginError(state));

  const [email, setEmail] = useState(localStorage.getItem('userEmail') || '');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const loginUser = async (e) => {
    e.preventDefault();
    if (rememberMe) {
      localStorage.setItem('userEmail', email);
    } else {
      localStorage.removeItem('userEmail');
    }
    dispatch(postLoginAsync({ email, password }));
  };

  useEffect(() => {
    if (status === 'succeeded') {
      navigate('/profile');
    }
  }, [status, navigate]);

  return (
    <form onSubmit={loginUser}>
      <Input
        id='email'
        type='email'
        label='Username'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className='input__wrapper'
      />
      <Input
        id='password'
        type='password'
        label='Password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className='input__wrapper'
      />
      <Input
        id='remember-me'
        type='checkbox'
        label='Remember me'
        checked={rememberMe}
        onChange={(e) => setRememberMe(e.target.checked)}
        className='input__remember'
      />

      <button
        type='submit'
        className='sign-in__button'
        disabled={status === 'loading'}
      >
        {status === 'loading' ? 'Signing In...' : 'Sign In'}
      </button>
      {status === 'failed' && <p className='error-message'>{error}</p>}
    </form>
  );
};

export default SignInForm;
