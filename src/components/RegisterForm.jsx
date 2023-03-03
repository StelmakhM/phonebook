import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser, registerUser } from "../redux/user/userThunk";
import { saveFormData } from "../utils/saveFormData";

export default function RegisterForm() {
	const [isMember, setIsMember] = useState(false);
	const dispatch = useDispatch();

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

		// setFormValues(data);
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
				{!isMember && (
					<>
						<label htmlFor="name">Name</label>
						<input type="name" name="name" id="name" />
					</>
				)}

				<label htmlFor="email">Email</label>
				<input type="email" name="email" id="email" />
				<label htmlFor="password">Password</label>
				<input type="password" name="password" id="password" />
				<button type="submit" onSubmit={onFormSubmit}>
					Submit
				</button>
				<p>
					{isMember ? "Not a member yet ?" : "Already a member ?"}
					<button
						type="button"
						onClick={toggleMember}
						className="member-btn"
					>
						{isMember ? "Register" : "Login"}
					</button>
				</p>
			</form>
		</>
	);
}
