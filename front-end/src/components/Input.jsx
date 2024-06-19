import PropTypes from 'prop-types';

const Input = ({
  id,
  type,
  label,
  className,
  value,
  checked,
  onChange,
  required = false,
}) => {
  return (
    <div className={className}>
      {label && <label htmlFor={id}>{label}</label>}
      <input
        type={type}
        id={id}
        value={value}
        checked={checked}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string,
  className: PropTypes.string.isRequired,
  value: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  required: PropTypes.bool,
};

export default Input;
