import PropTypes from 'prop-types';

const Input = ({ id, type, label, className, value, onChange }) => {
  return (
    <div className={className}>
      {label && <label htmlFor={id}>{label}</label>}
      <input type={type} id={id} value={value} onChange={onChange} />
    </div>
  );
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string,
  className: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Input;
