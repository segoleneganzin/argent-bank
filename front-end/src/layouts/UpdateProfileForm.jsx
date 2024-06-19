import PropTypes from 'prop-types';
import { useEffect } from 'react';
import Input from '../components/Input';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  resetUpdateStatus,
  selectProfile,
  selectProfileError,
  selectProfileUpdateStatus,
  updateProfileAsync,
} from '../features/profileSlice';
import { selectLogin } from '../features/loginSlice';

/**
 * A React functional component that displays a form for updating the user's first name and last name.
 * @param {object} props
 * @param {func} props.toggleUpdateProfileForm
 * @returns {JSX.Element}
 */
const UpdateProfileForm = ({ toggleUpdateProfileForm }) => {
  const dispatch = useDispatch();

  // Get profile states from the Redux store
  const profile = useSelector((state) => selectProfile(state));
  const profileStatus = useSelector((state) =>
    selectProfileUpdateStatus(state)
  );
  const profileError = useSelector((state) => selectProfileError(state));

  // Get login states from the Redux store
  const login = useSelector((state) => selectLogin(state));

  const [firstName, setFirstName] = useState(profile.firstName);
  const [lastName, setLastName] = useState(profile.lastName);

  // when form is opened, status must do 'idle' to prevent any side effect
  useEffect(() => {
    dispatch(resetUpdateStatus());
  }, [dispatch]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(updateProfileAsync({ token: login.token, firstName, lastName }));
    // dispatch(updateProfileAsync({ firstName, lastName })); // test error
    if (profileStatus === 'succeeded') {
      toggleUpdateProfileForm();
    }
  };

  const handleCancel = () => {
    toggleUpdateProfileForm();
  };

  return (
    <>
      <form className='update-profile-form' onSubmit={handleSubmit}>
        <Input
          id='firstName'
          type='text'
          className={`input__update left ${
            profileStatus === 'failed' && 'input__error'
          }`}
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required={true}
        />
        <Input
          id='lastName'
          type='text'
          className={`input__update right ${
            profileStatus === 'failed' && 'input__error'
          }`}
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required={true}
        />

        <button
          type='submit'
          className='update-button  left'
          disabled={profileStatus === 'loading'}
        >
          {profileStatus === 'loading' ? 'Save...' : 'Save'}
        </button>
        <button
          type='button'
          className='update-button right'
          onClick={handleCancel}
          disabled={profileStatus === 'loading'}
        >
          Cancel
        </button>
      </form>
      {profileStatus === 'failed' && (
        <p className='error-message'>{profileError}</p>
      )}
    </>
  );
};
UpdateProfileForm.propTypes = {
  toggleUpdateProfileForm: PropTypes.func,
};
export default UpdateProfileForm;
