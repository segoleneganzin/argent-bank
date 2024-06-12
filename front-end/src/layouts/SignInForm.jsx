import { useUser } from '../utils/hooks/useUser';
import Input from '../components/Input';

const SignInForm = () => {
  const { login } = useUser();

  return (
    <form onSubmit={login}>
      <Input
        id='username'
        type='text'
        label='Username'
        className='input__wrapper'
      />
      <Input
        id='password'
        type='password'
        label='Password'
        className='input__wrapper'
      />
      <Input
        id='remember-me'
        type='checkbox'
        label='Remember me'
        className='input__remember'
      />

      <button type='submit' className='sign-in__button'>
        Sign In
      </button>
    </form>
  );
};

export default SignInForm;
