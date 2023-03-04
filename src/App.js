import { Route, Routes } from "react-router";
import RegisterForm from "./components/RegisterForm";
import ProtectedRoute from "./components/ProtecterRoute";
import ContactsPage from "./pages/ContactsPage";

function App() {
	return (
		<Routes>
			<Route path="/register" element={<RegisterForm />} />
			<Route
				path="/contacts"
				element={
					<ProtectedRoute
						component={ContactsPage}
						redirect="/register"
					/>
				}
			/>
		</Routes>
	);
}

export default App;
