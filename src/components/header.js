export default function createHeader() {
  const content = document.getElementById("content");

  const headerContainer = document.createElement("div");
  headerContainer.className = "header";
  content.appendChild(headerContainer);

  const restaurantName = document.createElement("p");
  restaurantName.className = "rest-name";
  restaurantName.textContent = "Avery's Irish Pub";
  headerContainer.appendChild(restaurantName);

  const tabList = document.createElement("ul");
  headerContainer.appendChild(tabList);

  const homeTab = document.createElement("li");
  homeTab.className = "home";
  homeTab.textContent = "Home";
  tabList.appendChild(homeTab);

  const menuTab = document.createElement("li");
  menuTab.className = "menu";
  menuTab.textContent = "Menu";
  tabList.appendChild(menuTab);

  const contactTab = document.createElement("li");
  contactTab.className = "contact";
  contactTab.textContent = "Contact";
  tabList.appendChild(contactTab);

  return content;
}
