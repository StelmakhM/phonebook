import { Checkbox } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import {
	getContactById,
	updateContactById,
} from "../../redux/contacts/contactsThunk";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import Avatar from "react-avatar";
import moment from "moment";

// import { Facebook } from "react-content-loader";
// const MyFacebookLoader = () => <Facebook />;

export default function ContactDetails() {
	const { contactDetails } = useSelector((state) => state.contacts);
	const { id } = useParams();
	const dispatch = useDispatch();

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

	if (Object.keys(contactDetails).length === 0) return;

	return (
		<div className="container">
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
		</div>
	);
}
