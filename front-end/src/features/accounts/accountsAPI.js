import axios from 'axios';

export const fetchUserAccounts = async (userId) => {
  try {
    const res = await axios.get(window.location.origin + '/accounts.json');
    const datas = res.data;
    if (!datas) {
      throw new Error('User data not found');
    }
    const filteredAccountsById = datas.find(
      (userAccounts) => userAccounts.userId === userId
    );
    if (!filteredAccountsById) {
      throw new Error(`Accounts for user ID ${userId} not found`);
    }
    return filteredAccountsById.accounts;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
};
