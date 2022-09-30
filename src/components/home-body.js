export default function createBody() {
  const content = document.getElementById("content");

	const contentWrapper = document.createElement("div");
	contentWrapper.id = "content-wrap";

  const topImgContainer = document.createElement("div");
  topImgContainer.className = "top-img-cont";
  contentWrapper.appendChild(topImgContainer);

	const bottomImgContainer = document.createElement("div");
	bottomImgContainer.className = "bottom-img-cont";
	contentWrapper.appendChild(bottomImgContainer);

	content.appendChild(contentWrapper);

  return content;
}
