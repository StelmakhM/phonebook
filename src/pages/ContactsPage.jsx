import { Container } from "@mui/material";
import React from "react";
// import AddContactForm from "../components/AddContactForm";
import ContactsList from "../components/ContactsList/ContactsList";
import Header from "../components/Header/Header";

export default function ContactsPage() {
	return (
		<>
			<Container maxWidth="lg">
				<Header />
				<ContactsList />
			</Container>
			{/* <AddContactForm /> */}
		</>
	);
}
