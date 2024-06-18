import axios from 'axios';

// create axios instance
const apiClient = axios.create({
  baseURL: 'http://localhost:3001/api/v1',
});

const callApi = async (method, url, data, token) => {
  const headers = {};
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  try {
    const response = await apiClient({
      method,
      url,
      data,
      headers,
    });
    return response.data;
  } catch (error) {
    throw new Error(`Error calling ${method} ${url}:`, error);
  }
};

export default callApi;
