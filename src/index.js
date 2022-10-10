import renderHeader from "./components/header.js";
import renderFooter from "./components/footer.js";

import "./index.css";
import "./css/header.css";
import "./css/footer.css";

import renderHome from "./home.js";
import renderMenu from "./menu.js";
import renderForm from "./contact.js";

renderHeader();
renderFooter();

const highlightTab = (newTab) => {
  const tabs = document.querySelectorAll("li");
  tabs.forEach((tab) => {
    tab.classList.remove("active");
  });
  const activeTab = document.querySelector(`#${newTab}`);
  activeTab.classList.add("active");
};

window.addEventListener("Load", highlightTab("home"));
window.addEventListener("Load", renderHome());

const removeContent = () => {
  const content = document.getElementById("content");
  const contentToRemove = content.querySelector("div");
  contentToRemove.remove();
};

const homeBtnEvent = () => {
  removeContent();
  renderHome();
  highlightTab("home");
};

const menuBtnEvent = () => {
  removeContent();
  renderMenu();
  highlightTab("menu");
};

const contactBtnEvent = () => {
  removeContent();
  renderForm();
  highlightTab("contact");
};

document.addEventListener("click", (e) => {
	const target = e.target.textContent;

	if (target === "Home") homeBtnEvent();
	if (target === "Menu") menuBtnEvent();
	if (target === "Contact") contactBtnEvent();
});