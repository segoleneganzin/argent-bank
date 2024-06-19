import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import PageLayout from '../layouts/PageLayout';
import Accounts from '../layouts/Accounts';
import ProfileHeader from '../layouts/ProfileHeader';
import Error from '../components/Error';
import Loader from '../components/Loader';
import { selectLogin } from '../features/loginSlice';
import {
  postProfileAsync,
  selectProfileStatus,
  selectProfileError,
  selectProfile,
} from '../features/profileSlice';
import {
  fetchAccountsAsync,
  selectAccounts,
  selectAccountsStatus,
  selectAccountsError,
} from '../features/accountsSlice';

/**
 * A React functional component that renders the user profile page.
 * @returns {JSX.Element}
 */
const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Selectors to retrieve data from Redux store
  const login = useSelector((state) => selectLogin(state));
  const profile = useSelector((state) => selectProfile(state));
  const profileStatus = useSelector((state) => selectProfileStatus(state));
  const profileError = useSelector((state) => selectProfileError(state));
  const accounts = useSelector((state) => selectAccounts(state));
  const accountsStatus = useSelector((state) => selectAccountsStatus(state));
  const accountsError = useSelector((state) => selectAccountsError(state));

  // Effect to fetch user profile data when login token changes
  useEffect(() => {
    if (login && login.token) {
      dispatch(postProfileAsync(login.token));
      // Uncomment below line for testing error state:
      // dispatch(postProfileAsync(12345));
    }
  }, [login, dispatch, navigate]);

  // Effect to fetch user accounts data when profile data changes
  useEffect(() => {
    if (profile) {
      dispatch(fetchAccountsAsync(profile.id));
      // Uncomment below line for testing error state:
      // dispatch(fetchAccountsAsync(1234));
    }
  }, [profile, dispatch]);

  return (
    <PageLayout mainClassName='main bg-dark'>
      {profileStatus === 'loading' || accountsStatus === 'loading' ? (
        <Loader />
      ) : (
        <>
          {profileStatus === 'failed' ? (
            <Error errorMessage={profileError} />
          ) : (
            <ProfileHeader profile={profile} />
          )}
          {accountsStatus === 'failed' ? (
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
