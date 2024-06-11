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
        className='input-wrapper'
      />
      <Input
        id='password'
        type='password'
        label='Password'
        className='input-wrapper'
      />
      <Input
        id='remember-me'
        type='checkbox'
        label='Remember me'
        className='input-remember'
      />

      {/* <Link to={'/user'} className='sign-in-button'>
        Sign In
      </Link> */}
      <button type='submit' className='sign-in-button'>
        Sign In
      </button>
    </form>
  );
};

export default SignInForm;
