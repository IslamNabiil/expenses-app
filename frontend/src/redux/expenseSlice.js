import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const getAuthHeader = () => ({
  headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
});

export const fetchExpenses = createAsyncThunk('expenses/fetchExpenses', async (filters, { rejectWithValue }) => {
  try {
    const response = await axios.get(`${API_URL}/expenses`, { params: filters, ...getAuthHeader() });
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response?.data?.error || 'Failed to fetch expenses');
  }
});

export const createExpense = createAsyncThunk('expenses/create', async (data, { rejectWithValue }) => {
  try {
    const response = await axios.post(`${API_URL}/expenses`, data, getAuthHeader());
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response?.data?.error || 'Failed to create expense');
  }
});

export const updateExpense = createAsyncThunk('expenses/update', async ({ id, data }, { rejectWithValue }) => {
  try {
    const response = await axios.put(`${API_URL}/expenses/${id}`, data, getAuthHeader());
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response?.data?.error || 'Failed to update expense');
  }
});

export const deleteExpense = createAsyncThunk('expenses/delete', async (id, { rejectWithValue }) => {
  try {
    await axios.delete(`${API_URL}/expenses/${id}`, getAuthHeader());
    return id;
  } catch (error) {
    return rejectWithValue(error.response?.data?.error || 'Failed to delete expense');
  }
});

const initialState = {
  list: [],
  loading: false,
  error: null
};

const expenseSlice = createSlice({
  name: 'expenses',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchExpenses.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchExpenses.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchExpenses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(createExpense.fulfilled, (state, action) => {
        state.list.push(action.payload);
      })
      .addCase(updateExpense.fulfilled, (state, action) => {
        const index = state.list.findIndex(e => e._id === action.payload._id);
        if (index !== -1) state.list[index] = action.payload;
      })
      .addCase(deleteExpense.fulfilled, (state, action) => {
        state.list = state.list.filter(e => e._id !== action.payload);
      });
  }
});

export default expenseSlice.reducer;