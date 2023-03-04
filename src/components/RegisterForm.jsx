import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { loginUser, registerUser } from "../redux/user/userThunk";
import { saveFormData } from "../utils/saveFormData";
import FormRow from "./FormRow";

export default function RegisterForm() {
	const [isMember, setIsMember] = useState(false);
	const { user } = useSelector((state) => state.user);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	useEffect(() => {
		if (user) {
			navigate("/contacts");
		}
	}, [user, navigate]);

	const toggleMember = () => {
		setIsMember(!isMember);
	};

	const onFormSubmit = async (e) => {
		e.preventDefault();
		const { isEmpty, data } = saveFormData(e.currentTarget);
		if (isEmpty) {
			console.log("Please, provide all values");
			return;
		}
		if (isMember) {
			dispatch(loginUser(data));
		} else {
			dispatch(registerUser(data));
		}
		e.currentTarget.reset();
	};
	return (
		<>
			<form onSubmit={onFormSubmit}>
				<h3>{isMember ? "Login" : "Register"}</h3>
				{!isMember && <FormRow type="text" name="name" />}
				<FormRow type="email" name="email" />
				<FormRow type="password" name="password" />
				<button type="submit" onSubmit={onFormSubmit}>
					Submit
				</button>
				<p>
					{isMember ? "Not a member yet ?" : "Already a member ?"}
					<button type="button" onClick={toggleMember}>
						{isMember ? "Register" : "Login"}
					</button>
				</p>
			</form>
		</>
	);
}
