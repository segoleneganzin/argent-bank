import axios from 'axios';

export const postProfile = async (token) => {
  try {
    if (!token) {
      throw new Error('Invalid datas');
    }
    const response = await axios.post(
      'http://localhost:3001/api/v1/user/profile',
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error posting profile:', error);
    throw new Error('Failed to post profile');
  }
};

export const updateProfile = async ({ token, firstName, lastName }) => {
  try {
    if (!token) {
      throw new Error('Invalid datas');
    }
    const response = await axios.put(
      'http://localhost:3001/api/v1/user/profile',
      { firstName, lastName },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error posting profile:', error);
    throw new Error('Failed to post profile');
  }
};
