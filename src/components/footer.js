export default function createFooter() {
  const githubIconScript = document.createElement("script");
  githubIconScript.type = "text/javascript";
  githubIconScript.src = "https://kit.fontawesome.com/4c536a6bd5.js";
  githubIconScript.crossOrigin = "anonymous";
  document.head.appendChild(githubIconScript);

  const content = document.getElementById("content");

  const footerContainer = document.createElement("footer");
  content.appendChild(footerContainer);

  const liIcon = document.createElement("a");
  liIcon.href = "https://www.linkedin.com/in/joshua-bennett793";
  liIcon.ariaLabel = "Link to developer's LinkedIn profile";
  liIcon.target = "_blank";
  liIcon.innerHTML = `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#FFFFFF"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="feather feather-linkedin"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
      <rect x="2" y="9" width="4" height="12"></rect>
      <circle cx="4" cy="4" r="2"></circle>
    </svg>`;

  const ghIcon = document.createElement("a");
  ghIcon.href = "https://github.com/joshbennett793/restaurant-page";
  ghIcon.ariaLabel = "Link to restaurant page project github repository";
  ghIcon.target = "_blank";
	ghIcon.innerHTML = `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#FFFFFF"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="feather feather-github"
    >
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
    </svg>`;
	

  footerContainer.appendChild(liIcon);
  footerContainer.appendChild(ghIcon);

  return content;
}
