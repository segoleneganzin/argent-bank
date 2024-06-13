import PropTypes from 'prop-types';
import { useState } from 'react';
import UpdateProfileForm from '../components/UpdateProfileForm';

const ProfileHeader = ({ user }) => {
  const [isOpenUpdateProfileForm, setIsOpenUpdateProfileForm] = useState(false);
  const toggleUpdateProfileForm = () => {
    setIsOpenUpdateProfileForm(!isOpenUpdateProfileForm);
  };

  return (
    <div className='profile__header'>
      {!isOpenUpdateProfileForm && (
        <>
          <h1>
            Welcome back
            <br />
            {user.firstName} {user.lastName} !
          </h1>
          <button className='edit-button' onClick={toggleUpdateProfileForm}>
            Edit Name
          </button>
        </>
      )}
      {isOpenUpdateProfileForm && (
        <>
          <h1>Welcome back</h1>
          <UpdateProfileForm
            user={user}
            toggleUpdateProfileForm={toggleUpdateProfileForm}
          />
        </>
      )}
    </div>
  );
};
ProfileHeader.propTypes = {
  user: PropTypes.object.isRequired,
};
export default ProfileHeader;
