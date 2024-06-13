/**
 * Create and format an object UserProfile
 * @param {object} userProfile
 * @returns {{
 *  lastName: string,
 *  firstName: string,
 * }}
 */
export const UserProfile = (userProfile) => {
  const { lastName, firstName } = userProfile;
  return {
    lastName,
    firstName,
  };
};
