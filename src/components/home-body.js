export default function createBody() {
  const content = document.getElementById("content");

  const topImgContainer = document.createElement("div");
  topImgContainer.className = "top-img-cont";

  content.appendChild(topImgContainer);

  return content;
}
