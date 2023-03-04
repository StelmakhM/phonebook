import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
	getAllContacts,
	getContactById,
	updateContactById,
} from "../redux/contacts/contactsThunk";

export default function ContactItem({
	_id,
	name,
	email,
	favorite,
	phone,
	onEditBtnClick,
	onRemoveBtnClick,
}) {
	const dispatch = useDispatch();

	return (
		<li>
			<p>Name: {name}</p>
			<p>Email: {email}</p>
			<p>Phone: {phone}</p>
			<input
				type="checkbox"
				checked={favorite}
				onChange={() =>
					dispatch(
						updateContactById({
							id: _id,
							data: {
								favorite: !favorite,
							},
						})
					)
				}
			/>
			<button onClick={() => onRemoveBtnClick(_id)}>Remove</button>
			<button onClick={() => onEditBtnClick(_id)}>Edit</button>
		</li>
	);
}
