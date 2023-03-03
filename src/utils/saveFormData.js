export const saveFormData = (form) => {
	const formData = new FormData(form);
	const data = Object.fromEntries(formData);
	const values = [...formData.values()];
	const isEmpty = values.includes("");
	return { data, isEmpty };
};
