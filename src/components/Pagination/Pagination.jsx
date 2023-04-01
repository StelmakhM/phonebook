import { useEffect, useState } from "react";
import { Pagination } from "@mui/material";
import useResize from "../../hooks/useResize";
import { useLocation } from "react-router";

export default function CustomPagination({
	filteredContacts,
	setVisibleContacts,
	filter,
	isFavorite,
}) {
	const [page, setPage] = useState(1);
	const windowWidth = useResize();

	const contactsPerPage = () => {
		if (windowWidth < 900) return 2;
		if (windowWidth >= 900 && windowWidth < 1200) return 4;
		return 6;
	};
	const numPages = Math.ceil(filteredContacts.length / contactsPerPage());

	const startIndex = (page - 1) * contactsPerPage();
	const endIndex = startIndex + contactsPerPage();
	const contactsToRender = filteredContacts.slice(startIndex, endIndex);

	useEffect(() => {
		setVisibleContacts(contactsToRender);
	}, [filter, page]);

	useEffect(() => {
		setPage(1);
	}, [isFavorite]);

	return (
		filteredContacts.length > contactsPerPage() && (
			<Pagination
				shape="rounded"
				size={windowWidth < 600 ? "small" : "medium"}
				count={numPages}
				page={page}
				onChange={(event, value) => {
					setPage(value);
				}}
				color="primary"
			/>
		)
	);
}
