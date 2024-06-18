import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchUserAccounts } from './accountsAPI';

const GET_ACCOUNTS = 'accounts/fetchAccounts';

export const fetchAccountsAsync = createAsyncThunk(
  GET_ACCOUNTS,
  async (userId) => {
    const accounts = await fetchUserAccounts(userId);
    return accounts;
  }
);

export const accountsSlice = createSlice({
  name: 'accounts',
  initialState: {
    value: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(GET_ACCOUNTS + '/pending', (state) => {
        state.status = 'loading';
      })
      .addCase(GET_ACCOUNTS + '/fulfilled', (state, action) => {
        state.status = 'succeeded';
        state.value = action.payload;
        state.error = null;
      })
      .addCase(GET_ACCOUNTS + '/rejected', (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
  selectors: {
    selectAccounts: (state) => state.value,
    selectAccountsStatus: (state) => state.status,
    selectAccountsError: (state) => state.error,
  },
});

export const { selectAccounts, selectAccountsStatus, selectAccountsError } =
  accountsSlice.selectors;

export default accountsSlice.reducer;
