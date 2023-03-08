import styled from "styled-components";

export const Backdrop = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	/* display: flex;
	justify-content: center;
	align-items: center; */
	background-color: rgba(0, 0, 0, 0.8);
	/* z-index: 1200; */

	.modal {
		position: absolute;
		left: 50%;
		top: 50%;
		width: 300px;
		height: 200px;
		transform: translate(-50%, -50%);
		background-color: white;
	}
`;
