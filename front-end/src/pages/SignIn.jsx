import { useEffect } from 'react';
import PageLayout from '../layouts/PageLayout';
import SignInForm from '../layouts/SignInForm';

const SignIn = () => {
  useEffect(() => {
    document.title = 'Argent Bank - Sign In Page';
  }, []);
  return (
    <PageLayout mainClassName='main bg-dark'>
      <section className='sign-in-content'>
        <i className='fa fa-user-circle sign-in-icon'></i>
        <h1>Sign In</h1>
        <SignInForm />
      </section>
    </PageLayout>
  );
};

export default SignIn;
