import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { postProfile, updateProfile } from './profileAPI';

const POST_PROFILE = 'profile/postProfile';
const UPDATE_PROFILE = 'profile/updateProfile';

export const postProfileAsync = createAsyncThunk(
  POST_PROFILE,
  async (token) => {
    const response = await postProfile(token);
    return response;
  }
);

export const updateProfileAsync = createAsyncThunk(
  UPDATE_PROFILE,
  async ({ token, firstName, lastName }) => {
    const response = await updateProfile({ token, firstName, lastName });
    return response;
  }
);

export const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    profile: null,
    status: 'idle',
    error: null,
    updateStatus: 'idle',
  },
  reducers: {
    resetUpdateStatus: (state) => {
      state.updateStatus = 'idle';
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    // manage post async action
    builder
      .addCase(POST_PROFILE + '/pending', (state) => {
        state.status = 'loading';
      })
      .addCase(POST_PROFILE + '/fulfilled', (state, action) => {
        state.status = 'succeeded';
        state.profile = action.payload.body;
        state.error = null;
      })
      .addCase(POST_PROFILE + '/rejected', (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      //   manage put async function
      .addCase(UPDATE_PROFILE + '/pending', (state) => {
        state.updateStatus = 'loading';
      })
      .addCase(UPDATE_PROFILE + '/fulfilled', (state, action) => {
        state.updateStatus = 'succeeded';
        state.profile = action.payload.body;
        state.error = null;
      })
      .addCase(UPDATE_PROFILE + '/rejected', (state, action) => {
        state.updateStatus = 'failed';
        state.error = action.error.message;
      });
  },
  selectors: {
    selectProfile: (state) => state.profile,
    selectProfileStatus: (state) => state.status,
    selectProfileError: (state) => state.error,
    selectProfileUpdateStatus: (state) => state.updateStatus,
  },
});
export const { resetUpdateStatus } = profileSlice.actions;
export const {
  selectProfile,
  selectProfileStatus,
  selectProfileError,
  selectProfileUpdateStatus,
} = profileSlice.selectors;

export default profileSlice.reducer;
