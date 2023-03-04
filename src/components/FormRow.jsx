export default function FormRow({ type, name, value, onChange, checked }) {
	return (
		<>
			<label>
				{name}
				<input
					type={type}
					name={name}
					value={value}
					onChange={onChange}
					checked={checked}
				/>
			</label>
		</>
	);
}
