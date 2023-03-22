import { useDispatch, useSelector } from "react-redux";
import { updateContactById } from "../../redux/contacts/contactsThunk";
import { Box, Card, Checkbox, Grid, Typography } from "@mui/material";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import Avatar from "react-avatar";
// import { Wrapper } from "./ContactItem.styled";

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
		<Grid component="li" data-id={_id} item xs={12} sm={6} md={4}>
			<Avatar
				name={name}
				maxInitials={2}
				size={45}
				textSizeRatio={1.5}
				round="10px"
			/>
			<Box>
				<Typography>{name}</Typography>
				<Typography>{phone}</Typography>
			</Box>
			<Checkbox
				icon={<BookmarkBorderIcon />}
				checkedIcon={<BookmarkIcon />}
				checked={favorite}
				onChange={onChange}
			/>
		</Grid>
	);
}
