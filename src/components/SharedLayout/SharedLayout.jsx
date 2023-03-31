import React, { useState } from "react";
import { Outlet } from "react-router";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { Container, Box } from "@mui/material";
import SideBar from "../SideBar/SideBar";

export default function SharedLayout() {
	const [mobileOpen, setMobileOpen] = useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	return (
		<Container
			maxWidth="xl"
			disableGutters
			sx={{
				position: "relative",
				height: "100vh",
				display: "flex",
				flexDirection: "column",
			}}
		>
			<Header handleDrawerToggle={handleDrawerToggle} />
			<Box
				component="main"
				display={{ xs: "block", sm: "flex" }}
				flexGrow="1"
			>
				<SideBar
					mobileOpen={mobileOpen}
					handleDrawerToggle={handleDrawerToggle}
				/>
				<Outlet />
			</Box>
			<Footer />
		</Container>
	);
}
