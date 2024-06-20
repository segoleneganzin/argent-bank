/**
 * Function to calculate token expiration date.
 * @returns {number}
 */
export const setTokenExpirationDate = () => {
  return new Date().getTime() + 3600000; // 1 hour from now
  // return new Date().getTime() + 360;
};

/**
 * Function to check if a token has expired.
 * @param {number} tokenExpirationDate - Date object representing the token expiration time.
 * @returns {boolean} - True if the token has expired, false otherwise.
 */
export const isExpirToken = (tokenExpirationDate) => {
  return new Date().getTime() > tokenExpirationDate;
};
