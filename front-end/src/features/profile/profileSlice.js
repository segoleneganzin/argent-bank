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

// Redux slice for profile state management
export const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    profile: JSON.parse(sessionStorage.getItem('profile')) || null,
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
    // Extra reducers to handle async actions (postProfileAsync)
    builder
      .addCase(POST_PROFILE + '/pending', (state) => {
        state.status = 'loading';
      })
      .addCase(POST_PROFILE + '/fulfilled', (state, action) => {
        state.status = 'succeeded';
        state.profile = action.payload.body;
        state.error = null;
        sessionStorage.setItem('profile', JSON.stringify(state.profile));
      })
      .addCase(POST_PROFILE + '/rejected', (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      // Extra reducers to handle async actions (updateProfileAsync)
      .addCase(UPDATE_PROFILE + '/pending', (state) => {
        state.updateStatus = 'loading';
      })
      .addCase(UPDATE_PROFILE + '/fulfilled', (state, action) => {
        state.updateStatus = 'succeeded';
        state.profile = action.payload.body;
        state.error = null;
        sessionStorage.setItem('profile', JSON.stringify(state.profile));
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
