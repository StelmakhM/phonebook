import { Checkbox } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router";
import {
	getContactById,
	removeContactById,
	updateContactById,
} from "../../redux/contacts/contactsThunk";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import Avatar from "react-avatar";
import moment from "moment";
import { MdDelete, MdEdit } from "react-icons/md";
import { DetailsContainer } from "./ContactDetails.styled";
import Modal from "../Modal/Modal";
import ModalConfirmDelete from "../ModalConfirmDelete/ModalConfirmDelete";
import ModalEditContact from "../ModalEditContact/ModalEditContact";
import { Link } from "react-router-dom";

export default function ContactDetails() {
	const { contactDetails } = useSelector((state) => state.contacts);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isEditing, setIsEditing] = useState(false);
	const { id } = useParams();
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const location = useLocation();

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

	const showEditModal = () => {
		setIsModalOpen(true);
		setIsEditing(true);
	};

	const hideModal = () => {
		setIsModalOpen(false);
		setIsEditing(false);
	};

	if (Object.keys(contactDetails).length === 0) return;

	return (
		<DetailsContainer>
			<Link to={location.state.from ?? "/contacts"}> Go back</Link>
			<Avatar
				name={name}
				maxInitials={2}
				size="80px"
				textSizeRatio={1.5}
				round
				className="avatar"
			/>
			<div>
				<div className="contact-info">
					<span className="info-title">Name:</span>
					<span className="info-text">{name}</span>
				</div>
				<div className="contact-info">
					<span className="info-title">Email:</span>
					<span className="info-text">{email}</span>
				</div>
				<div className="contact-info">
					<span className="info-title">Phone:</span>
					<span className="info-text">{phone}</span>
				</div>
				<div className="contact-info">
					<span className="info-title">Address:</span>
					<span className="info-text">{address}</span>
				</div>
				<p>
					Added to phonebook :{" "}
					{moment(createdAt).format("MMMM Do YYYY, kk:mm")}
				</p>
				<p>
					Last edited :{" "}
					{moment(updatedAt).format("MMMM Do YYYY, kk:mm")}
				</p>
			</div>
			<Checkbox
				icon={<BookmarkBorderIcon />}
				checkedIcon={<BookmarkIcon color="success" />}
				checked={favorite}
				onChange={toggleFavorite}
				className="checkbox"
			/>
			<button type="button" className="delete-btn" onClick={showModal}>
				<MdDelete size={25} />
			</button>
			<button
				type="button"
				className="delete-btn"
				onClick={showEditModal}
			>
				<MdEdit size={25} />
			</button>
			{isModalOpen && (
				<Modal
					hideModal={hideModal}
					children={
						!isEditing ? (
							<ModalConfirmDelete
								name={name}
								id={_id}
								onRemoveBtnClick={onRemoveBtnClick}
								hideModal={hideModal}
							/>
						) : (
							<ModalEditContact hideModal={hideModal} />
						)
					}
				/>
			)}
		</DetailsContainer>
	);
}
