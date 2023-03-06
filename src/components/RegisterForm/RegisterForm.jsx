import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { loginUser, registerUser } from "../../redux/user/userThunk";
import { Wrapper } from "./RegisterForm.styled";
import logo from "../../assets/images/phone-logo.svg";
import { CssTextField } from "./RegisterForm.styled";
import { useFormik } from "formik";
import { loginSchema, registerSchema } from "../../utils/validationSchema";

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

	const formik = useFormik({
		initialValues: {
			name: "",
			email: "",
			password: "",
			confirmPassword: "",
		},
		validationSchema: isMember ? loginSchema : registerSchema,
		onSubmit: (values, actions) => {
			if (isMember) {
				const { email, password } = values;
				dispatch(loginUser({ email, password }));
			} else {
				const { name, email, password } = values;
				dispatch(registerUser({ name, email, password }));
			}
			actions.resetForm();
		},
	});

	const toggleMember = () => {
		setIsMember(!isMember);
	};

	return (
		<>
			<Wrapper onSubmit={formik.handleSubmit} noValidate>
				<div className="title">
					<img src={logo} alt="phonebook" className="logo" />
					<h1>Phonebook</h1>
				</div>
				<h3 className="subtitle">{isMember ? "Login" : "Register"}</h3>
				{!isMember && (
					<CssTextField
						type="text"
						size="small"
						name="name"
						label="Name"
						variant="outlined"
						value={formik.values.name}
						onChange={formik.handleChange}
						error={
							formik.touched.name && Boolean(formik.errors.name)
						}
						helperText={formik.touched.name && formik.errors.name}
						required
					/>
				)}
				<CssTextField
					type="email"
					size="small"
					name="email"
					label="Email"
					variant="outlined"
					required
					value={formik.values.email}
					onChange={formik.handleChange}
					error={formik.touched.email && Boolean(formik.errors.email)}
					helperText={formik.touched.email && formik.errors.email}
				/>
				<CssTextField
					size="small"
					name="password"
					type="password"
					label="Password"
					variant="outlined"
					required
					value={formik.values.password}
					onChange={formik.handleChange}
					error={
						formik.touched.password &&
						Boolean(formik.errors.password)
					}
					helperText={
						formik.touched.password && formik.errors.password
					}
				/>
				{!isMember && (
					<CssTextField
						type="password"
						size="small"
						name="confirmPassword"
						label="Confirm password"
						variant="outlined"
						value={formik.values.confirmPassword}
						onChange={formik.handleChange}
						error={
							formik.touched.confirmPassword &&
							Boolean(formik.errors.confirmPassword)
						}
						helperText={
							formik.touched.confirmPassword &&
							formik.errors.confirmPassword
						}
						required
					/>
				)}
				<button type="submit" className="form-btn">
					Submit
				</button>
				<button type="button" className="form-btn">
					Demo
				</button>
				<p className="toggle-text">
					{isMember ? "Not a member yet?" : "Already a member?"}
					<button
						type="button"
						className="toggle-btn"
						onClick={toggleMember}
					>
						{isMember ? "Register" : "Login"}
					</button>
				</p>
			</Wrapper>
		</>
	);
}
