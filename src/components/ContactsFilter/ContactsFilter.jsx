import { TextField } from "@mui/material";
export default function ContactFilter({ filter, onChange }) {
	return (
		<TextField
			type="text"
			size="medium"
			name="filter"
			placeholder="Search contacts..."
			variant="outlined"
			value={filter}
			onChange={onChange}
			sx={{
				my: 2,
				mx: "auto",
				display: "flex",
				width: { xs: 1, sm: 0.7, md: 0.5 },
			}}
		/>
	);
}
