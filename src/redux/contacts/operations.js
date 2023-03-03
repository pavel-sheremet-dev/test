import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../helpers/api';

export const getContacts = createAsyncThunk(
  'contacts/getContacts',
  async (_, thunkApi) => {
    try {
      const data = await api.fetchContacts();
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.massage);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkApi) => {
    try {
      const data = await api.postContact(contact);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.massage);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkApi) => {
    try {
      const data = await api.deleteContact(id);
      return data.id;
    } catch (error) {
      return thunkApi.rejectWithValue(error.massage);
    }
  }
);
