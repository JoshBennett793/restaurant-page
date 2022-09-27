import createHeader from "./header.js";
import "./css/header.css";

export default function createBody() {
  document.body.appendChild(createHeader());
}