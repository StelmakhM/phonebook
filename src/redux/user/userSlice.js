import { createSlice } from "@reduxjs/toolkit";
import {
	getUserFromLocalStorage,
	removeUserFromLocalStorage,
	addUserToLocalStorage,
} from "../../utils/localStorage";
import {
	getCurrentUser,
	loginUser,
	logoutUser,
	registerUser,
} from "./userThunk";

const initialState = {
	user: getUserFromLocalStorage(),
	isLoading: false,
	isLoggedIn: false,
};

const userPending = (state, _) => {
	state.isLoading = true;
};

const userFulfilled = (state, { payload }) => {
	const { user } = payload;
	addUserToLocalStorage(user);
	state.user = user;
	state.isLoading = false;
	state.isLoggedIn = true;
};
const userRejected = (state, { payload }) => {
	state.isLoading = false;
	console.log(payload);
	alert(payload);
};

const userSlice = createSlice({
	name: "user",
	initialState,
	extraReducers: (builder) => {
		builder
			.addCase(registerUser.pending, userPending)
			.addCase(registerUser.fulfilled, userFulfilled)
			.addCase(registerUser.rejected, userRejected)
			.addCase(loginUser.pending, userPending)
			.addCase(loginUser.fulfilled, userFulfilled)
			.addCase(loginUser.rejected, userRejected)
			.addCase(getCurrentUser.pending, userPending)
			.addCase(getCurrentUser.fulfilled, userFulfilled)
			.addCase(getCurrentUser.rejected, userRejected)
			.addCase(logoutUser.pending, userPending)
			.addCase(logoutUser.rejected, userRejected)
			.addCase(logoutUser.fulfilled, (state, _) => {
				state.isLoading = false;
				state.user = null;
				removeUserFromLocalStorage();
			});
	},
});

export const userReducer = userSlice.reducer;
