function stringToColor(string) {
	let hash = 0;
	let i;

	/* eslint-disable no-bitwise */
	for (i = 0; i < string.length; i += 1) {
		hash = string.charCodeAt(i) + ((hash << 5) - hash);
	}

	let color = "#";

	for (i = 0; i < 3; i += 1) {
		const value = (hash >> (i * 8)) & 0xff;
		color += `00${value.toString(16)}`.slice(-2);
	}
	/* eslint-enable no-bitwise */

	return color;
}

function stringAvatar(name) {
	const isNameCorrect = name.includes(" ");
	const correctName = isNameCorrect
		? name
		: name.replace(name[0], `${name[0]} `);
	return {
		sx: {
			bgcolor: stringToColor(name),
		},
		children: `${correctName.split(" ")[0][0].toUpperCase()}${correctName
			.split(" ")[1][0]
			.toUpperCase()}`,
	};
}

export { stringToColor, stringAvatar };
