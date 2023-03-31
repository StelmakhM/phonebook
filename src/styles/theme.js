import { createTheme } from "@mui/material";
import { lightGreen, deepOrange } from "@mui/material/colors/";

export const themeOptions = {
	palette: {
		mode: "light",
		primary: {
			main: lightGreen[800],
		},
		secondary: {
			main: deepOrange[700],
		},
	},
	typography: {
		fontFamily: ["Cabin", "sans-serif"].join(", "),
		h1: {
			fontFamily: "Roboto-condensed",
		},
		h2: {
			fontFamily: "Roboto-condensed",
		},
		h3: {
			fontFamily: "Roboto-condensed",
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
		fontSize: "32px",
	},
	[theme.breakpoints.up("md")]: {
		fontSize: "40px",
	},
	[theme.breakpoints.up("lg")]: {
		fontSize: "48px",
	},
};
