// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { updateContactById } from "../redux/contacts/contactsThunk";
// import FormRow from "./FormRow";

// export default function Modal({ hideModal, contactId }) {
// 	const { contacts } = useSelector((state) => state.contacts);
// 	const [contact] = contacts.filter((contact) => contact._id === contactId);
// 	const [contactInfo, setContactInfo] = useState({
// 		name: contact.name,
// 		email: contact.email,
// 		phone: contact.phone,
// 		favorite: contact.favorite,
// 	});
// 	const dispatch = useDispatch();

// 	const onBackdropClick = (e) => {
// 		if (e.currentTarget !== e.target) {
// 			return;
// 		}
// 		hideModal();
// 	};

// 	useEffect(() => {
// 		const closeModal = (e) => {
// 			if (e.code === "Escape") {
// 				hideModal();
// 			}
// 		};

// 		window.addEventListener("keydown", closeModal);
// 		return () => {
// 			window.removeEventListener("keydown", closeModal);
// 		};
// 	}, [hideModal]);

// 	const onInputChange = (e) => {
// 		const { name, value, type, checked } = e.target;
// 		setContactInfo({
// 			...contactInfo,
// 			[name]: type === "checkbox" ? checked : value,
// 		});
// 	};

// 	const onFormSubmit = (e) => {
// 		e.preventDefault();
// 		dispatch(updateContactById({ id: contactId, data: contactInfo }));
// 	};

// 	const { name, email, phone, favorite } = contactInfo;
// 	return (
// 		<div className="backdrop" onClick={onBackdropClick}>
// 			<div className="modal">
// 				<form onSubmit={onFormSubmit}>
// 					<FormRow
// 						type="text"
// 						name="name"
// 						value={name}
// 						onChange={onInputChange}
// 					/>
// 					<FormRow
// 						type="email"
// 						name="email"
// 						value={email}
// 						onChange={onInputChange}
// 					/>
// 					<FormRow
// 						type="text"
// 						name="phone"
// 						value={phone}
// 						onChange={onInputChange}
// 					/>
// 					<FormRow
// 						type="checkbox"
// 						name="favorite"
// 						checked={favorite}
// 						onChange={onInputChange}
// 					/>
// 					<button type="submit">Save</button>
// 				</form>
// 				<button type="button" onClick={hideModal}>
// 					Close
// 				</button>
// 			</div>
// 		</div>
// 	);
// }
