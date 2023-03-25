import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function CustomDialog({
	isDialogOpen,
	onDialogClose,
	dialogTitle,
	dialogtText,
	onConfirm,
}) {
	return (
		<Dialog open={isDialogOpen} onClose={onDialogClose}>
			<DialogTitle id="alert-dialog-title">{dialogTitle}</DialogTitle>
			<DialogContent>
				<DialogContentText id="alert-dialog-description">
					{dialogtText}
				</DialogContentText>
			</DialogContent>
			<DialogActions sx={{ justifyContent: "center", columnGap: 2 }}>
				<Button variant="contained" onClick={onConfirm}>
					Yes
				</Button>
				<Button variant="contained" onClick={onDialogClose} autoFocus>
					No
				</Button>
			</DialogActions>
		</Dialog>
	);
}
