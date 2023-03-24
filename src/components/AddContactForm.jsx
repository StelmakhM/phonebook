import { Button, Card, CardContent, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { addNewContact } from "../redux/contacts/contactsThunk";
import { addContactSchema } from "../utils/validationSchema";
import BackButton from "./BackButton/BackButton";
import { CssTextField } from "./RegisterForm/RegisterForm.styled";

const StyledForm = styled("form")(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
}));

const StyledCard = styled(Card)(({ theme }) => ({
	[theme.breakpoints.up("sm")]: {
		width: "80%",
		maxWidth: "600px",
		margin: "0 auto",
	},
}));

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
					<Typography paragraph variant="h4" textAlign="center">
						Add new contact
					</Typography>
					<StyledForm
						component="form"
						noValidate
						autoComplete="off"
						onSubmit={handleSubmit}
					>
						<CssTextField
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
						<CssTextField
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
						<CssTextField
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
						<CssTextField
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
						<Button type="submit" variant="contained">
							Save
						</Button>
					</StyledForm>
				</CardContent>
			</StyledCard>
		</>
	);
}
