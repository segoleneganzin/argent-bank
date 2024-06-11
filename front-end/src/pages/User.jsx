import { useEffect } from 'react';
import PageLayout from '../layouts/PageLayout';
import Accounts from '../layouts/Accounts';
import UserHeader from '../layouts/UserHeader';

const User = () => {
  useEffect(() => {
    document.title = 'Argent Bank - User Page';
  }, []);

  return (
    <PageLayout mainClassName='main bg-dark'>
      <>
        <UserHeader />
        <Accounts />
      </>
    </PageLayout>
  );
};

export default User;
