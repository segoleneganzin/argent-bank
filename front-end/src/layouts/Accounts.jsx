import Account from '../components/Account';

const Accounts = () => {
  const accounts = [
    {
      title: 'Argent Bank Checking (x8349)',
      amout: 2082.79,
      amountDescription: 'Available Balance',
    },
    {
      title: 'Argent Bank Savings (x6712)',
      amout: 10928.42,
      amountDescription: 'Available Balance',
    },
    {
      title: 'Argent Bank Credit Card (x8349)',
      amout: 184.3,
      amountDescription: 'Current Balance',
    },
  ];
  return (
    <>
      <h2 className='sr-only'>Accounts</h2>
      {accounts.map((account, index) => (
        <Account account={account} key={index} />
      ))}
    </>
  );
};

export default Accounts;
