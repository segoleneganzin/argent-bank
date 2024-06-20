export const setTokenExpirationDate = () => {
  return new Date().getTime() + 3600000; //1 hour
  // return new Date().getTime() + 360;
};

export const isExpirToken = (tokenExpirationDate) => {
  return new Date().getTime() > tokenExpirationDate;
};
