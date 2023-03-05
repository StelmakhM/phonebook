import React from "react";
import ContentImage from "../components/ContentImage";
import RegisterForm from "../components/RegisterForm/RegisterForm";
import hero from "../assets/images/hero-image.svg";

export default function RegisterPage() {
	return (
		<div>
			<RegisterForm />
			{/* <ContentImage src={hero} alt="phonebook app" /> */}
		</div>
	);
}
