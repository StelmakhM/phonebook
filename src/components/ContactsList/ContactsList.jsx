import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllContacts } from "../../redux/contacts/contactsThunk";
import ContactItem from "../ContactItem/ContactItem";
import ContactFilter from "../ContactsFilter/ContactsFilter";
import { List } from "./ContactsList.styled";
import { useLocation, useNavigate } from "react-router";
import { MdAddCircle } from "react-icons/md";
import { Link } from "react-router-dom";
import { logoutUser } from "../../redux/user/userThunk";
import Modal from "../Modal/Modal";
import { Grid } from "@mui/material";

export default function ContactsList() {
	const { contacts } = useSelector((state) => state.contacts);
	const [isModalOpen, setIsModalOpen] = useState(false);
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

	const onLogoutClick = () => {
		setIsModalOpen(true);
	};

	const hideModal = () => {
		setIsModalOpen(false);
	};

	return (
		<>
			<div>
				<Link to="addcontact">
					<MdAddCircle />
					Add new contact
				</Link>
				<button type="button" onClick={onLogoutClick}>
					Logout
				</button>
			</div>
			<ContactFilter filter={filter} onChange={onFilterChange} />
			<Grid component="ul" onClick={onContactClick} container spacing={2}>
				{visibleContacts.map((contact) => (
					<ContactItem key={contact._id} {...contact} />
				))}
			</Grid>
			{isModalOpen && <Modal hideModal={hideModal} />}
		</>
	);
}
