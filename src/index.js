import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import "./assets/fonts/Exo2-VariableFont_wght.ttf";
import "./assets/fonts/EBGaramond-VariableFont_wght.ttf";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
);
