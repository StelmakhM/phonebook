import { styled } from "@mui/system";
import { TextField } from "@mui/material";
import { Card } from "@mui/material";

export const StyledCard = styled(Card)(({ theme }) => ({
	[theme.breakpoints.up("sm")]: {
		width: "100%",
		maxWidth: "600px",
		margin: "0 auto",
	},
}));

export const StyledForm = styled("form")(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	gap: theme.spacing(3.5),
	[theme.breakpoints.up("sm")]: {
		gap: theme.spacing(4.5),
	},
}));

export const StyledTextField = styled(TextField)({
	".css-k4qjio-MuiFormHelperText-root.Mui-error": {
		position: "absolute",
		bottom: 0,
		left: 0,
		transform: "translateY(100%)",
	},
});
