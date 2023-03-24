import Fab from "@mui/material/Fab";
import styled from "@emotion/styled";
import AddIcon from "@mui/icons-material/Add";
import useResize from "../../hooks/useResize";
import { useLocation, useNavigate } from "react-router";

const StyledFab = styled(Fab)({
	display: { xs: "none", sm: "flex" },
	position: "fixed",
	bottom: 20,
	right: 20,
	opacity: 0.6,
	transition: "opacity ease-in 200ms",
	"&:hover": {
		opacity: 1,
	},
});

export default function AddContactFab() {
	const navigate = useNavigate();
	const location = useLocation();
	const windowWidth = useResize();

	return (
		<StyledFab
			onClick={() => {
				navigate("addcontact", {
					state: {
						from: location,
					},
				});
			}}
			color="primary"
			aria-label="add"
			variant={windowWidth >= 600 ? "extended" : "circular"}
		>
			<AddIcon sx={{ mr: windowWidth >= 600 ? 1 : 0 }} />
			{windowWidth >= 600 ? "add new" : ""}
		</StyledFab>
	);
}
