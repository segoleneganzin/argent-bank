import PropTypes from 'prop-types';

const Account = ({ account }) => {
  return (
    <section className='account'>
      <div className='account__content-wrapper'>
        <h3 className='account__title'>{account.title}</h3>
        <p className='account__amount'>
          ${account.amount.toLocaleString('en-US')}
        </p>
        <p className='account__amount-description'>
          {account.amountDescription}
        </p>
      </div>
      <div className='account__content-wrapper cta'>
        <button className='account__transaction-button'>
          View transactions
        </button>
      </div>
    </section>
  );
};
Account.propTypes = {
  account: PropTypes.object.isRequired,
};
export default Account;
