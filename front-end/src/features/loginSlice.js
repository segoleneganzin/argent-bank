import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { postLogin } from '../services/loginAPI';

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
    status: 'idle',
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.login = null;
      state.status = 'idle';
      state.error = null;
      sessionStorage.removeItem('login');
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
        state.error = null;
        sessionStorage.setItem('login', JSON.stringify(state.login));
      })
      .addCase(POST_LOGIN + '/rejected', (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
  selectors: {
    selectLogin: (state) => state.login,
    selectLoginStatus: (state) => state.status,
    selectLoginError: (state) => state.error,
  },
});

export const { logout } = loginSlice.actions;
export const { selectLogin, selectLoginStatus, selectLoginError } =
  loginSlice.selectors;

export default loginSlice.reducer;
