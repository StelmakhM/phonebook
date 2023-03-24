import React from "react";
import { Outlet } from "react-router";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { Container } from "@mui/material";

export default function SharedLayout() {
	return (
		<Container maxWidth="lg">
			<Header />
			<Outlet />
			<Footer />
		</Container>
	);
}
