import {
	List,
	ListItemButton,
	ListItemIcon,
	Box,
	ListItemText,
} from "@mui/material";

import {
	sideBarIcons,
	StyledDrawer,
	StyledLink,
	StyledListItem,
} from "./SideBar.styled";

const SideBar = ({ mobileOpen, handleDrawerToggle }) => {
	const sideBarContent = (
		<Box component="nav" sx={{ overflow: "hidden" }}>
			<List>
				{sideBarIcons.map(({ text, icon, href }) => (
					<StyledListItem key={text} disablePadding>
						<ListItemButton
							component={StyledLink}
							to={href}
							end
							onClick={handleDrawerToggle}
						>
							<ListItemIcon>{icon}</ListItemIcon>
							<ListItemText
								primary={text}
								primaryTypographyProps={{
									fontSize: { sm: 16, md: 20 },
								}}
							/>
						</ListItemButton>
					</StyledListItem>
				))}
			</List>
		</Box>
	);

	return (
		<>
			<StyledDrawer
				variant="permanent"
				sx={{
					display: {
						xs: "none",
						sm: "block",
					},
				}}
			>
				{sideBarContent}
			</StyledDrawer>
			<StyledDrawer
				variant="temporary"
				open={mobileOpen}
				onClose={handleDrawerToggle}
				ModalProps={{
					keepMounted: true,
				}}
				sx={{
					display: {
						xs: "block",
						sm: "none",
					},
				}}
			>
				{sideBarContent}
			</StyledDrawer>
		</>
	);
};

export default SideBar;
