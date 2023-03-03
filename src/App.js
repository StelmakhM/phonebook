import { useState } from "react";
import { Route, Routes } from "react-router";
import ContactsList from "./components/ContactsList";
import RegisterForm from "./components/RegisterForm";

function App() {
	const [isAuth, setIsAuth] = useState(false);
	const [contacts, setContacts] = useState(null);

	return (
		<Routes>
			<Route path="/register" element={<RegisterForm />} />
			<Route path="/contacts" element={<ContactsList />} />
		</Routes>
	);
}

export default App;
