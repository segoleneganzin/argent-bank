import { configureStore } from '@reduxjs/toolkit';
import accountsReducer from '../features/accounts/accountsSlice';
import loginReducer from '../features/login/loginSlice';

const store = configureStore({
  reducer: {
    accounts: accountsReducer,
    login: loginReducer,
  },
});

export default store;
