import "./css/home.css";

function createBody() {
  const content = document.getElementById("content");

  const imgTextContainer = document.createElement("div");
  imgTextContainer.id = "img-text-cont";
  content.appendChild(imgTextContainer);

  const restaurantName = document.createElement("span");
  restaurantName.id = "tagline";
  restaurantName.textContent = "Sensory indulgence unlocked.";
  imgTextContainer.appendChild(restaurantName);

  const menuButton = document.createElement("button");
  menuButton.id = "menu-button";
  menuButton.textContent = "Menu";
  imgTextContainer.appendChild(menuButton);

  content.appendChild(imgTextContainer);

  return content;
}

export default function renderHome() { 
	document.body.appendChild(createBody());
}
