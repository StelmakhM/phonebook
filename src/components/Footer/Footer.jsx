import {
	AppBar,
	Toolbar,
	Typography,
	Stack,
	IconButton,
	Fade,
	Tooltip,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import useResize from "../../hooks/useResize";

let copyright = String.fromCodePoint(0x00a9);

export default function Footer() {
	const windowWidth = useResize();
	return (
		<AppBar position="static" component="footer">
			<Toolbar>
				<Stack
					direction="row"
					spacing={{ xs: 0, sm: 1 }}
					alignItems="center"
				>
					<Tooltip
						title="GitHub"
						placement="top"
						TransitionComponent={Fade}
						TransitionProps={{ timeout: 600 }}
					>
						<IconButton
							href="https://github.com/StelmakhM"
							target="_blank"
							size="large"
							color="inherit"
						>
							<GitHubIcon
								fontSize={
									windowWidth < 900 ? "small" : "medium"
								}
							/>
						</IconButton>
					</Tooltip>
					<Tooltip
						title="LinkedIn"
						placement="top"
						TransitionComponent={Fade}
						TransitionProps={{ timeout: 600 }}
					>
						<IconButton
							href="https://www.linkedin.com/in/maksym-stelmakh/"
							target="_blank"
							size="large"
							color="inherit"
						>
							<LinkedInIcon
								fontSize={
									windowWidth < 900 ? "medium" : "large"
								}
							/>
						</IconButton>
					</Tooltip>
				</Stack>
				<Typography
					mx="auto"
					sx={{
						fontSize: { xs: "14px", sm: "16px", md: "18px" },
					}}
				>
					Phonebook {copyright}, {new Date().getFullYear()}
				</Typography>
			</Toolbar>
		</AppBar>
	);
}
