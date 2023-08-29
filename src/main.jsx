import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Nav from "./Components/Nav/Nav.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ToastContainer />
		<Nav />
		<App />
		<Footer />
	</React.StrictMode>
);
