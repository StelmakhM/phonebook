import FormRow from "./FormRow";

export default function ContactFilter({ filter, setFilter }) {
	const onInputChange = (e) => {
		setFilter(e.target.value);
	};
	return (
		<FormRow
			type="text"
			placeholder="Type contact name"
			name="filter"
			value={filter}
			onChange={onInputChange}
		/>
	);
}
