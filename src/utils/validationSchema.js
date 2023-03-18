import * as yup from "yup";

export const loginSchema = yup.object().shape({
	email: yup
		.string()
		.email("Enter a valid email")
		.required("Email is required"),
	password: yup.string().required("Password is required"),
});

export const registerSchema = yup.object().shape({
	name: yup.string().required("Name is required"),
	email: yup
		.string()
		.email("Enter a valid email")
		.required("Email is required"),
	password: yup.string().required("Password is required"),
	confirmPassword: yup
		.string()
		.oneOf([yup.ref("password"), null], "Passwords don't match")
		.required("Confirm password"),
});

export const editContactSchema = yup.object().shape({
	name: yup.string(),
	email: yup.string().email("Enter a valid email"),
	phone: yup.number("Enter a valid number"),
	address: yup.string(),
});
