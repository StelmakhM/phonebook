import { styled } from "@mui/system";
import { Fab } from "@mui/material";

export const StyledFab = styled(Fab)({
	display: { xs: "none", sm: "flex" },
	position: "fixed",
	bottom: 70,
	right: 20,
	opacity: 0.6,
	transition: "opacity ease-in 200ms",
	"&:hover": {
		opacity: 1,
	},
});
