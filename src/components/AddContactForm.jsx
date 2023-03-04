import React from "react";
import { useDispatch } from "react-redux";
import { addNewContact } from "../redux/contacts/contactsThunk";
import { saveFormData } from "../utils/saveFormData";
import FormRow from "./FormRow";

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
			<FormRow type="text" name="name" />
			<FormRow type="text" name="phone" />
			<FormRow type="email" name="email" />
			<button type="submit">Add contact</button>
		</form>
	);
}
