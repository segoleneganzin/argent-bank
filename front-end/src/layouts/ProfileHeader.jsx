import PropTypes from 'prop-types';
import { useState } from 'react';
import UpdateProfileForm from '../components/UpdateProfileForm';

const ProfileHeader = ({ profile }) => {
  const [isOpenUpdateProfileForm, setIsOpenUpdateProfileForm] = useState(false);
  const toggleUpdateProfileForm = () => {
    setIsOpenUpdateProfileForm(!isOpenUpdateProfileForm);
  };

  return (
    profile && (
      <div className='profile__header'>
        {!isOpenUpdateProfileForm && (
          <>
            <h1>
              Welcome back
              <br />
              {profile.firstName} {profile.lastName} !
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
              toggleUpdateProfileForm={toggleUpdateProfileForm}
            />
          </>
        )}
      </div>
    )
  );
};
ProfileHeader.propTypes = {
  profile: PropTypes.object,
};
export default ProfileHeader;
