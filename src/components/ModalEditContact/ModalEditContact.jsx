import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { updateContactById } from "../../redux/contacts/contactsThunk";
import { editContactSchema } from "../../utils/validationSchema";
import { Wrapper, CssTextField } from "../RegisterForm/RegisterForm.styled";

export default function ModalEditContact({ hideModal }) {
	const { contactDetails } = useSelector((state) => state.contacts);
	const dispatch = useDispatch();
	const { name, email, phone, address, _id } = contactDetails;
	const formik = useFormik({
		initialValues: {
			name,
			email,
			phone,
			address,
		},
		validationSchema: editContactSchema,
		onSubmit: (values, actions) => {
			dispatch(
				updateContactById({
					id: _id,
					data: values,
				})
			);
			actions.resetForm();
			hideModal();
		},
	});
	return (
		<Wrapper onSubmit={formik.handleSubmit}>
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
				error={formik.touched.name && Boolean(formik.errors.name)}
				helperText={formik.touched.name && formik.errors.name}
			/>
			<CssTextField
				type="tel"
				size="small"
				name="phone"
				label="Phone"
				variant="outlined"
				value={formik.values.phone}
				onChange={formik.handleChange}
				error={formik.touched.name && Boolean(formik.errors.name)}
				helperText={formik.touched.name && formik.errors.name}
			/>
			<CssTextField
				type="text"
				size="small"
				name="address"
				label="Address"
				variant="outlined"
				value={formik.values.address}
				onChange={formik.handleChange}
				error={formik.touched.name && Boolean(formik.errors.name)}
				helperText={formik.touched.name && formik.errors.name}
			/>
			<button type="submit">Save changes</button>
			<button type="button" onClick={hideModal}>
				Close
			</button>
		</Wrapper>
	);
}
