import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import LogoutIcon from "@mui/icons-material/Logout";
import LogoutDialog from "../Dialog/Dialog";
import { useState } from "react";

export default function Header() {
	const [isDialogOpen, setisDialogOpen] = useState(false);

	const onDialogClose = () => {
		setisDialogOpen(false);
	};

	const onLogoutClick = () => {
		setisDialogOpen(true);
	};

	return (
		<>
			<Box sx={{ flexGrow: 1, mb: 3 }}>
				<AppBar position="static">
					<Toolbar>
						<Typography
							variant="h2"
							component="h1"
							sx={{ flexGrow: 1 }}
						>
							Phonebook
						</Typography>
						<Button
							onClick={onLogoutClick}
							color="inherit"
							endIcon={<LogoutIcon />}
							sx={{ display: { xs: "none", sm: "flex" } }}
						>
							Logout
						</Button>
						<IconButton
							onClick={onLogoutClick}
							color="inherit"
							sx={{ display: { xs: "block", sm: "none" } }}
						>
							<LogoutIcon />
						</IconButton>
					</Toolbar>
				</AppBar>
			</Box>
			<LogoutDialog
				isDialogOpen={isDialogOpen}
				onDialogClose={onDialogClose}
			/>
		</>
	);
}
