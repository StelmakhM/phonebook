import { styled } from "@mui/system";
import { Card, Stack } from "@mui/material";

export const StyledCard = styled(Card)(({ theme }) => ({
	position: "relative",
	[theme.breakpoints.up("sm")]: {
		maxWidth: "600px",
		margin: "0 auto",
	},
}));

export const StyledStack = styled(Stack)(({ theme }) => ({
	flexDirection: "column",
	position: "absolute",
	top: 0,
	right: 0,
	[theme.breakpoints.up("sm")]: {
		flexDirection: "row",
		top: 5,
		right: 5,
	},
}));
