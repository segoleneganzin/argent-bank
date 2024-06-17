import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { postProfile, updateProfile } from './profileAPI';

const initialState = {
  profile: null,
  status: 'idle',
  error: null,
};

export const postProfileAsync = createAsyncThunk(
  'profile/postProfile',
  async (token) => {
    const response = await postProfile(token);
    return response;
  }
);

export const updateProfileAsync = createAsyncThunk(
  'profile/updateProfile',
  async ({ token, firstName, lastName }) => {
    const response = await updateProfile({ token, firstName, lastName });
    return response;
  }
);

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // manage post async action
    builder
      .addCase(postProfileAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(postProfileAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.profile = action.payload.body;
        state.error = null;
      })
      .addCase(postProfileAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      //   manage put async function
      .addCase(updateProfileAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateProfileAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.profile = action.payload.body;
        state.error = null;
      })
      .addCase(updateProfileAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
  selectors: {
    selectProfile: (state) => state.profile,
    selectProfileStatus: (state) => state.status,
    selectProfileError: (state) => state.error,
  },
});

export const { selectProfile, selectProfileStatus, selectProfileError } =
  profileSlice.selectors;

export default profileSlice.reducer;
