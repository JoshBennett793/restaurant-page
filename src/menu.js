import "./css/menu.css";

class Header {
  constructor(header) {
    this.header = header;
  }

  writeToDOM() {
    const menuContainer = document.querySelector("#menu-container");

    const header = document.createElement("div");
    header.className = "menu-section";
    menuContainer.appendChild(header);

    const headerTitle = document.createElement("p");
    headerTitle.className = "menu-header-title";
    headerTitle.textContent = this.header.toUpperCase();
    header.appendChild(headerTitle);

    const headerContent = document.createElement("div");
    headerContent.className = `${this.header}-menu content-container`;
    header.appendChild(headerContent);
  }
}

class Meal {
  constructor(type, title, desc, price) {
    this.type = type;
    this.title = title;
    this.desc = desc;
    this.price = price;
  }

  writeToDOM() {
    let header = document.querySelector(`.${this.type}-menu`);

    const mealTitle = document.createElement("p");
    const mealDesc = document.createElement("p");
    const mealPrice = document.createElement("p");

    mealTitle.className = "meal-title";
    mealDesc.className = "meal-desc";
    mealPrice.className = "meal-price";

    mealTitle.textContent = this.title.toUpperCase();
    mealDesc.textContent = this.desc;
    mealPrice.textContent = this.price;

    header.appendChild(mealTitle);
    header.appendChild(mealDesc);
    header.appendChild(mealPrice);
  }
}

function createBody() {
  const content = document.getElementById("content");

  const menuContainer = document.createElement("div");
  menuContainer.id = "menu-container";
  content.appendChild(menuContainer);

  const starters = new Header("starters").writeToDOM();

  const beet = new Meal(
    "starters",
    "beet and burrata",
    "orange sections, olives, radish, red onion, burrata, candied walnuts, frisee, tangerine Aleppo vinaigrette, pumpernickel bread crumbs",
    15.35
  ).writeToDOM();

  const salmon = new Meal(
    "starters",
    "smoked salmon carpaccio",
    "red onions, capers, grana padano, lime truffle emulsion, smoke trout caviar, radish, crostini",
    18.35
  ).writeToDOM();

  const korean = new Meal(
    "starters",
    "korean argentina red shrimp crab pancake",
    "tonkatsu, sambal aioli, daikon kimchi",
    16.35
  ).writeToDOM();

  const entrees = new Header("entrees").writeToDOM();

  const snapper = new Meal(
    "entrees",
    "america red snapper",
    "grilled cabbage, green chermoula vinaigrette, zaatar roast marble potatoes, lemon tahini sumac yogurt, pomegranate molasses, toasted pine nuts",
    38.35
  ).writeToDOM();

  const duck = new Meal(
    "entrees",
    "duck breast",
    "nduja creamed cabbage, duck fat roasted baby carrots, kumquat caraway thyme gastrique",
    38.35
  ).writeToDOM();

  const venison = new Meal(
    "entrees",
    "venison",
    "sous vide pimento cheese truffle grits, tasso ham creamed kale, green tomato sorghum mostarda, ancho red wine jus",
    47.35
  ).writeToDOM();

  const sides = new Header("sides").writeToDOM();

  const kale = new Meal(
    "sides",
    "calabrian honey wilted kale",
    null,
    9.35
  ).writeToDOM();

  const fries = new Meal(
    "sides",
    "truffle parmesan fries",
    null,
    12.35
  ).writeToDOM();

  const vegetables = new Meal(
    "sides",
    "seasonal vegetables",
    null,
    9.35
  ).writeToDOM();

  const sweets = new Header("sweets").writeToDOM();

  const coconutCake = new Meal(
    "sweets",
    "flourless chocolate coconut cake",
    "chantilly, candied almonds, passion fruit rum jam",
    10.35
  ).writeToDOM();

  const polentaCake = new Meal(
    "sweets",
    "warm olive oil pistachio polenta cake",
    "sea salt olive oil ice cream, blackberry basil jam",
    10.35
  ).writeToDOM();

  const budino = new Meal(
    "sweets",
    "pumpkin budino",
    "molasses ginger crumble, spiced brown butter butterscotch, chantilly, toasted pecans",
    10.35
  ).writeToDOM();

  return content;
}

export default function renderMenu() {
  document.body.appendChild(createBody());
}
