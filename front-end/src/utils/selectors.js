export const selectAccounts = (state) => state.accounts.value;
export const selectAccountsStatus = (state) => state.accounts.status;
export const selectAccountsError = (state) => state.accounts.error;

export const selectLogin = (state) => state.login.login;
export const selectLoginStatus = (state) => state.login.status;
export const selectLoginError = (state) => state.login.error;
