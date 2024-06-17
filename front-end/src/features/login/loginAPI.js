import axios from 'axios';

export const postLogin = async (email, password) => {
  try {
    if (!email || !password) {
      throw new Error('Username and password are required.');
    }
    const response = await axios.post(
      'http://localhost:3001/api/v1/user/login',
      {
        email,
        password,
      }
    );
    return response.data;
  } catch (error) {
    throw new Error('Login failed');
  }
};
