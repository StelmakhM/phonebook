import styled from "styled-components";

export const Wrapper = styled.li`
	display: flex;
	border-bottom: 2px dashed grey;
	justify-content: flex-start;
	cursor: pointer;
	transition: var(--transition-fast);

	&:hover {
		background-color: var(--green-50);
	}

	.avatar {
		margin-right: 1rem;
	}

	.contact-info p {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		width: calc(60vw);
		max-width: 250px;
	}

	.checkbox {
		margin-left: auto;
		flex-shrink: 0;
	}
`;
