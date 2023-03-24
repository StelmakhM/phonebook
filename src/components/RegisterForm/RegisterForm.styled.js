import styled from "styled-components";
import { TextField } from "@mui/material";

export const Wrapper = styled.form`
	display: flex;
	flex-direction: column;
	background-color: white;
	max-width: 400px;
	width: 90vw;
	padding: 2rem 2.5rem;
	border-top: 5px solid var(--green-300);
	border-radius: 7px;
	transition: var(--transition-slow);
	box-shadow: var(--shadow-2);

	@media screen and (min-width: 768px) {
		min-width: 370px;
		max-width: 500px;
	}

	.title {
		margin: 0 auto 1.5rem;
		display: flex;
		align-items: center;
	}

	.logo {
		width: 45px;
		margin-right: 0.7rem;
	}

	.subtitle {
		font-size: 1.5rem;
		text-align: center;
		margin-bottom: 1.5rem;
	}

	.form-btn {
		font-size: 1.1rem;
		letter-spacing: 0.05rem;
		padding: 10px 0;
		border: transparent;
		background-color: var(--green-50);
		color: var(--green-400);
		border-radius: 4px;
		margin-bottom: 1rem;
		box-shadow: var(--shadow-2);
		transition: var(--transition-fast);

		&:hover,
		&:focus {
			background-color: var(--green-300);
			color: white;
		}
	}

	.toggle-text {
		font-size: 1.1rem;
		margin: 0 auto;
	}

	.toggle-btn {
		font-size: 1.1rem;
		letter-spacing: 0.05rem;
		color: var(--green-400);
		border: transparent;
		background: transparent;
		padding: 3px 5px;
		outline-color: var(--green-400);
	}
`;

export const CssTextField = styled(TextField)`
	&&.css-1u3bzj6-MuiFormControl-root-MuiTextField-root {
		margin-bottom: 1.7rem;
	}

	.css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused
		.MuiOutlinedInput-notchedOutline {
		border-color: var(--green-300);
	}

	&&:hover fieldset {
		border-color: var(--green-200);
	}

	&& label.Mui-focused {
		color: var(--green-300);
	}

	/* .css-1pysi21-MuiFormLabel-root-MuiInputLabel-root {
		font-family: var(--text-font);
	}

	.css-1n4twyu-MuiInputBase-input-MuiOutlinedInput-input {
		font-family: var(--text-font);
	} */

	.css-k4qjio-MuiFormHelperText-root.Mui-error {
		position: absolute;
		bottom: 0;
		left: 0;
		transform: translateY(100%);
		/* font-family: var(--font-text); */
	}

	.css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root.Mui-error
		.MuiOutlinedInput-notchedOutline {
		border-color: rgba(0, 0, 0, 0.23);
	}

	.css-1pysi21-MuiFormLabel-root-MuiInputLabel-root.Mui-error {
		color: rgba(0, 0, 0, 0.6);
	}
`;
