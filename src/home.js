import createHeader from "./components/header.js";
import createBody from "./components/home-body.js";
import createFooter from "./components/footer.js";
import "./index.css";
import "./css/header.css";
import "./css/home-body.css";
import "./css/footer.css";

export default function renderHome() { 
  document.body.appendChild(createHeader());
	document.body.appendChild(createBody());
	document.body.appendChild(createFooter());
}
