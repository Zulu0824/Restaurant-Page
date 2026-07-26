const headerSection = document.getElementById("header-section");
const navSection = document.getElementById("nav-section");
const headerLogo = document.createElement("div");
const bookTableBtn = document.createElement("button");

headerSection.insertBefore(headerLogo, navSection);
headerSection.appendChild(bookTableBtn);

bookTableBtn.textContent = "Book table";
bookTableBtn.id = "book-table";

headerLogo.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M280-80v-366q-51-14-85.5-56T160-600v-280h80v280h40v-280h80v280h40v-280h80v280q0 56-34.5 98T360-446v366h-80Zm400 0v-320H560v-280q0-83 58.5-141.5T760-880v800h-80Z"/></svg>`;
headerLogo.id = "header-logo";