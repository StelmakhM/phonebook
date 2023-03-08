import styled from "styled-components";

export const DetailsContainer = styled.div`
	background-color: white;

	.delete-btn {
		border: transparent;
		background: transparent;
		border-radius: 50%;
		padding: 8px;
		display: block;

		&:hover {
			background-color: var(--green-50);
		}
	}
`;
