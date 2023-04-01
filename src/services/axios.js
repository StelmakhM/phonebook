import axios from "axios";
import { getUserFromLocalStorage } from "../utils/localStorage";

export const customFetch = axios.create({
	baseURL: "https://phonebook-api-lo.herokuapp.com/",
});

customFetch.interceptors.request.use((config) => {
	const user = getUserFromLocalStorage();
	if (user) {
		config.headers["Authorization"] = `Bearer ${user.token}`;
	}
	return config;
});

// export const registerUser = async (data) => {
// 	try {
// 		const response = await customFetch.post("/users/register", data);
// 		console.log(response.data);
// 		return response.data;
// 	} catch (error) {
// 		console.log(error);
// 	}
// };

// export const loginUser = async (data) => {
// 	try {
// 		const response = await customFetch.post("users/login", data);
// 		console.log(response.data);
// 		return response.data;
// 	} catch (error) {
// 		console.log(error);
// 	}
// };

// export const getAllContacts = async () => {
// 	try {
// 		const response = await customFetch("/contacts");
// 		console.log(response.data);

// 		return response.data;
// 	} catch (error) {
// 		console.log(error);
// 	}
// };
