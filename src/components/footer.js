export default function createFooter() {
  const githubIconScript = document.createElement("script");
  githubIconScript.type = "text/javascript";
  githubIconScript.src = "https://kit.fontawesome.com/4c536a6bd5.js";
  githubIconScript.crossOrigin = "anonymous";
  document.head.appendChild(githubIconScript);

  const content = document.getElementById("content");

  const footerContainer = document.createElement("footer");
  content.appendChild(footerContainer);

  const ghIcon = document.createElement("a");
  ghIcon.href = "https://github.com/joshbennett793/restaurant-page";
  ghIcon.ariaLabel = "Link to github repository";
  ghIcon.target = "_blank";
	ghIcon.innerHTML = `<i class="fab fa-github"></i>`;
	
  const liIcon = document.createElement("a");
  liIcon.href = "https://www.linkedin.com/in/joshua-bennett793";
  liIcon.ariaLabel = "Link to developer's LinkedIn profile";
  liIcon.target = "_blank";
	liIcon.innerHTML = `<i class="fab fa-linkedin"></i>`;

  footerContainer.appendChild(liIcon);
  footerContainer.appendChild(ghIcon);

  return content;
}
