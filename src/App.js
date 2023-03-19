import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import ContactDetails from "./components/ContactDetails/ContactDetails";
import ProtectedRoute from "./components/ProtecterRoute";
import ContactsPage from "./pages/ContactsPage";
import RegisterPage from "./pages/RegisterPage";
import AddContactForm from "./components/AddContactForm";

const router = createBrowserRouter([
	{
		path: "/register",
		element: <RegisterPage />,
	},
	{
		path: "/contacts",
		element: (
			<ProtectedRoute component={ContactsPage} redirect="/register" />
		),
	},
	{
		path: "/contacts/:id",
		element: (
			<ProtectedRoute component={ContactDetails} redirect="/register" />
		),
	},
	{
		path: "/contacts/addcontact",
		element: (
			<ProtectedRoute component={AddContactForm} redirect="/register" />
		),
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
