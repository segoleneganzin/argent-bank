import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { postLogin } from './loginAPI';

const initialState = {
  login: null,
  status: 'idle',
  error: null,
};

export const postLoginAsync = createAsyncThunk(
  'login/postLogin',
  async ({ email, password }) => {
    const response = await postLogin(email, password);
    return response;
  }
);

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    logout: (state) => {
      state.login = null;
      state.status = 'idle';
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    // manage async action
    builder
      .addCase(postLoginAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(postLoginAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.login = action.payload.body;
        state.error = null;
      })
      .addCase(postLoginAsync.rejected, (state, action) => {
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
