import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import {
	getContactById,
	updateContactById,
} from "../../redux/contacts/contactsThunk";
import { editContactSchema } from "../../utils/validationSchema";
import { Box, CardContent, Typography } from "@mui/material";
import {
	StyledButton,
	StyledCard,
	StyledForm,
	StyledTextField,
} from "./ModalEditContact.styled";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";

export default function ModalEditContact() {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const { id } = useParams();

	const { contactDetails } = useSelector((state) => state.contacts);
	const { name, email, phone, address, _id } = contactDetails;

	useEffect(() => {
		dispatch(getContactById(id));
	}, [dispatch, id]);

	const initialValues = {
		name: name || "",
		email: email || "",
		phone: phone || "",
		address: address || "",
	};

	const formik = useFormik({
		initialValues,
		validationSchema: editContactSchema,
		onSubmit: (values) => {
			dispatch(
				updateContactById({
					id: _id,
					data: values,
				})
			);
			navigate(`/contacts/${id}`);
		},
	});

	useEffect(() => {
		if (contactDetails) {
			formik.setValues(initialValues);
		}
	}, [contactDetails]);

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
						Edit contact
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
								Reset
							</StyledButton>
						</Box>
					</StyledForm>
				</CardContent>
			</StyledCard>
		</Box>
	);
}
