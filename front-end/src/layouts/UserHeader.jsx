import PropTypes from 'prop-types';

const UserHeader = ({ user }) => {
  return (
    <div className='user__header'>
      <h1>
        Welcome back
        <br />
        {user.firstName} {user.lastName}!
      </h1>
      <button className='edit-button'>Edit Name</button>
    </div>
  );
};
UserHeader.propTypes = {
  user: PropTypes.object.isRequired,
};
export default UserHeader;
