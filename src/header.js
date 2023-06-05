export function makeHeader() {
  const header = document.createElement("div");
  header.setAttribute("id", "header");

  const tinyLogo = document.createElement("div");
  tinyLogo.textContent = "laverne's";
  tinyLogo.setAttribute("id", "tiny-logo");

  const list = document.createElement("ul");

  const homeBtn = document.createElement("li");
  homeBtn.textContent = "HOME";
  homeBtn.setAttribute("id", "home");
  list.appendChild(homeBtn);

  const menuBtn = document.createElement("li");
  menuBtn.textContent = "MENU";
  menuBtn.setAttribute("id", "menu");
  list.appendChild(menuBtn);

  const contactBtn = document.createElement("li");
  contactBtn.textContent = "CONTACT";
  contactBtn.setAttribute("id", "contact");
  list.appendChild(contactBtn);

  const changeLang = document.createElement("li");
  changeLang.textContent = "EN";
  changeLang.setAttribute("id", "lang");
  list.appendChild(changeLang);

  header.appendChild(tinyLogo);
  header.appendChild(list);
  header.classList.add("loadWithDelay");

  const content = document.getElementById("content");
  content.appendChild(header);
}
export function changeHeaderLanguage() {
  const lang = document.getElementById("lang");
  const home = document.getElementById("home");
  const menu = document.getElementById("menu");
  const contact = document.getElementById("contact");
  lang.textContent = lang.textContent === "EN" ? "TR" : "EN";
  home.textContent = lang.textContent === "EN" ? "HOME" : "GİRİŞ";
  menu.textContent = lang.textContent === "EN" ? "MENU" : "MENÜ";
  contact.textContent = lang.textContent === "EN" ? "CONTACT" : "BİZE ULAŞIN";
}
