import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import PageLayout from '../layouts/PageLayout';
import Accounts from '../layouts/Accounts';
import ProfileHeader from '../layouts/ProfileHeader';
import { selectLogin } from '../features/login/loginSlice';
import { postProfileAsync } from '../features/profile/profileSlice';
import {
  selectProfileStatus,
  selectProfileError,
  selectProfile,
} from '../features/profile/profileSlice';
import {
  fetchAccountsAsync,
  selectAccounts,
  selectAccountsStatus,
  selectAccountsError,
} from '../features/accounts/accountsSlice';

const Profile = () => {
  const [user, setUser] = useState({
    id: null,
    firstName: null,
    lastName: null,
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const login = useSelector((state) => selectLogin(state));

  const profile = useSelector((state) => selectProfile(state));
  const profileStatus = useSelector((state) => selectProfileStatus(state));
  const profileError = useSelector((state) => selectProfileError(state));

  const accounts = useSelector((state) => selectAccounts(state));
  const accountsStatus = useSelector((state) => selectAccountsStatus(state));
  const accountsError = useSelector((state) => selectAccountsError(state));

  useEffect(() => {
    document.title = 'Argent Bank - User Page';
  }, []);

  useEffect(() => {
    if (login && login.token) {
      dispatch(postProfileAsync(login.token));
    }
    if (!login) {
      navigate('/');
    }
  }, [login, dispatch, navigate]);

  useEffect(() => {
    if (profile) {
      setUser({
        id: profile.id,
        firstName: profile.firstName,
        lastName: profile.lastName,
      });
      dispatch(fetchAccountsAsync(profile.id));
    }
  }, [profile, dispatch]);

  return profileError === 'failed' || accountsError === 'failed' ? (
    <p>An error has occured</p>
  ) : profileStatus === 'loading' || accountsStatus === 'loading' ? (
    <p>Loading ...</p>
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
