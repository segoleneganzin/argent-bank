import { useEffect } from 'react';
import PageLayout from '../layouts/PageLayout';
import Accounts from '../layouts/Accounts';
import UserHeader from '../layouts/UserHeader';

const User = () => {
  useEffect(() => {
    document.title = 'Argent Bank - User Page';
  }, []);
  const user = {
    firstName: 'Steve',
    lastName: 'Rogers',
  };
  const accounts = [
    {
      title: 'Argent Bank Checking (x8349)',
      amount: 2082.79,
      amountDescription: 'Available Balance',
    },
    {
      title: 'Argent Bank Savings (x6712)',
      amount: 10928.42,
      amountDescription: 'Available Balance',
    },
    {
      title: 'Argent Bank Credit Card (x8349)',
      amount: 184.3,
      amountDescription: 'Current Balance',
    },
  ];

  return (
    <PageLayout mainClassName='main bg-dark'>
      <>
        <UserHeader user={user} />
        <Accounts accounts={accounts} />
      </>
    </PageLayout>
  );
};

export default User;
