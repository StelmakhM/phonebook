import ContentImage from "../ContentImage";
import hero from "../../assets/images/hero-image.svg";
import useResize from "../../hooks/useResize";
import { Wrapper } from "./HeroImage.styled";

export default function HeroImage() {
	const windowWidth = useResize();

	return (
		<>
			{windowWidth > 767 && (
				<Wrapper>
					<h2>
						Take control of your contacts and streamline your
						communication with our easy-to-use phonebook app.
					</h2>
					<ContentImage src={hero} alt="phonebook app" width={500} />
				</Wrapper>
			)}
		</>
	);
}
