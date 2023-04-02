import { useDispatch } from "react-redux";
import { updateContactById } from "../../redux/contacts/contactsThunk";
import {
	CardContent,
	Checkbox,
	Grid,
	Tooltip,
	Typography,
} from "@mui/material";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import PersonIcon from "@mui/icons-material/Person";
import CallIcon from "@mui/icons-material/Call";
import Fade from "@mui/material/Fade";
import { stringAvatar } from "../../utils/avatarBackground";
import { Contact, StyledAvatar } from "./ContactItem.styled";

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
		<Grid component="li" data-id={_id} item xs={12} sm={10} md={6} lg={4}>
			<Contact elevation={2}>
				<CardContent>
					<Grid
						container
						direction="column"
						alignItems="center"
						position="relative"
						rowGap={3}
					>
						<Tooltip
							sx={{
								position: "absolute",
								top: 0,
								right: 0,
							}}
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
								onChange={onChange}
							/>
						</Tooltip>
						<StyledAvatar
							variant="rounded"
							{...stringAvatar(name)}
						/>
						<Grid container rowGap={2}>
							<Grid container gap={1.5}>
								<Grid item>
									<Tooltip
										title="Fullname"
										placement="top"
										TransitionComponent={Fade}
										TransitionProps={{ timeout: 600 }}
									>
										<PersonIcon color="info" />
									</Tooltip>
								</Grid>
								<Grid item maxWidth="calc(100% - 50px)">
									<Typography noWrap>{name}</Typography>
								</Grid>
							</Grid>
							<Grid container gap={1.5}>
								<Grid item>
									<Tooltip
										title="Phone number"
										placement="bottom"
										TransitionComponent={Fade}
										TransitionProps={{ timeout: 600 }}
									>
										<CallIcon color="success" />
									</Tooltip>
								</Grid>
								<Grid item maxWidth="calc(100% - 50px)">
									<Typography noWrap>{phone}</Typography>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</CardContent>
			</Contact>
		</Grid>
	);
}
