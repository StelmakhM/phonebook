import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllContacts } from "../../redux/contacts/contactsThunk";
import { useLocation, useNavigate } from "react-router";
import { Grid, Container } from "@mui/material";
import ContactFilter from "../ContactsFilter/ContactsFilter";
import ContactItem from "../ContactItem/ContactItem";
import AddContactFab from "../AddContactFab/AddContactFab";
import CustomPagination from "../Pagination/Pagination";

export default function ContactsList() {
	let { contacts } = useSelector((state) => state.contacts);
	const [visibleContacts, setVisibleContacts] = useState([]);
	const [filter, setFilter] = useState(
		() => sessionStorage.getItem("filter") || ""
	);

	const dispatch = useDispatch();
	const navigate = useNavigate();
	const location = useLocation();

	const isFavorite = location.pathname.includes("favorite");

	useEffect(() => {
		dispatch(getAllContacts());
	}, [dispatch]);

	const handleScrollPosition = () => {
		const scrollPosition = sessionStorage.getItem("scrollPosition");
		if (scrollPosition) {
			window.scrollTo(0, parseInt(scrollPosition));
			sessionStorage.removeItem("scrollPosition");
		}
	};

	useEffect(() => {
		handleScrollPosition();
		sessionStorage.removeItem("filter");
	});

	if (contacts.length === 0) return;

	if (isFavorite) {
		contacts = [...contacts].filter((contact) => contact.favorite);
	}

	const filteredContacts = contacts.filter((contact) =>
		contact.name.toLowerCase().includes(filter.toLowerCase())
	);

	const onContactClick = (e) => {
		if (e.target.tagName === "INPUT") {
			return;
		}
		const { id } = e.target.closest("li").dataset;
		sessionStorage.setItem("scrollPosition", window.pageYOffset);
		sessionStorage.setItem("filter", filter);
		navigate(isFavorite ? `/contacts/${id}` : `${id}`, {
			state: {
				from: location,
			},
		});
	};

	const onFilterChange = (e) => {
		setFilter(e.target.value);
	};

	return (
		<Container
			sx={{
				display: "flex",
				flexDirection: "column",
				gap: 2,
				alignItems: "center",
				py: 2,
			}}
		>
			<ContactFilter
				filter={filter}
				onChange={onFilterChange}
				filteredContacts={filteredContacts}
			/>
			<Grid
				container
				component="ul"
				onClick={onContactClick}
				direction="row"
				justifyContent={{ xs: "center", md: "flex-start" }}
				alignItems="flex-start"
				flexGrow={1}
				spacing={{ xs: 2, md: 3 }}
			>
				{visibleContacts.map((contact) => (
					<ContactItem key={contact._id} {...contact} />
				))}
			</Grid>
			<AddContactFab />
			<CustomPagination
				filteredContacts={filteredContacts}
				setVisibleContacts={setVisibleContacts}
				filter={filter}
				isFavorite={isFavorite}
			/>
		</Container>
	);
}
