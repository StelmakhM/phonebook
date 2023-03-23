import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllContacts } from "../../redux/contacts/contactsThunk";
import ContactItem from "../ContactItem/ContactItem";
import ContactFilter from "../ContactsFilter/ContactsFilter";
import { useLocation, useNavigate } from "react-router";
import { MdAddCircle } from "react-icons/md";
import { Link } from "react-router-dom";
import Modal from "../Modal/Modal";
import { Grid } from "@mui/material";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import AddContactFab from "../AddContactFab/AddContactFab";

export default function ContactsList() {
	const { contacts } = useSelector((state) => state.contacts);
	const [filter, setFilter] = useState(
		() => sessionStorage.getItem("filter") || ""
	);

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
		sessionStorage.removeItem("filter");
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
		sessionStorage.setItem("filter", filter);
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
			<Grid
				component="ul"
				onClick={onContactClick}
				container
				direction="row"
				justifyContent="flex-start"
				alignItems="center"
				columnSpacing={6}
				rowSpacing={3}
			>
				{visibleContacts.map((contact) => (
					<ContactItem key={contact._id} {...contact} />
				))}
			</Grid>
			<AddContactFab />
		</>
	);
}
