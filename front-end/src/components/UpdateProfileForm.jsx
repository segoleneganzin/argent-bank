import PropTypes from 'prop-types';
import Input from './Input';
import { useState, useEffect } from 'react';

const UpdateProfileForm = ({ user, toggleUpdateProfileForm }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  // Initialize input values with user's first and last name
  useEffect(() => {
    if (user) {
      setFirstName(user.firstName);
      setLastName(user.lastName);
    }
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(firstName);
    console.log(lastName);
    toggleUpdateProfileForm();
  };

  const handleCancel = (e) => {
    e.preventDefault();
    // Reset the input values to the user's original values
    setFirstName(user.firstName);
    setLastName(user.lastName);
    toggleUpdateProfileForm();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <Input
            id='firstName'
            type='text'
            className='input__wrapper'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <Input
            id='lastName'
            type='text'
            className='input__wrapper'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <div>
          <button type='submit'>Save</button>
          <button type='button' onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </form>
    </>
  );
};
UpdateProfileForm.propTypes = {
  user: PropTypes.object,
  toggleUpdateProfileForm: PropTypes.func,
};
export default UpdateProfileForm;
