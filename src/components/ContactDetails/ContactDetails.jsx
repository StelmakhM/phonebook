import { Checkbox } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import {
	getContactById,
	removeContactById,
	updateContactById,
} from "../../redux/contacts/contactsThunk";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import Avatar from "react-avatar";
import moment from "moment";
import { MdDelete } from "react-icons/md";
import { DetailsContainer } from "./ContactDetails.styled";
import Modal from "../Modal/Modal";
import ActionConfirmation from "../ActionConfirmation/ActionConfirmation";

// import { Facebook } from "react-content-loader";
// const MyFacebookLoader = () => <Facebook />;

export default function ContactDetails() {
	const { contactDetails } = useSelector((state) => state.contacts);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const { id } = useParams();
	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		dispatch(getContactById(id));
	}, [dispatch, id]);

	const { name, email, phone, favorite, createdAt, updatedAt, address, _id } =
		contactDetails;

	const toggleFavorite = () => {
		dispatch(
			updateContactById({
				id: _id,
				data: {
					favorite: !favorite,
				},
			})
		);
	};

	const onRemoveBtnClick = (id) => {
		dispatch(removeContactById(id));
		hideModal();
		navigate("/contacts");
	};

	const showModal = () => {
		setIsModalOpen(true);
	};

	const hideModal = () => {
		setIsModalOpen(false);
	};

	if (Object.keys(contactDetails).length === 0) return;

	return (
		<DetailsContainer className="container">
			<Avatar
				name={name}
				maxInitials={2}
				size="160px"
				textSizeRatio={1.5}
				round
				className="avatar"
			/>
			<p>Name : {name}</p>
			<p>email : {email}</p>
			<p>phone : {phone}</p>
			<p>address : {address}</p>
			<p>
				Added to phonebook :{" "}
				{moment(createdAt).format("MMMM Do YYYY, kk:mm")}
			</p>
			<p>
				Last edited : {moment(updatedAt).format("MMMM Do YYYY, kk:mm")}
			</p>
			<Checkbox
				icon={<BookmarkBorderIcon />}
				checkedIcon={<BookmarkIcon />}
				checked={favorite}
				onChange={toggleFavorite}
				className="checkbox"
			/>
			<button type="button" className="delete-btn" onClick={showModal}>
				<MdDelete size={25} />
			</button>
			{isModalOpen && (
				<Modal
					children={
						<ActionConfirmation
							name={name}
							id={_id}
							onRemoveBtnClick={onRemoveBtnClick}
							hideModal={hideModal}
						/>
					}
					hideModal={hideModal}
				/>
			)}
		</DetailsContainer>
	);
}
