import { contentBox } from "./home.js";

const menuBtn = document.getElementById("menu-btn");
const menuBox = document.createElement("div");
contentBox.appendChild(menuBox);

function renderMenu() {
    contentBox.textContent = "";
    const menuHeading = document.createElement("div");
    menuHeading.id = "menu-heading";
    menuHeading.innerHTML = `<h4>Our Menu</h4>`;
    menuBox.appendChild(menuHeading);

    const menuApps = document.createElement("div");
    menuApps.id = "menu-apps";
    menuApps.innerHTML = 
    `<h2>Appetizers</h2>`;

    contentBox.appendChild(menuBox);
}

renderMenu();