import PropTypes from 'prop-types';
const Error = ({ errorMessage }) => {
  return <p className='error error-message'>{errorMessage}</p>;
};
Error.propTypes = {
  errorMessage: PropTypes.string.isRequired,
};
export default Error;
