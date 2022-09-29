export default function createFooter() {
  const githubIconScript = document.createElement("script");
  githubIconScript.type = "text/javascript";
  githubIconScript.src = "https://kit.fontawesome.com/4c536a6bd5.js";
  githubIconScript.crossOrigin = "anonymous";
  document.head.appendChild(githubIconScript);

  const content = document.getElementById("content");

  const footerContainer = document.createElement("div");
  footerContainer.className = "footer";
  content.appendChild(footerContainer);

  const footerText = document.createElement("span");
  footerText.innerHTML = `Copyright © ${new Date().getFullYear()} | JoshBennett793&nbsp;<i class="fab fa-github"></i>`;

	// link icon to github repo
  const icon = document.createElement("a");
  icon.href = "https://github.com/joshbennett793/restaurant-page";
  icon.ariaLabel = "Link to tic tac toe project github repository";
  icon.target = "_blank";

  footerContainer.appendChild(footerText);
  footerContainer.appendChild(icon);

  return content;
}
