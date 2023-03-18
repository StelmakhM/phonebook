import styled from "styled-components";

export const DetailsContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	/* width: 90vw; */
	max-width: 400px;
	margin: 0 auto;
	background-color: white;
	padding: 2rem 2.5rem;
	border-radius: 7px;
	transition: var(--transition-slow);
	box-shadow: var(--shadow-2);

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

	.avatar {
		margin-bottom: 1rem;
	}

	.contact-info {
		display: flex;
		flex-direction: column;
		margin-bottom: 0.5rem;
	}

	.info-title {
	}

	.info-text {
		font-weight: 700;
		/* overflow-wrap: break-word; */
		word-wrap: break-word;
		word-break: break-word;
		/* max-width: 250px; */
	}
`;
