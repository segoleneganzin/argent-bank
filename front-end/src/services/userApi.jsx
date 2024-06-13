import { UserProfile } from './models/UserProfile';
import { apiClient } from './apiClient';

/**
 * Get the user according to his id
 * Format datas by creating personnalized object
 * @param {number} userId - The ID of the user to retrieve.
 * @returns {Promise<User>} A Promise resolving to the user object.
 */
export const getUserProfile = async () => {
  const response = await apiClient.get(`/user/profile`);
  return UserProfile(response.data);
};
