import callApi from '../../services/apiClient';

export const postLogin = async (email, password) => {
  try {
    if (!email || !password) {
      throw new Error('Username and password are required');
    }
    return await callApi('post', '/user/login', { email, password });
  } catch (error) {
    throw new Error(error);
  }
};
