import addressIconSrc from "./icons/address.png";
import phoneIconSrc from "./icons/phone.png";
import clockIconSrc from "./icons/clock.png";
export function makeContactPage() {
  const lang = document.getElementById("lang").textContent;

  const contactPage = document.createElement("div");
  contactPage.setAttribute("id", "contactpage");

  const address = document.createElement("div");
  const addressIcon = document.createElement("img");
  addressIcon.src = addressIconSrc;
  address.appendChild(addressIcon);
  const addressHeading = document.createElement("h1");
  addressHeading.textContent = lang === "TR" ? "ADRES" : "ADDRESS";
  address.appendChild(addressHeading);
  const addressText = document.createElement("h2");
  addressText.textContent =
    lang === "TR"
      ? "1725 Slough Bulvarı, Scranton Pensilvanya"
      : "1725 Slough Avenue, Scranton PA";
  address.appendChild(addressText);
  contactPage.appendChild(address);

  const phone = document.createElement("div");
  const phoneIcon = document.createElement("img");
  phoneIcon.src = phoneIconSrc;
  phone.appendChild(phoneIcon);
  const phoneHeading = document.createElement("h1");
  phoneHeading.textContent = lang === "TR" ? "TELEFON" : "PHONE";
  phone.appendChild(phoneHeading);
  const phoneText = document.createElement("h2");
  phoneText.textContent = "(407) 456-7943";
  phone.appendChild(phoneText);
  contactPage.appendChild(phone);

  const hours = document.createElement("div");
  const hoursIcon = document.createElement("img");
  hoursIcon.src = clockIconSrc;
  hours.appendChild(hoursIcon);
  const hoursHeading = document.createElement("h1");
  hoursHeading.textContent = lang === "TR" ? "ÇALIŞMA SAATLERİ" : "HOURS";
  hours.appendChild(hoursHeading);
  const hoursText = document.createElement("h2");
  hoursText.textContent =
    lang === "TR" ? "sabah 10 - akşam 4.30" : "10 a.m. - 4.30 p.m.";
  hours.appendChild(hoursText);
  contactPage.appendChild(hours);

  const page = document.getElementById("page");
  page.appendChild(contactPage);
}
