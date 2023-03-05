import styled from "styled-components";

export const Wrapper = styled.form`
	display: flex;
	flex-direction: column;
	background-color: white;
	max-width: 400px;
	width: 90vw;
	margin: 3rem auto;
	padding: 2rem 2.5rem;

	.app-title {
		margin: 0 auto;
		display: flex;
		align-items: center;
	}

	.logo {
		width: 40px;
	}

	h3 {
		text-align: center;
	}
`;
