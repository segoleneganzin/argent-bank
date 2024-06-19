import PropTypes from 'prop-types';
import Account from '../components/Account';

/**
 * A React functional component that displays a list of accounts.
 * @param {Object} props
 * @param {Object[]} props.accounts
 * @returns {JSX.Element}
 */
const Accounts = ({ accounts }) => {
  return (
    <>
      <h2 className='sr-only'>Accounts</h2>
      {accounts.map((account, index) => (
        <Account account={account} key={index} />
      ))}
    </>
  );
};

Accounts.propTypes = {
  accounts: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      amount: PropTypes.number,
      amountDescription: PropTypes.string,
    })
  ).isRequired,
};
export default Accounts;
