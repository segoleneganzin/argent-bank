import { configureStore } from '@reduxjs/toolkit';
import accountsReducer from '../features/accounts/accountsSlice';
import loginReducer from '../features/login/loginSlice';
import profileReducer from '../features/profile/profileSlice';

const store = configureStore({
  reducer: {
    accounts: accountsReducer,
    login: loginReducer,
    profile: profileReducer,
  },
});

export default store;
