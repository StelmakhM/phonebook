import { useDispatch } from "react-redux";
import { updateContactById } from "../../redux/contacts/contactsThunk";
import {
	Card,
	CardContent,
	Checkbox,
	Grid,
	styled,
	Tooltip,
	Typography,
} from "@mui/material";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import PersonIcon from "@mui/icons-material/Person";
import CallIcon from "@mui/icons-material/Call";
import Fade from "@mui/material/Fade";
import { Avatar } from "@mui/material";
import { stringAvatar } from "../../utils/avatarBackground";

const Contact = styled(Card)({
	cursor: "pointer",
	transition: "all 0.3s",
	"&:hover": {
		transform: "scale(1.05)",
		boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.3)",
	},
});

export const StyledAvatar = styled(Avatar)(({ theme }) => ({
	alignSelf: "center",
	width: 40,
	height: 40,
	[theme.breakpoints.up("sm")]: {
		width: 50,
		height: 50,
	},
}));

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
		<Grid component="li" data-id={_id} item xs={12} sm={6} md={6} lg={4}>
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
								checkedIcon={<BookmarkIcon />}
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
								<Grid item maxWidth="90%">
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
								<Grid item>
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
