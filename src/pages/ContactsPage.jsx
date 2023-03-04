import React from "react";
import AddContactForm from "../components/AddContactForm";
import ContactsList from "../components/ContactsList";

export default function ContactsPage() {
	return (
		<>
			<AddContactForm />
			<ContactsList />
		</>
	);
}
