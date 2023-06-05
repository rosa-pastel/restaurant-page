export function makeHomepage() {
  const lang = document.getElementById("lang").textContent;

  const homepage = document.createElement("div");
  homepage.setAttribute("id", "homepage");
  const logo = document.createElement("div");
  logo.setAttribute("id", "logo");
  logo.textContent = "laverne's";
  const logoInfo = document.createElement("div");
  logoInfo.setAttribute("id", "logo-info");
  logoInfo.textContent =
    lang === "TR"
      ? "yaban mersinli turtalar & dahası"
      : "blueberry pies & others";

  homepage.appendChild(logo);
  homepage.appendChild(logoInfo);
  homepage.classList.add("load");

  const page = document.getElementById("page");
  page.appendChild(homepage);
}
export function makePage() {
  const page = document.createElement("div");
  page.setAttribute("id", "page");
  page.classList.add("loadWithDelay");
  const content = document.getElementById("content");
  content.appendChild(page);
}
export function cleanPage() {
  const page = document.getElementById("page");
  if (page.lastChild) page.lastChild.remove();
}
