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
      state.user = null;
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
        state.login = action.payload;
        state.error = null;
      })
      .addCase(postLoginAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { logout } = loginSlice.actions;

export default loginSlice.reducer;
