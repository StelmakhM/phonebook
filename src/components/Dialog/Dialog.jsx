import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../redux/user/userThunk";

export default function LogoutDialog({ isDialogOpen, onDialogClose }) {
	const dispatch = useDispatch();

	return (
		<Dialog open={isDialogOpen} onClose={onDialogClose}>
			<DialogTitle id="alert-dialog-title">Confirm Logout</DialogTitle>
			<DialogContent>
				<DialogContentText id="alert-dialog-description">
					Are you sure you would like to logout?
				</DialogContentText>
			</DialogContent>
			<DialogActions sx={{ justifyContent: "center", columnGap: 2 }}>
				<Button
					variant="contained"
					onClick={() => {
						dispatch(logoutUser());
					}}
				>
					Yes
				</Button>
				<Button variant="contained" onClick={onDialogClose} autoFocus>
					No
				</Button>
			</DialogActions>
		</Dialog>
	);
}
