import { Button, CardContent, Typography } from "@mui/material";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { addNewContact } from "../../redux/contacts/contactsThunk";
import { addContactSchema } from "../../utils/validationSchema";
import BackButton from "../BackButton/BackButton";
import {
	StyledCard,
	StyledForm,
	StyledTextField,
} from "./AddContactForm.styled";

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
	const { values, handleChange, handleSubmit, errors, touched } = formik;

	return (
		<>
			<BackButton />
			<StyledCard>
				<CardContent>
					<Typography paragraph variant="h2" textAlign="center">
						Add new contact
					</Typography>
					<StyledForm
						component="form"
						noValidate
						autoComplete="off"
						onSubmit={handleSubmit}
					>
						<StyledTextField
							type="text"
							size="small"
							name="name"
							label="Name"
							variant="outlined"
							value={values.name}
							onChange={handleChange}
							error={touched.name && Boolean(errors.name)}
							helperText={touched.name && errors.name}
						/>
						<StyledTextField
							type="email"
							size="small"
							name="email"
							label="Email"
							variant="outlined"
							value={values.email}
							onChange={handleChange}
							error={touched.email && Boolean(errors.email)}
							helperText={touched.email && errors.email}
						/>
						<StyledTextField
							type="tel"
							size="small"
							name="phone"
							label="Phone"
							variant="outlined"
							value={values.phone}
							onChange={handleChange}
							error={touched.phone && Boolean(errors.phone)}
							helperText={touched.phone && errors.phone}
						/>
						<StyledTextField
							type="text"
							size="small"
							name="address"
							label="Address"
							variant="outlined"
							value={values.address}
							onChange={handleChange}
							error={touched.address && Boolean(errors.address)}
							helperText={touched.address && errors.address}
						/>
						<Button
							type="submit"
							variant="contained"
							color="primary"
						>
							Save
						</Button>
					</StyledForm>
				</CardContent>
			</StyledCard>
		</>
	);
}
