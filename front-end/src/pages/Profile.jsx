import { useEffect, useState } from 'react';
import PageLayout from '../layouts/PageLayout';
import Accounts from '../layouts/Accounts';
import ProfileHeader from '../layouts/ProfileHeader';
import { getAccountsByUserId } from '../services/accountsApi';

const Profile = () => {
  useEffect(() => {
    document.title = 'Argent Bank - User Page';
  }, []);
  const user = {
    id: '6668571cb955d73ff0e3de2b',
    firstName: 'Tony',
    lastName: 'Stark',
  };
  // const user = {
  //   id: '6668571cb955d73ff0e3de2a',
  //   firstName: 'Steve',
  //   lastName: 'Rogers',
  // };

  const [accounts, setAccounts] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        const userAccounts = await getAccountsByUserId(user.id);
        setAccounts(userAccounts);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAccounts();
  }, [user.id]);

  return loading ? (
    <p>Datas are loading</p>
  ) : error ? (
    <p>Error</p>
  ) : (
    <PageLayout mainClassName='main bg-dark'>
      <>
        <ProfileHeader user={user} />
        <Accounts accounts={accounts} />
      </>
    </PageLayout>
  );
};

export default Profile;
