import React, { useEffect } from "react";
import { Backdrop } from "./Modal.styled";

export default function Modal({ children, hideModal }) {
	const onBackdropClick = (e) => {
		if (e.currentTarget !== e.target) {
			return;
		}
		hideModal();
	};

	useEffect(() => {
		const closeModal = (e) => {
			if (e.code === "Escape") {
				hideModal();
			}
		};

		window.addEventListener("keydown", closeModal);
		return () => {
			window.removeEventListener("keydown", closeModal);
		};
	}, [hideModal]);

	return (
		<Backdrop onClick={onBackdropClick}>
			<div className="modal">{children}</div>
		</Backdrop>
	);
}
