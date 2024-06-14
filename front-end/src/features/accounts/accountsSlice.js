import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchUserAccounts } from './accountsAPI';

const initialState = {
  value: [],
  status: 'idle',
  error: null,
};

export const fetchAccountsAsync = createAsyncThunk(
  'accounts/fetchAccounts',
  async (userId) => {
    const accounts = await fetchUserAccounts(userId);
    return accounts;
  }
);

export const accountsSlice = createSlice({
  name: 'accounts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAccountsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAccountsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value = action.payload;
        state.error = null;
      })
      .addCase(fetchAccountsAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default accountsSlice.reducer;
