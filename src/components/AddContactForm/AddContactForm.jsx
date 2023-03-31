import { CardContent, Typography, Box } from "@mui/material";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { addNewContact } from "../../redux/contacts/contactsThunk";
import { addContactSchema } from "../../utils/validationSchema";
import {
	StyledButton,
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
	const { values, handleChange, handleSubmit, errors, touched, handleReset } =
		formik;

	return (
		<Box pt={3} width={1}>
			<StyledCard>
				<CardContent>
					<Typography
						paragraph
						variant="h3"
						textAlign="center"
						sx={{
							fontSize: { xs: "24px", sm: "32px", md: "36px" },
						}}
					>
						Add new contact
					</Typography>
					<StyledForm
						component="form"
						noValidate
						autoComplete="off"
						onSubmit={handleSubmit}
					>
						<Box
							sx={{ display: { lg: "flex" } }}
							gap={3}
							justifyContent="center"
						>
							<Box>
								<StyledTextField
									required
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
									required
									type="tel"
									size="small"
									name="phone"
									label="Phone"
									variant="outlined"
									value={values.phone}
									onChange={handleChange}
									error={
										touched.phone && Boolean(errors.phone)
									}
									helperText={touched.phone && errors.phone}
								/>
							</Box>
							<Box>
								<StyledTextField
									type="email"
									size="small"
									name="email"
									label="Email"
									variant="outlined"
									value={values.email}
									onChange={handleChange}
									error={
										touched.email && Boolean(errors.email)
									}
									helperText={touched.email && errors.email}
								/>

								<StyledTextField
									type="text"
									size="small"
									name="address"
									label="Address"
									variant="outlined"
									value={values.address}
									onChange={handleChange}
									error={
										touched.address &&
										Boolean(errors.address)
									}
									helperText={
										touched.address && errors.address
									}
								/>
							</Box>
						</Box>
						<Box
							display="flex"
							justifyContent="center"
							gap={{ xs: 2, lg: 4 }}
							flexWrap="wrap"
						>
							<StyledButton
								type="submit"
								variant="contained"
								color="primary"
							>
								Save
							</StyledButton>
							<StyledButton
								type="button"
								variant="contained"
								color="info"
								onClick={handleReset}
							>
								Clear
							</StyledButton>
						</Box>
					</StyledForm>
				</CardContent>
			</StyledCard>
		</Box>
	);
}
