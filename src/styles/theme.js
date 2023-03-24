import { createTheme } from "@mui/material";

export const themeOptions = {
	palette: {
		mode: "light",
		primary: {
			main: "#2f601f",
		},
		secondary: {
			main: "#9c27b0",
		},
	},
	typography: {
		h1: {
			fontFamily: "Garamond",
		},
		h2: {
			fontFamily: "Garamond",
		},
		shape: {
			borderRadius: 4,
		},
	},
	spacing: 8,
	breakpoints: {
		values: {
			xs: 0,
			sm: 600,
			md: 900,
			lg: 1200,
			xl: 1536,
		},
	},
};

export const theme = createTheme(themeOptions);

theme.typography.h2 = {
	fontFamily: "Garamond",
	fontSize: "28px",
	[theme.breakpoints.up("sm")]: {
		fontSize: "48px",
	},
};
