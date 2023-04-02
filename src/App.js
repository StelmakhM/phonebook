import { Navigate, RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import ContactDetails from "./components/ContactDetails/ContactDetails";
import ProtectedRoute from "./components/ProtecterRoute";
import ContactsPage from "./pages/ContactsPage";
import RegisterPage from "./pages/RegisterPage";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import { ThemeProvider } from "@mui/material";
import { theme } from "./styles/theme";
import AddContactForm from "./components/AddContactForm/AddContactForm";
import EditContactForm from "./components/EditContactForm/EditContactForm";

const router = createBrowserRouter(
	[
		{
			path: "/",
			element: <Navigate to="/contacts" replace />,
		},
		{
			path: "/register",
			element: <RegisterPage />,
		},
		{
			path: "/contacts",
			element: <SharedLayout />,
			children: [
				{
					index: true,
					element: (
						<ProtectedRoute
							component={ContactsPage}
							redirect="/register"
						/>
					),
				},
				{
					path: "favorite",
					element: (
						<ProtectedRoute
							component={ContactsPage}
							redirect="/register"
						/>
					),
				},
				{
					path: ":id",
					element: (
						<ProtectedRoute
							component={ContactDetails}
							redirect="/register"
						/>
					),
				},
				{
					path: ":id/editcontact",
					element: (
						<ProtectedRoute
							component={EditContactForm}
							redirect="/register"
						/>
					),
				},
				{
					path: "addcontact",
					element: (
						<ProtectedRoute
							component={AddContactForm}
							redirect="/register"
						/>
					),
				},
			],
		},
	],
	{ basename: "/phonebook" }
);

function App() {
	return (
		<ThemeProvider theme={theme}>
			<RouterProvider router={router} />
		</ThemeProvider>
	);
}

export default App;
