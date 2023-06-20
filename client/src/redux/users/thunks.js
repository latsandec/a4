import { createAsyncThunk } from '@reduxjs/toolkit';
import { actionTypes } from './actionTypes';
import UserService from './service';

export const getUsersAsync = createAsyncThunk(
  actionTypes.GET_USERS,
  async () => {
    return await UserService.getUsers();
  }
);

export const addUserAsync = createAsyncThunk(
  actionTypes.ADD_USER,
  async (user) => {
    return await UserService.addUser(user);
  }
);

export const deleteUserAsync = createAsyncThunk(
  actionTypes.DELETE_USER,
  async (userId) => {
    return await UserService.deleteUser(userId);
  }
);