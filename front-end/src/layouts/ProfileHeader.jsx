import PropTypes from 'prop-types';

const ProfileHeader = ({ user }) => {
  return (
    <div className='profile__header'>
      <h1>
        Welcome back
        <br />
        {user.firstName} {user.lastName}!
      </h1>
      <button className='edit-button'>Edit Name</button>
    </div>
  );
};
ProfileHeader.propTypes = {
  user: PropTypes.object.isRequired,
};
export default ProfileHeader;
