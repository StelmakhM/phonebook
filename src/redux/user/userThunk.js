import { createAsyncThunk } from "@reduxjs/toolkit";
import { customFetch } from "../../services/axios";

export const registerUser = createAsyncThunk(
	"user/register",
	async (newUser, thunkAPI) => {
		try {
			const response = await customFetch.post("/users/register", newUser);
			return response.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.response.data.message);
		}
	}
);

export const loginUser = createAsyncThunk(
	"user/login",
	async (user, thunkAPI) => {
		try {
			const response = await customFetch.post("/users/login", user);
			console.log(response.data);
			return response.data;
		} catch (error) {
			console.log(error);
			return thunkAPI.rejectWithValue(error.response.data.message);
		}
	}
);

export const logoutUser = createAsyncThunk(
	"user/logout",
	async (_, thunkAPI) => {
		try {
			const response = await customFetch("/users/logout");
			console.log(response.data);
			return response.data;
		} catch (error) {
			console.log(error);
			return thunkAPI.rejectWithValue(error.response.data.message);
		}
	}
);

export const getCurrentUser = createAsyncThunk(
	"user/getCurrent",
	async (_, thunkAPI) => {
		try {
			const response = await customFetch("/users/current");
			console.log(response.data);
			return response.data;
		} catch (error) {
			console.log(error);
			return thunkAPI.rejectWithValue(error.response.data.message);
		}
	}
);
