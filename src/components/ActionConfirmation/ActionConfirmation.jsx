import React from "react";

export default function ActionConfirmation({
	name,
	id,
	onRemoveBtnClick,
	hideModal,
}) {
	return (
		<div>
			<p>Are you sure you want delete {name} from your contacts?</p>
			<button type="button" onClick={() => onRemoveBtnClick(id)}>
				YES
			</button>
			<button type="button" onClick={hideModal}>
				NO
			</button>
		</div>
	);
}
