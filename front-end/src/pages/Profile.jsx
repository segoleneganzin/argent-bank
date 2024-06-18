import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import PageLayout from '../layouts/PageLayout';
import Accounts from '../layouts/Accounts';
import ProfileHeader from '../layouts/ProfileHeader';
import Error from '../components/Error';
import Loader from '../components/Loader';
import { selectLogin } from '../features/login/loginSlice';
import {
  postProfileAsync,
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
    if (login && login.token) {
      dispatch(postProfileAsync(login.token));
      // dispatch(postProfileAsync(12345)); // test error
    }
  }, [login, dispatch, navigate]);

  useEffect(() => {
    if (profile) {
      dispatch(fetchAccountsAsync(profile.id));
      // dispatch(fetchAccountsAsync(1234)); // test error
    }
  }, [profile, dispatch]);

  return (
    <PageLayout mainClassName='main bg-dark'>
      {profileStatus === 'loading' || accountsStatus === 'loading' ? (
        <Loader />
      ) : (
        <>
          {profileStatus === 'rejected' ? (
            <Error errorMessage={profileError} />
          ) : (
            <ProfileHeader profile={profile} />
          )}
          {accountsStatus === 'rejected' ? (
            <Error errorMessage={accountsError} />
          ) : (
            <Accounts accounts={accounts} />
          )}
        </>
      )}
    </PageLayout>
  );
};

export default Profile;
