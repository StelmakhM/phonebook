import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contacts/contactsSlice";
import { userReducer } from "./user/userSlice";

export const store = configureStore({
	reducer: {
		user: userReducer,
		contacts: contactsReducer,
	},
});
