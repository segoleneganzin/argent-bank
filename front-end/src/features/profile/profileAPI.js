import callApi from '../../services/apiClient';

export const postProfile = async (token) => {
  try {
    if (!token) {
      throw new Error('Invalid datas');
    }
    return await callApi('post', '/user/profile', {}, token);
  } catch (error) {
    throw new Error(error);
  }
};

export const updateProfile = async ({ token, firstName, lastName }) => {
  try {
    if (!token) {
      throw new Error('Invalid datas');
    }
    if (!firstName || !lastName) {
      throw new Error('firstName and lastName are required');
    }
    return await callApi(
      'put',
      '/user/profile',
      { firstName, lastName },
      token
    );
  } catch (error) {
    throw new Error(error);
  }
};
