import callApi from '../../services/apiClient';

export const postLogin = async (email, password) => {
  try {
    if (!email || !password) {
      throw new Error('Username and password are required');
    }
    return await callApi('post', '/user/login', { email, password });
  } catch (error) {
    if (error.message.includes('Error calling post /user/login')) {
      throw new Error('Wrong combination');
    }
    throw new Error(error);
  }
};
