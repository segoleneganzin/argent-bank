/**
 * Loader component
 * @returns {JSX.Element}
 */
const Loader = () => {
  return (
    <div className='loader' aria-label='Chargement'>
      <span className='loader__element loader__element--1'></span>
      <span className='loader__element loader__element--2'></span>
      <span className='loader__element loader__element--3'></span>
    </div>
  );
};

export default Loader;
