import { createSlice } from "@reduxjs/toolkit";
import {
	addNewContact,
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
			.addCase(updateContactById.fulfilled, (state, { payload }) => {
				const { _id, name, email, phone, favorite } = payload.data;
				state.contacts.forEach((contact) => {
					if (contact._id === _id) {
						contact.email = email;
						contact.phone = phone;
						contact.favorite = favorite;
						contact.name = name;
					}
				});
				state.isLoading = false;
			})
			.addCase(updateContactById.rejected, contactsRejected)
			.addCase(removeContactById.pending, contactsPending)
			.addCase(removeContactById.fulfilled, (state, { payload }) => {
				const { _id } = payload.data;
				state.contacts = state.contacts.filter(
					(contact) => contact._id !== _id
				);
				state.isLoading = false;
			})
			.addCase(removeContactById.rejected, contactsRejected)
			.addCase(addNewContact.pending, contactsPending)
			.addCase(addNewContact.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.contacts.push(payload.data);
			})
			.addCase(addNewContact.rejected, contactsRejected);
	},
});

export const contactsReducer = contactsSlice.reducer;