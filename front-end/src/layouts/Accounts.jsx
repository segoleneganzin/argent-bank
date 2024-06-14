import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAccountsAsync } from '../features/accounts/accountsSlice';
import {
  selectAccounts,
  selectAccountsStatus,
  selectAccountsError,
} from '../utils/selectors';
import Account from '../components/Account';

const Accounts = () => {
  const userId = '6668571cb955d73ff0e3de2b';
  const dispatch = useDispatch();
  const accounts = useSelector(selectAccounts);
  const status = useSelector(selectAccountsStatus);
  const error = useSelector(selectAccountsError);

  useEffect(() => {
    dispatch(fetchAccountsAsync(userId));
  }, [dispatch, userId]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    accounts && (
      <>
        <h2 className='sr-only'>Accounts</h2>
        {accounts.map((account, index) => (
          <Account account={account} key={index} />
        ))}
      </>
    )
  );
};
Accounts.propTypes = {
  accounts: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default Accounts;
