import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addNewContact } from "../redux/contacts/contactsThunk";
import { addContactSchema } from "../utils/validationSchema";
import { CssTextField, Wrapper } from "./RegisterForm/RegisterForm.styled";

export default function AddContactForm() {
	const dispatch = useDispatch();

	const formik = useFormik({
		initialValues: {
			name: "",
			email: "",
			phone: "",
			address: "",
		},
		validationSchema: addContactSchema,
		onSubmit: (values, actions) => {
			dispatch(addNewContact(values));
			actions.resetForm();
		},
	});

	return (
		<Wrapper onSubmit={formik.handleSubmit}>
			<Link to="/contacts">Go back</Link>
			<CssTextField
				type="text"
				size="small"
				name="name"
				label="Name"
				variant="outlined"
				value={formik.values.name}
				onChange={formik.handleChange}
				error={formik.touched.name && Boolean(formik.errors.name)}
				helperText={formik.touched.name && formik.errors.name}
			/>
			<CssTextField
				type="email"
				size="small"
				name="email"
				label="Email"
				variant="outlined"
				value={formik.values.email}
				onChange={formik.handleChange}
				error={formik.touched.email && Boolean(formik.errors.email)}
				helperText={formik.touched.email && formik.errors.email}
			/>
			<CssTextField
				type="tel"
				size="small"
				name="phone"
				label="Phone"
				variant="outlined"
				value={formik.values.phone}
				onChange={formik.handleChange}
				error={formik.touched.phone && Boolean(formik.errors.phone)}
				helperText={formik.touched.phone && formik.errors.phone}
			/>
			<CssTextField
				type="text"
				size="small"
				name="address"
				label="Address"
				variant="outlined"
				value={formik.values.address}
				onChange={formik.handleChange}
				error={formik.touched.address && Boolean(formik.errors.address)}
				helperText={formik.touched.address && formik.errors.address}
			/>
			<button type="submit">Add contact</button>
		</Wrapper>
	);
}
