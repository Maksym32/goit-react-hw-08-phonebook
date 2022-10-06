import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://633aae85e02b9b64c614cbd1.mockapi.io';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async (_, thunkAPI) => {
  try {
    const res = await axios.get('/contacts');
    return res.data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
}
);

export const addContact = createAsyncThunk(
  "contacts/addContact", async ( { name, number }, thunkAPI) => {
    try {
      const res = await axios.post("/contacts", { name, number });
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact", async (contactId, thunkAPI) => {
    try {
      const res = await axios.delete(`/contacts/${contactId}`, { contactId });
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
);