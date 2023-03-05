import { Route, Routes } from "react-router";
import ProtectedRoute from "./components/ProtecterRoute";
import ContactsPage from "./pages/ContactsPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
	return (
		<Routes>
			<Route path="/register" element={<RegisterPage />} />
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
