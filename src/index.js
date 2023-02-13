import "./style.css";
import { makeHomepage, makePage, cleanPage } from "./homepage.js";
import { makeHeader, changeHeaderLanguage } from "./header.js";
import { makeContactPage } from "./contact.js";
import { makeMenuPage } from "./menu.js";

makeHeader();
makePage();
makeHomepage();

const homeBtn = document.getElementById("home");
const menuBtn = document.getElementById("menu");
const contactBtn = document.getElementById("contact");
const changeLang = document.getElementById("lang");

homeBtn.addEventListener("click", () => {
  cleanPage();
  makeHomepage();
});
menuBtn.addEventListener("click", () => {
  cleanPage();
  makeMenuPage();
});
contactBtn.addEventListener("click", () => {
  cleanPage();
  makeContactPage();
});
changeLang.addEventListener("click", () => {
  changeHeaderLanguage();
  const currentPage = document.getElementById("page").lastChild.id;
  cleanPage();
  console.log(currentPage);
  if (currentPage === "menupage") makeMenuPage();
  else if (currentPage === "contactpage") makeContactPage();
  else makeHomepage();
});
