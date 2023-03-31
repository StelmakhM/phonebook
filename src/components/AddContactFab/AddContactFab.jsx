import AddIcon from "@mui/icons-material/Add";
import useResize from "../../hooks/useResize";
import { useLocation, useNavigate } from "react-router";
import { StyledFab } from "./AddContactFab.styled";

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
			{windowWidth >= 600 ? "add new" : false}
		</StyledFab>
	);
}
