import { createAsyncThunk } from "@reduxjs/toolkit";
import { customFetch } from "../../services/axios";

export const getAllContacts = createAsyncThunk(
	"contacts/getAll",
	async (_, thunkAPI) => {
		try {
			const response = await customFetch("/contacts");
			return response.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error);
		}
	}
);

export const getContactById = createAsyncThunk(
	"contacts/getById",
	async (id, thunkAPI) => {
		try {
			const response = await customFetch(`/contacts/${id}`);
			return response.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error);
		}
	}
);

export const removeContactById = createAsyncThunk(
	"contacts/removeById",
	async (id, thunkAPI) => {
		try {
			const response = await customFetch.delete(`/contacts/${id}`);
			return response.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error);
		}
	}
);

export const updateContactById = createAsyncThunk(
	"contacts/updateById",
	async (id, thunkAPI) => {
		try {
			const response = await customFetch.patch(`/contacts/${id}`);
			return response.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error);
		}
	}
);
