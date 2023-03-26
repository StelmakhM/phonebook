import React from "react";
import { Outlet } from "react-router";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { Container, Box } from "@mui/material";
import SideBar from "../SideBar/SideBar";

export default function SharedLayout() {
	return (
		<Container maxWidth="lg" sx={{ position: "relative" }}>
			<Header />
			<Box component="main" display="flex">
				<SideBar />
				<Outlet />
			</Box>
			<Footer />
		</Container>
	);
}
