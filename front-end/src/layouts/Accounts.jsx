import PropTypes from 'prop-types';
import Account from '../components/Account';

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
  accounts: PropTypes.object.isRequired,
};
export default Accounts;
