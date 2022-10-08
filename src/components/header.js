export default function renderHeader() {
  const content = document.getElementById("content");

  const headerContainer = document.createElement("header");
  content.appendChild(headerContainer);

  const tabList = document.createElement("ul");
  headerContainer.appendChild(tabList);

  const homeTab = document.createElement("li");
  homeTab.id = "home";
  homeTab.textContent = "Home";
  tabList.appendChild(homeTab);

  const menuTab = document.createElement("li");
  menuTab.id = "menu";
  menuTab.textContent = "Menu";
  tabList.appendChild(menuTab);

  const contactTab = document.createElement("li");
  contactTab.id = "contact";
  contactTab.textContent = "Contact";
  tabList.appendChild(contactTab);

	const restaurantName = document.createElement("h2");
	restaurantName.id = "name";
	restaurantName.textContent = "Aroma";
	headerContainer.appendChild(restaurantName);

  return content;
}
