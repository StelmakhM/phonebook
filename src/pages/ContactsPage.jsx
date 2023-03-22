import { Container } from "@mui/material";
import React from "react";
// import AddContactForm from "../components/AddContactForm";
import ContactsList from "../components/ContactsList/ContactsList";

export default function ContactsPage() {
	return (
		<>
			<Container maxWidth="md">
				<ContactsList />
			</Container>
			{/* <AddContactForm /> */}
		</>
	);
}
