import createHeader from "./components/header.js";
import createBody from "./components/menu-body.js";
import createFooter from "./components/footer.js";

import "./index.css";
import "./css/header.css";
import "./css/menu-body.css"
import "./css/footer.css";

export default function renderMenu() {
  document.body.appendChild(createHeader());
  document.body.appendChild(createBody());
  document.body.appendChild(createFooter());
}