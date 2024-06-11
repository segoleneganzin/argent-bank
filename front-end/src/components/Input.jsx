import PropTypes from 'prop-types';

const Input = ({ id, type, label, className }) => {
  return (
    <div className={className}>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} />
    </div>
  );
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default Input;
