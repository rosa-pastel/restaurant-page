export function makeMenuPage() {
  const lang = document.getElementById("lang").textContent;

  const menuPage = document.createElement("div");
  menuPage.setAttribute("id", "menupage");

  const heading = document.createElement("h1");
  heading.textContent = lang === "TR" ? "MENÜ" : "MENU";
  menuPage.appendChild(heading);

  const allItems = document.createElement("div");
  allItems.setAttribute("id", "menu-items");

  let itemContainer = document.createElement("div");
  let item = document.createElement("h1");
  item.textContent = lang === "TR" ? "yaban mersinli" : "blueberry";
  let price = document.createElement("h1");
  price.textContent = "5";
  itemContainer.appendChild(item);
  itemContainer.appendChild(price);
  allItems.appendChild(itemContainer);

  itemContainer = document.createElement("div");
  item = document.createElement("h1");
  item.textContent = lang === "TR" ? "elmalı" : "apple";
  price = document.createElement("h1");
  price.textContent = "3";
  itemContainer.appendChild(item);
  itemContainer.appendChild(price);
  allItems.appendChild(itemContainer);

  itemContainer = document.createElement("div");
  item = document.createElement("h1");
  item.textContent = lang === "TR" ? "çikolatalı" : "chocolate";
  price = document.createElement("h1");
  price.textContent = "3.5";
  itemContainer.appendChild(item);
  itemContainer.appendChild(price);
  allItems.appendChild(itemContainer);

  itemContainer = document.createElement("div");
  item = document.createElement("h1");
  item.textContent = lang === "TR" ? "muz kremalı" : "banana cream";
  price = document.createElement("h1");
  price.textContent = "4";
  itemContainer.appendChild(item);
  itemContainer.appendChild(price);
  allItems.appendChild(itemContainer);

  itemContainer = document.createElement("div");
  item = document.createElement("h1");
  item.textContent = lang === "TR" ? "raventli" : "rhubarb";
  price = document.createElement("h1");
  price.textContent = "2.5";
  itemContainer.appendChild(item);
  itemContainer.appendChild(price);
  allItems.appendChild(itemContainer);

  itemContainer = document.createElement("div");
  item = document.createElement("h1");
  item.textContent = lang === "TR" ? "balkabaklı" : "pumpkin";
  price = document.createElement("h1");
  price.textContent = "3";
  itemContainer.appendChild(item);
  itemContainer.appendChild(price);
  allItems.appendChild(itemContainer);

  itemContainer = document.createElement("div");
  item = document.createElement("h1");
  item.textContent = lang === "TR" ? "vişneli" : "cherry";
  price = document.createElement("h1");
  price.textContent = "4";
  itemContainer.appendChild(item);
  itemContainer.appendChild(price);
  allItems.appendChild(itemContainer);

  itemContainer = document.createElement("div");
  item = document.createElement("h1");
  item.textContent = lang === "TR" ? "şeftalili" : "peach";
  price = document.createElement("h1");
  price.textContent = "5";
  itemContainer.appendChild(item);
  itemContainer.appendChild(price);
  allItems.appendChild(itemContainer);

  menuPage.appendChild(allItems);

  const page = document.getElementById("page");
  page.appendChild(menuPage);
}
