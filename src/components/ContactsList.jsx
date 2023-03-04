import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	getAllContacts,
	removeContactById,
} from "../redux/contacts/contactsThunk";
import ContactItem from "./ContactItem";
import Modal from "./Modal";

export default function ContactsList() {
	const { contacts } = useSelector((state) => state.contacts);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [contactId, setContactId] = useState("");
	const dispatch = useDispatch();

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

	return (
		<>
			<ul>
				{contacts.map((contact) => (
					<ContactItem
						key={contact._id}
						{...contact}
						onEditBtnClick={onEditBtnClick}
						onRemoveBtnClick={onRemoveBtnClick}
					/>
				))}
			</ul>
			{isModalOpen && (
				<Modal hideModal={hideModal} contactId={contactId} />
			)}
		</>
	);
}
