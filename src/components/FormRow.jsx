import React from "react";

export default function FormRow({ type, name, value, onChange }) {
	return (
		<>
			<label>
				{name}
				<input
					type={type}
					name={name}
					value={value}
					onChange={onChange}
				/>
			</label>
		</>
	);
}
