import PropTypes from 'prop-types';
import { useEffect } from 'react';
import Input from './Input';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  resetUpdateStatus,
  selectProfile,
  selectProfileError,
  selectProfileUpdateStatus,
  updateProfileAsync,
} from '../features/profile/profileSlice';
import { selectLogin } from '../features/login/loginSlice';

const UpdateProfileForm = ({ toggleUpdateProfileForm }) => {
  const dispatch = useDispatch();
  const profile = useSelector((state) => selectProfile(state));
  const [firstName, setFirstName] = useState(profile.firstName);
  const [lastName, setLastName] = useState(profile.lastName);
  const login = useSelector((state) => selectLogin(state));
  const status = useSelector((state) => selectProfileUpdateStatus(state));
  const error = useSelector((state) => selectProfileError(state));

  useEffect(() => {
    dispatch(resetUpdateStatus());
  }, [dispatch]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(updateProfileAsync({ token: login.token, firstName, lastName }));
    // dispatch(updateProfileAsync({ firstName, lastName })); // test error
    if (status === 'succeeded') {
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
            status === 'failed' && 'input__error'
          }`}
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required={true}
        />
        <Input
          id='lastName'
          type='text'
          className={`input__update right ${
            status === 'failed' && 'input__error'
          }`}
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required={true}
        />

        <button
          type='submit'
          className='update-button  left'
          disabled={status === 'loading'}
        >
          {status === 'loading' ? 'Save...' : 'Save'}
        </button>
        <button
          type='button'
          className='update-button right'
          onClick={handleCancel}
          disabled={status === 'loading'}
        >
          Cancel
        </button>
      </form>
      {status === 'failed' && <p className='error-message'>{error}</p>}
    </>
  );
};
UpdateProfileForm.propTypes = {
  toggleUpdateProfileForm: PropTypes.func,
};
export default UpdateProfileForm;
