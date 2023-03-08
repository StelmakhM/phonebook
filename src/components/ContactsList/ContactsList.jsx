import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	getAllContacts,
	removeContactById,
} from "../../redux/contacts/contactsThunk";
import ContactItem from "../ContactItem/ContactItem";
import ContactFilter from "../ContactsFilter/ContactsFilter";
import Modal from "../Modal";
import { List } from "./ContactsList.styled";
import { useNavigate } from "react-router";

export default function ContactsList() {
	const { contacts } = useSelector((state) => state.contacts);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [contactId, setContactId] = useState("");
	const [filter, setFilter] = useState("");

	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		dispatch(getAllContacts());
	}, [dispatch]);

	const onRemoveBtnClick = (id) => {
		dispatch(removeContactById(id));
	};

	const hideModal = () => {
		setIsModalOpen(false);
	};

	const onEditBtnClick = (id) => {
		setContactId(id);
		setIsModalOpen(true);
	};

	if (contacts.length === 0) return;

	const visibleContacts = contacts.filter((contact) =>
		contact.name.toLowerCase().includes(filter.toLowerCase())
	);

	const onContactClick = (e) => {
		if (e.target.tagName === "INPUT") {
			return;
		}
		const { id } = e.target.closest("li").dataset;
		navigate(`${id}`);
	};

	const onFilterChange = (e) => {
		console.log(`object`);
		setFilter(e.target.value);
	};

	return (
		<>
			<ContactFilter filter={filter} onChange={onFilterChange} />
			<List onClick={onContactClick}>
				{visibleContacts.map((contact) => (
					<ContactItem
						key={contact._id}
						{...contact}
						onEditBtnClick={onEditBtnClick}
						onRemoveBtnClick={onRemoveBtnClick}
					/>
				))}
			</List>
			{isModalOpen && (
				<Modal hideModal={hideModal} contactId={contactId} />
			)}
		</>
	);
}
