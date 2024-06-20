import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { postLogin } from '../services/loginAPI';
import { setTokenExpirationDate } from '../utils/tokenExpir';

const POST_LOGIN = 'login/postLogin';

export const postLoginAsync = createAsyncThunk(
  POST_LOGIN,
  async ({ email, password }) => {
    const response = await postLogin(email, password);
    return response;
  }
);

// Redux slice for login state management
export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    login: JSON.parse(sessionStorage.getItem('login')) || null,
    tokenExpirationDate:
      JSON.parse(sessionStorage.getItem('tokenExpirationDate')) || null,
    status: 'idle',
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.login = null;
      state.tokenExpirationDate = null;
      state.status = 'idle';
      state.error = null;
      sessionStorage.removeItem('login');
      sessionStorage.removeItem('tokenExpirationDate');
    },
    renewTokenExpiration: (state) => {
      // set up a token regeneration logic with backend ?
      state.tokenExpirationDate = setTokenExpirationDate();
    },
  },
  extraReducers: (builder) => {
    // Extra reducers to handle async actions (postLoginAsync)
    builder
      .addCase(POST_LOGIN + '/pending', (state) => {
        state.status = 'loading';
      })
      .addCase(POST_LOGIN + '/fulfilled', (state, action) => {
        state.status = 'succeeded';
        state.login = action.payload.body;
        state.tokenExpirationDate = setTokenExpirationDate();
        state.error = null;
        sessionStorage.setItem('login', JSON.stringify(state.login));
        sessionStorage.setItem(
          'tokenExpirationDate',
          JSON.stringify(state.tokenExpirationDate)
        );
      })
      .addCase(POST_LOGIN + '/rejected', (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
  selectors: {
    selectLogin: (state) => state.login,
    selectTokenExpirationDate: (state) => state.tokenExpirationDate,
    selectLoginStatus: (state) => state.status,
    selectLoginError: (state) => state.error,
  },
});

export const { logout, renewTokenExpiration } = loginSlice.actions;
export const {
  selectLogin,
  selectTokenExpirationDate,
  selectLoginStatus,
  selectLoginError,
} = loginSlice.selectors;

export default loginSlice.reducer;
