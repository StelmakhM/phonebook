import React from "react";
import { useDispatch } from "react-redux";
import { addNewContact } from "../redux/contacts/contactsThunk";
import { saveFormData } from "../utils/saveFormData";

export default function AddContactForm() {
	const dispatch = useDispatch();

	const onFormSubmit = (e) => {
		e.preventDefault();
		const { data, isEmpty } = saveFormData(e.currentTarget);
		if (isEmpty) {
			console.log("Please,provide all fields");
			return;
		}
		dispatch(addNewContact(data));
		e.currentTarget.reset();
	};

	return (
		<form onSubmit={onFormSubmit}>
			<label htmlFor="name">Name</label>
			<input type="text" name="name" id="name" />
			<label htmlFor="phone">Phone</label>
			<input type="text" name="phone" id="phone" />
			<label htmlFor="emai">Email</label>
			<input type="email" name="email" id="email" />
			<button type="submit">Add contact</button>
		</form>
	);
}
