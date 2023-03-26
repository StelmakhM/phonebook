import {
	Drawer,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	Divider,
	Box,
	Toolbar,
	ListItemText,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

export default function SideBar() {
	return (
		<Drawer
			variant="permanent"
			sx={{
				width: 200,
				flexShrink: 0,
				[`& .MuiDrawer-paper`]: {
					width: 200,
					boxSizing: "border-box",
					position: "static",
				},
			}}
		>
			{/* <Toolbar /> */}
			<Box sx={{ overflow: "auto" }}>
				<List>
					{["Inbox", "Starred", "Send email", "Drafts"].map(
						(text, index) => (
							<ListItem key={text} disablePadding>
								<ListItemButton>
									<ListItemIcon>
										{index % 2 === 0 ? (
											<InboxIcon />
										) : (
											<MailIcon />
										)}
									</ListItemIcon>
									<ListItemText primary={text} />
								</ListItemButton>
							</ListItem>
						)
					)}
				</List>
				<Divider />
				<List>
					{["All mail", "Trash", "Spam"].map((text, index) => (
						<ListItem key={text} disablePadding>
							<ListItemButton>
								<ListItemIcon>
									{index % 2 === 0 ? (
										<InboxIcon />
									) : (
										<MailIcon />
									)}
								</ListItemIcon>
								<ListItemText primary={text} />
							</ListItemButton>
						</ListItem>
					))}
				</List>
			</Box>
		</Drawer>
	);
}
