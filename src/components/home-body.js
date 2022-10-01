export default function createBody() {
  const content = document.getElementById("content");

  const imgContainer = document.createElement("div");
  imgContainer.className = "img-cont";
  content.appendChild(imgContainer);

	const imgTextContainer = document.createElement("div");
	imgTextContainer.className = "img-text-cont";
	imgContainer.appendChild(imgTextContainer);

	const restaurantName = document.createElement("span");
	restaurantName.className = "restaurant-name";
	restaurantName.textContent = "Aroma";
	imgTextContainer.appendChild(restaurantName);

	content.appendChild(imgContainer);

  return content;
}
