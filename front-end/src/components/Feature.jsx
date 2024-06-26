import PropTypes from 'prop-types';

/**
 * @param {object} props
 * @param {string} props.image - Child components to be wrapped
 * @param {string} props.title
 * @param {string} props.alt
 * @param {string} props.content
 * @returns {JSX.Element}
 */
const Feature = ({ image, alt, title, content }) => {
  return (
    <div className='feature__item'>
      <img src={image} alt={alt} className='feature__icon' />
      <h3 className='feature__item-title'>{title}</h3>
      <p>{content}</p>
    </div>
  );
};
Feature.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
export default Feature;
