import {
	Checkbox,
	CardContent,
	Stack,
	Typography,
	Divider,
	IconButton,
	Tooltip,
	Box,
} from "@mui/material";
import Fade from "@mui/material/Fade";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
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
import moment from "moment";
import { StyledCard, StyledStack } from "./ContactDetails.styled";
import { stringAvatar } from "../../utils/avatarBackground";
import CustomDialog from "../Dialog/Dialog";
import { StyledAvatar } from "../ContactItem/ContactItem.styled";

export default function ContactDetails() {
	const [isDialogOpen, setisDialogOpen] = useState(false);
	const { contactDetails } = useSelector((state) => state.contacts);
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
		return () => {
			dispatch(removeContactById(id));
			navigate("/contacts");
		};
	};

	const onDialogClose = () => {
		setisDialogOpen(false);
	};

	const deleteBtnClick = () => {
		setisDialogOpen(true);
	};

	if (Object.keys(contactDetails).length === 0) return;

	const contactInfo = { name, phone, email, address };
	const systemInfo = { createdAt, updatedAt };

	return (
		<Box
			flexGrow={1}
			maxWidth={{ sm: "calc(100% - 200px)", md: "calc(100% - 250px)" }}
		>
			<StyledCard>
				<CardContent>
					<Stack
						direction="column"
						spacing={{ xs: 1.5, sm: 2.5 }}
						mb={2}
					>
						<StyledAvatar
							variant="rounded"
							{...stringAvatar(name)}
						/>
						{Object.keys(contactInfo).map((key) => (
							<Stack
								key={key}
								direction="row"
								spacing={{ xs: 1, sm: 2 }}
							>
								<Typography
									fontWeight={700}
									textTransform="capitalize"
								>
									{key}:
								</Typography>
								<Typography
									sx={{
										wordWrap: "break-word",
										maxWidth: "calc(100% - 80px)",
									}}
								>
									{contactInfo[key]}
								</Typography>
							</Stack>
						))}
						<Divider />
					</Stack>
					{Object.keys(systemInfo).map((key) => (
						<Stack
							key={key}
							direction="row"
							spacing={{ xs: 1, sm: 2 }}
						>
							<Typography
								fontStyle="italic"
								fontSize={{ xs: 14, sm: 16 }}
							>
								{key === "createdAt"
									? "Added to phonebook:"
									: "Last updated:"}
							</Typography>
							<Typography
								fontStyle="italic"
								fontSize={{ xs: 14, sm: 16 }}
							>
								{moment(systemInfo[key]).format(
									"MMMM Do YYYY, kk:mm"
								)}
							</Typography>
						</Stack>
					))}
					<StyledStack>
						<Tooltip
							placement="top"
							TransitionComponent={Fade}
							TransitionProps={{ timeout: 400 }}
							title={
								favorite
									? "Remove from favorite"
									: "Add to favorite"
							}
						>
							<Checkbox
								icon={<BookmarkBorderIcon />}
								checkedIcon={<BookmarkIcon color="success" />}
								checked={favorite}
								onChange={toggleFavorite}
							/>
						</Tooltip>
						<Tooltip
							placement="top"
							TransitionComponent={Fade}
							TransitionProps={{ timeout: 400 }}
							title="Edit contact"
						>
							<IconButton>
								<EditIcon />
							</IconButton>
						</Tooltip>
						<Tooltip
							placement="top"
							TransitionComponent={Fade}
							TransitionProps={{ timeout: 400 }}
							title="Delete contact"
						>
							<IconButton onClick={deleteBtnClick}>
								<DeleteIcon />
							</IconButton>
						</Tooltip>
					</StyledStack>
				</CardContent>
			</StyledCard>
			<CustomDialog
				isDialogOpen={isDialogOpen}
				onDialogClose={onDialogClose}
				dialogTitle="Confirm contact delete"
				dialogtText={`Are you sure you would like to delete ${name} from your phonebook?`}
				onConfirm={onRemoveBtnClick(_id)}
			/>
		</Box>
	);
}
