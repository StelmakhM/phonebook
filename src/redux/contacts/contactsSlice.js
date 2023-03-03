import { createSlice } from "@reduxjs/toolkit";
import {
	getAllContacts,
	getContactById,
	removeContactById,
	updateContactById,
} from "./contactsThunk";

const initialState = {
	contacts: [],
	isLoading: false,
};

const contactsPending = (state, action) => {
	state.isLoading = true;
};

const contactsRejected = (state, { payload }) => {
	state.isLoading = false;
	console.log(payload);
};

const contactsSlice = createSlice({
	name: "contacts",
	initialState,
	extraReducers: (builder) => {
		builder
			.addCase(getAllContacts.pending, contactsPending)
			.addCase(getAllContacts.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.contacts = payload.data;
			})
			.addCase(getAllContacts.rejected, contactsRejected)
			.addCase(getContactById.pending, contactsPending)
			.addCase(getContactById.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.contacts = payload.data;
			})
			.addCase(getContactById.rejected, contactsRejected)
			.addCase(updateContactById.pending, contactsPending)
			.addCase(updateContactById.fulfilled, (state, _) => {
				state.isLoading = false;
			})
			.addCase(updateContactById.rejected, contactsRejected)
			.addCase(removeContactById.pending, contactsPending)
			.addCase(removeContactById.fulfilled, (state, _) => {
				state.isLoading = false;
			})
			.addCase(removeContactById.rejected, contactsRejected);
	},
});

export const contactsReducer = contactsSlice.reducer;
