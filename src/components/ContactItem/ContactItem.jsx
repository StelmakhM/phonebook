import { useDispatch, useSelector } from "react-redux";
import { updateContactById } from "../../redux/contacts/contactsThunk";
import { Checkbox } from "@mui/material";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import Avatar from "react-avatar";
import { Wrapper } from "./ContactItem.styled";

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
	// const { isLoading } = useSelector((state) => state.contacts);

	const onChange = () => {
		dispatch(
			updateContactById({
				id: _id,
				data: {
					favorite: !favorite,
				},
			})
		);
	};

	return (
		<Wrapper data-id={_id}>
			<Avatar
				name={name}
				maxInitials={2}
				size={45}
				textSizeRatio={1.5}
				round="10px"
				className="avatar"
			/>
			<div className="contact-info">
				<p>{name}</p>
				<p>{phone}</p>
			</div>
			<Checkbox
				icon={<BookmarkBorderIcon />}
				checkedIcon={<BookmarkIcon />}
				checked={favorite}
				onChange={onChange}
				className="checkbox"
			/>
			{/* <button onClick={() => onRemoveBtnClick(_id)}>Remove</button>
			<button onClick={() => onEditBtnClick(_id)}>Edit</button> */}
		</Wrapper>
	);
}
