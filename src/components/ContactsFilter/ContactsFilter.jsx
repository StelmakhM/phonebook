import { TextField } from "@mui/material";
import { InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Badge } from "@mui/material";
import PermContactCalendarRoundedIcon from "@mui/icons-material/PermContactCalendarRounded";
import Fade from "@mui/material/Fade";
import { Tooltip } from "@mui/material";

export default function ContactFilter({ filter, onChange, filteredContacts }) {
	return (
		<TextField
			type="text"
			size="medium"
			name="filter"
			placeholder="Search contact"
			variant="outlined"
			value={filter}
			onChange={onChange}
			sx={{
				my: 2,
				mx: "auto",
				display: "flex",
				width: { xs: 1, sm: 0.7, md: 0.5 },
			}}
			InputProps={{
				startAdornment: (
					<InputAdornment position="start">
						<SearchIcon fontSize="large" color="primary" />
					</InputAdornment>
				),
				endAdornment: (
					<InputAdornment position="start">
						<Tooltip
							title="Contacts found"
							placement="top"
							TransitionComponent={Fade}
							TransitionProps={{ timeout: 600 }}
						>
							<Badge
								badgeContent={filteredContacts.length}
								color="secondary"
								showZero
							>
								<PermContactCalendarRoundedIcon fontSize="large" />
							</Badge>
						</Tooltip>
					</InputAdornment>
				),
			}}
		/>
	);
}
