import { useDispatch } from "react-redux";
import { updateContactById } from "../redux/contacts/contactsThunk";
import FormRow from "./FormRow";

export default function ContactItem({
	_id,
	name,
	email,
	favorite,
	phone,
	onEditBtnClick,
	onRemoveBtnClick,
}) {
	const dispatch = useDispatch();

	const onChange = () => {
		dispatch(
			updateContactById({
				id: _id,
				data: {
					favorite: !favorite,
				},
			})
		);
	};

	return (
		<li>
			<p>Name: {name}</p>
			<p>Email: {email}</p>
			<p>Phone: {phone}</p>
			<FormRow type="checkbox" checked={favorite} onChange={onChange} />
			<button onClick={() => onRemoveBtnClick(_id)}>Remove</button>
			<button onClick={() => onEditBtnClick(_id)}>Edit</button>
		</li>
	);
}
