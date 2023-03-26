import { useEffect, useState } from "react";
import { Pagination } from "@mui/material";

export default function CustomPagination({
	filteredContacts,
	setVisibleContacts,
	filter,
}) {
	const [page, setPage] = useState(1);

	const contactsPerPage = 6;
	const numPages = Math.ceil(filteredContacts.length / contactsPerPage);

	const startIndex = (page - 1) * contactsPerPage;
	const endIndex = startIndex + contactsPerPage;
	const contactsForPage = filteredContacts.slice(startIndex, endIndex);

	useEffect(() => {
		setVisibleContacts(contactsForPage);
		// setPage(1);
	});

	return (
		<Pagination
			size="large"
			count={numPages}
			page={page}
			onChange={(event, value) => setPage(value)}
			color="primary"
			sx={{ alignContent: "flex-end" }}
		/>
	);
}
