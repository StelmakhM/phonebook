import { TextField } from "@mui/material";
export default function ContactFilter({ filter, onChange }) {
	return (
		<TextField
			fullWidth
			type="text"
			size="small"
			name="filter"
			placeholder="Search contacts..."
			variant="outlined"
			value={filter}
			onChange={onChange}
		/>
	);
}
