

export default function createBody() {
  const content = document.getElementById("content");

  const imgContainer = document.createElement("div");
  imgContainer.className = "img-cont";
  content.appendChild(imgContainer);

  const menuContainer = document.createElement("div");
  menuContainer.className = "menu-container";
  imgContainer.appendChild(menuContainer);

  const starters = document.createElement("div");
  const entrees = document.createElement("div");
  const sides = document.createElement("div");
  const sweets = document.createElement("div");

  starters.className = "starters-menu menu-header";
  entrees.className = "entrees-menu menu-header";
  sides.className = "sides-menu menu-header";
  sweets.className = "sweets-menu menu-header";

  starters.textContent = "STARTERS";
  entrees.textContent = "ENTREES";
  sides.textContent = "SIDES";
  sweets.textContent = "SWEETS";

  menuContainer.appendChild(starters);
  menuContainer.appendChild(entrees);
  menuContainer.appendChild(sides);
  menuContainer.appendChild(sweets);

  const starterMenu = document.createElement("div");
  starterMenu.className = "content-container";
  starters.appendChild(starterMenu);

  const beet = document.createElement("p");
  const salmon = document.createElement("p");
  const korean = document.createElement("p");

  beet.className = "meal-title";
  salmon.className = "meal-title";
  korean.className = "meal-title";

  beet.textContent = "BEET AND BURRATA";
  salmon.textContent = "SMOKED SALMON CARPACCIO";
  korean.textContent = "KOREAN ARGENTINA RED SHRIMP CRAB PANCAKE";

  starterMenu.appendChild(beet);
  starterMenu.appendChild(salmon);
  starterMenu.appendChild(korean);

  const beetText = document.createElement("p");
  const salmonText = document.createElement("p");
  const koreanText = document.createElement("p");

  beetText.className = "meal-text";
  salmonText.className = "meal-text";
  koreanText.className = "meal-text";

  beetText.textContent =
    "orange sections, olives, radish, red onion, burrata, candied walnuts, frisee, tangerine Aleppo\r\n vinaigrette, pumpernickel bread crumbs";
  salmonText.textContent =
    "red onions, capers, grana padano, lime truffle emulsion, smoke trout caviar, radish, crostini";
  koreanText.textContent = "tonkatsu, sambal aioli, daikon kimchi";

  beet.appendChild(beetText);
  salmon.appendChild(salmonText);
  korean.appendChild(koreanText);

	const beetPrice = document.createElement("p");
	const salmonPrice = document.createElement("p");
	const koreanPrice = document.createElement("p");

	beetPrice.className = "price";
	salmonPrice.className = "price";
	koreanPrice.className = "price";

	beetPrice.textContent = "15.35";
	salmonPrice.textContent = "18.35";
	koreanPrice.textContent = "16.35";

	beet.appendChild(beetPrice);
	salmon.appendChild(salmonPrice);
	korean.appendChild(koreanPrice);


  content.appendChild(imgContainer);

  return content;
}
// create class to create all of these menu items