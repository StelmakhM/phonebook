import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import "./assets/fonts/Exo2-VariableFont_wght.ttf";
import "./assets/fonts/EBGaramond-VariableFont_wght.ttf";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Provider store={store}>
				<App />
			</Provider>
		</BrowserRouter>
	</React.StrictMode>
);
