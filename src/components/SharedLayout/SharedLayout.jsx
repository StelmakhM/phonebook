import React, { useRef, useState } from "react";
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

	const container = useRef();

	return (
		<Container ref={container} maxWidth="lg" sx={{ position: "relative" }}>
			<Header handleDrawerToggle={handleDrawerToggle} />
			<Box component="main" display="flex">
				<SideBar
					mobileOpen={mobileOpen}
					handleDrawerToggle={handleDrawerToggle}
					ref={container.current}
				/>
				<Outlet />
			</Box>
			<Footer />
		</Container>
	);
}
