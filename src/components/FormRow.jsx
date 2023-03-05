export default function FormRow({
	type,
	name,
	value,
	onChange,
	checked,
	placeholder,
}) {
	return (
		<>
			<label htmlFor={name}>{name}</label>
			<input
				id={name}
				type={type}
				name={name}
				value={value}
				onChange={onChange}
				checked={checked}
				placeholder={placeholder}
			/>
		</>
	);
}
