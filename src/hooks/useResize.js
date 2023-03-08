import { useEffect, useState } from "react";

function useResize() {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	useEffect(() => {
		function handleResize() {
			setWindowWidth(window.innerWidth);
		}

		window.addEventListener("resize", handleResize);

		return () => window.removeEventListener("resize", handleResize);
	}, []);
	return windowWidth;
}

export default useResize;
