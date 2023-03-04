import { useSelector } from "react-redux";
import { Navigate } from "react-router";

export default function ProtectedRoute({ component: Component, redirect }) {
	const { user } = useSelector((state) => state.user);
	return user ? <Component /> : <Navigate to={redirect} />;
}
