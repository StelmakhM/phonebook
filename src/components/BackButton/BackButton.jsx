import { Button } from "@mui/material";
import React from "react";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import { Link, useLocation } from "react-router-dom";

export default function BackButton() {
	const location = useLocation();
	return (
		<Link to={location.state.from}>
			<Button
				variant="text"
				size="large"
				startIcon={<ArrowCircleLeftIcon />}
			>
				back
			</Button>
		</Link>
	);
}
