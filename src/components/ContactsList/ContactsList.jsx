import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllContacts } from "../../redux/contacts/contactsThunk";
import ContactItem from "../ContactItem/ContactItem";
import ContactFilter from "../ContactsFilter/ContactsFilter";
import { List } from "./ContactsList.styled";
import { useLocation, useNavigate } from "react-router";
import { MdAddCircle } from "react-icons/md";
import { Link } from "react-router-dom";

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
			<div>
				<Link to="addcontact">
					<MdAddCircle />
					Add new contact
				</Link>
			</div>
			<ContactFilter filter={filter} onChange={onFilterChange} />
			<List onClick={onContactClick}>
				{visibleContacts.map((contact) => (
					<ContactItem key={contact._id} {...contact} />
				))}
			</List>
		</>
	);
}
