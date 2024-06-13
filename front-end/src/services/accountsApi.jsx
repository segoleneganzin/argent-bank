import axios from 'axios';

const BASE_URL = 'http://localhost:5173';

/**
 * Asynchronous function to fetch data from an endpoint.
 * @param {string} endpoint - The endpoint URL to fetch data from.
 * @returns {Promise<any>} - A Promise that resolves to the fetched data or an error.
 */
export const fetchData = async (endpoint) => {
  try {
    const res = await axios.get(`${BASE_URL}${endpoint}`);
    const datas = res.data;

    if (!datas) {
      throw new Error('User data not found');
    }
    return datas;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
};

/**
 * @param {string} userId
 *  @returns {Promise<any>}
 */
export const getAccountsByUserId = async (userId) => {
  try {
    const accounts = await fetchData('/accounts.json');
    const filteredAccountsById = accounts.find(
      (userAccounts) => userAccounts.userId === userId
    );
    if (!filteredAccountsById) {
      throw new Error(`Accounts for user ID ${userId} not found`);
    }
    return filteredAccountsById.accounts;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
