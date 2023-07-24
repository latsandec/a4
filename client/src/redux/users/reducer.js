import { createSlice } from '@reduxjs/toolkit';
import { REQUEST_STATE } from '../utils';
import { addUserAsync, getUsersAsync, editUserAsync, getUserAsync, deleteUserAsync } from './thunks';

const INITIAL_STATE = {
  list: [],
  detail: null,
  getUsers: REQUEST_STATE.IDLE,
  getUser: REQUEST_STATE.IDLE,
  addUser: REQUEST_STATE.IDLE,
  editUser: REQUEST_STATE.IDLE,
  deleteUser: REQUEST_STATE.IDLE,
  error: null
};

const usersSlice = createSlice({
  name: 'users',
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsersAsync.pending, (state) => {
        state.getUsers = REQUEST_STATE.PENDING;
        state.error = null;
      })
      .addCase(getUsersAsync.fulfilled, (state, action) => {
        state.getUsers = REQUEST_STATE.FULFILLED;
        state.list = action.payload;
      })
      .addCase(getUsersAsync.rejected, (state, action) => {
        state.getUsers = REQUEST_STATE.REJECTED;
        state.error = action.error;
      })
      .addCase(getUserAsync.pending, (state) => {
        state.getUsers = REQUEST_STATE.PENDING;
        state.error = null;
      })
      .addCase(getUserAsync.fulfilled, (state, action) => {
        state.getUsers = REQUEST_STATE.FULFILLED;
        state.detail = action.payload;
      })
      .addCase(getUserAsync.rejected, (state, action) => {
        state.getUsers = REQUEST_STATE.REJECTED;
        state.error = action.error;
      })
      .addCase(addUserAsync.pending, (state) => {
        state.addUser = REQUEST_STATE.PENDING;
        state.error = null;
      })
      .addCase(addUserAsync.fulfilled, (state, action) => {
        state.addUser = REQUEST_STATE.FULFILLED;
        state.list = action.payload;
      })
      .addCase(addUserAsync.rejected, (state, action) => {
        state.addUser = REQUEST_STATE.REJECTED;
        state.error = action.error;
      })
      .addCase(editUserAsync.pending, (state) => {
        state.editUser = REQUEST_STATE.PENDING;
        state.error = null;
      })
      .addCase(editUserAsync.fulfilled, (state, action) => {
        state.editUser = REQUEST_STATE.FULFILLED;
        state.detail = action.payload;
      })
      .addCase(editUserAsync.rejected, (state, action) => {
        state.editUser = REQUEST_STATE.REJECTED;
        state.error = action.error;
      })
      .addCase(deleteUserAsync.pending, (state) => {
        state.deleteUser = REQUEST_STATE.PENDING;
        state.error = null;
      })
      .addCase(deleteUserAsync.fulfilled, (state, action) => {
        state.deleteUser = REQUEST_STATE.FULFILLED;
        state.list = action.payload;
        state.detail = null;
      })
      .addCase(deleteUserAsync.rejected, (state, action) => {
        state.deleteUser = REQUEST_STATE.REJECTED;
        state.error = action.error;
      });
  }
});

export default usersSlice.reducer;