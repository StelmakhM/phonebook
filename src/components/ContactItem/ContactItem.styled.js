import { styled } from "@mui/system";
import { Card, Avatar } from "@mui/material";

export const Contact = styled(Card)({
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
