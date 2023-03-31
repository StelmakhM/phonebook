import { styled } from "@mui/system";
import { NavLink } from "react-router-dom";
import { ListItem, Drawer } from "@mui/material";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";

export const sideBarIcons = [
	{
		text: "Contacts",
		icon: <PermContactCalendarIcon />,
		href: "/contacts",
	},
	{
		text: "Favorite",
		icon: <BookmarksIcon />,
		href: "favorite",
	},
	{
		text: "Add contact",
		icon: <PersonAddAlt1Icon />,
		href: "addcontact",
	},
];

export const StyledDrawer = styled(Drawer)(({ theme }) => ({
	zIndex: 1202,
	width: 200,
	flexShrink: 0,
	[`& .MuiDrawer-paper`]: {
		width: 200,
		boxSizing: "border-box",
		position: "static",
	},
	[theme.breakpoints.up("sm")]: {
		[`& .MuiDrawer-paper`]: {
			backgroundColor: "transparent",
		},
	},
	[theme.breakpoints.up("md")]: {
		width: 250,
		[`& .MuiDrawer-paper`]: {
			width: 250,
		},
	},
}));

export const StyledLink = styled(NavLink)(({ theme }) => ({
	"&.active": {
		".css-cveggr-MuiListItemIcon-root": {
			color: theme.palette.secondary.main,
		},
	},
}));

export const StyledListItem = styled(ListItem)(({ theme }) => ({
	transition: theme.transitions.create(["transform"], { duration: 400 }),
	"& .css-cveggr-MuiListItemIcon-root": {
		transition: theme.transitions.create(["color"], { duration: 400 }),
	},
	":hover": {
		transform: "translateX(10px)",
		".css-cveggr-MuiListItemIcon-root": {
			color: theme.palette.secondary.main,
		},
	},
}));
