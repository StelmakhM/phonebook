import { styled } from "@mui/system";
import { TextField, Button, Card } from "@mui/material";

export const StyledCard = styled(Card)(({ theme }) => ({
	width: "95%",
	margin: "0 auto",
	[theme.breakpoints.up("sm")]: {
		width: "90%",
	},
}));

export const StyledForm = styled("form")(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	[theme.breakpoints.up("lg")]: {
		gap: theme.spacing(3),
	},
}));

export const StyledTextField = styled(TextField)(({ theme }) => ({
	position: "relative",
	width: "100%",
	marginBottom: theme.spacing(4),
	[".css-132mu4n-MuiFormHelperText-root.Mui-error"]: {
		position: "absolute",
		bottom: 0,
		left: 0,
		transform: "translateY(100%)",
	},
}));

export const StyledButton = styled(Button)(({ theme }) => ({
	minWidth: "90px",
	flexGrow: "1",
	maxWidth: "250px",
}));
