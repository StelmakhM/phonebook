import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	getAllContacts,
	removeContactById,
} from "../../redux/contacts/contactsThunk";
import ContactItem from "../ContactItem/ContactItem";
import ContactFilter from "../ContactsFilter/ContactsFilter";
import { List } from "./ContactsList.styled";
import { useLocation, useNavigate } from "react-router";

export default function ContactsList() {
	const { contacts } = useSelector((state) => state.contacts);
	// const [contactId, setContactId] = useState("");
	const [filter, setFilter] = useState("");

	const dispatch = useDispatch();
	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		dispatch(getAllContacts());
	}, [dispatch]);

	const handleScrollPosition = () => {
		const scrollPosition = sessionStorage.getItem("scrollPosition");
		if (scrollPosition) {
			window.scrollTo(0, parseInt(scrollPosition));
			sessionStorage.removeItem("scrollPosition");
		}
	};

	useEffect(() => {
		handleScrollPosition();
	});

	if (contacts.length === 0) return;

	const visibleContacts = contacts.filter((contact) =>
		contact.name.toLowerCase().includes(filter.toLowerCase())
	);

	const onContactClick = (e) => {
		if (e.target.tagName === "INPUT") {
			return;
		}
		const { id } = e.target.closest("li").dataset;
		sessionStorage.setItem("scrollPosition", window.pageYOffset);
		navigate(`${id}`, {
			state: {
				from: location,
			},
		});
	};

	const onFilterChange = (e) => {
		setFilter(e.target.value);
	};

	return (
		<>
			<ContactFilter filter={filter} onChange={onFilterChange} />
			<List onClick={onContactClick}>
				{visibleContacts.map((contact) => (
					<ContactItem key={contact._id} {...contact} />
				))}
			</List>
		</>
	);
}
