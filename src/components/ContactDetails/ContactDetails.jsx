import {
	Checkbox,
	CardContent,
	Stack,
	Typography,
	Divider,
	IconButton,
	Tooltip,
} from "@mui/material";
import Fade from "@mui/material/Fade";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
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
import moment from "moment";
import { Link } from "react-router-dom";
import { StyledCard, StyledStack } from "./ContactDetails.styled";
import { StyledAvatar } from "../ContactItem/ContactItem";
import { stringAvatar } from "../../utils/avatarBackground";
import CustomDialog from "../Dialog/Dialog";

export default function ContactDetails() {
	const [isDialogOpen, setisDialogOpen] = useState(false);
	const { contactDetails } = useSelector((state) => state.contacts);
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
		<>
			<Link to={location.state.from ?? "/contacts"}> Go back</Link>
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
								<Typography fontWeight={700}>{key}:</Typography>
								<Typography noWrap>
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
							<Typography fontStyle="italic">
								{key === "createdAt"
									? "Added to phonebook:"
									: "Last updated:"}
							</Typography>
							<Typography fontStyle="italic">
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
							TransitionProps={{ timeout: 600 }}
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
							TransitionProps={{ timeout: 600 }}
							title="Edit contact"
						>
							<IconButton>
								<EditIcon />
							</IconButton>
						</Tooltip>
						<Tooltip
							placement="top"
							TransitionComponent={Fade}
							TransitionProps={{ timeout: 600 }}
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
		</>
	);
}
