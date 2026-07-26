import { contentBox } from "./home.js";

const menuBtn = document.getElementById("menu-btn");

function createMenuItem(name, description, price) {
    const menuItem = document.createElement("article");
    menuItem.classList.add("menu-item");

    const itemName = document.createElement("h2");
    itemName.classList.add("menu-item-name");
    itemName.textContent = name;

    const itemDescription = document.createElement("p");
    itemDescription.classList.add("menu-item-description");
    itemDescription.textContent = description;

    const itemPrice = document.createElement("p");
    itemPrice.classList.add("menu-item-price");
    itemPrice.textContent = price;

    menuItem.append(itemName, itemDescription, itemPrice);
    return menuItem;
}

function createMenuSection(title, items) {
    const section = document.createElement("section");
    section.classList.add("menu-section");

    const sectionTitle = document.createElement("h3");
    sectionTitle.classList.add("menu-section-title");
    sectionTitle.textContent = title;
    section.appendChild(sectionTitle);

    items.forEach(({ name, description, price }) => {
        section.appendChild(createMenuItem(name, description, price));
    });

    return section;
}

function renderMenu() {
    contentBox.textContent = "";

    const menuBox = document.createElement("div");   // ← created fresh every click
    menuBox.id = "menu-box";

    const header = document.createElement("div");
    header.id = "menu-header";

    const headingText = document.createElement("h4");
    headingText.textContent = "OUR MENU";
    headingText.id = "heading-text";

    const subText = document.createElement("p");
    subText.id = "sub-text";
    subText.textContent = "Traditional Indian and Indo-Chinese dishes prepared with delicious recipes.";

    header.append(headingText, subText);
    menuBox.appendChild(header);

    const appetizers = createMenuSection("Appetizers", [
        { name: "Samosa", description: "Crisp pastry filled with spiced potatoes and peas, served with mint chutney.", price: "$7" },
        { name: "Chicken 65", description: "Spicy, deep-fried chicken tossed in curry leaves and red chilies.", price: "$9" },
        { name: "Vegetable Manchurian", description: "Crispy vegetable dumplings tossed in a tangy Indo-Chinese sauce.", price: "$8" }
    ]);

    const mains = createMenuSection("Main Course", [
        { name: "Chicken Tikka Masala", description: "Grilled chicken simmered in a creamy tomato and butter sauce.", price: "$18" },
        { name: "Paneer Butter Masala", description: "Soft paneer cubes in a rich, buttery tomato gravy.", price: "$16" },
        { name: "Gongura Mutton", description: "Telugu-style mutton curry cooked with tangy sorrel leaves.", price: "$20" },
        { name: "Hakka Noodles", description: "Stir-fried noodles with vegetables in a savory Indo-Chinese sauce.", price: "$14" }
    ]);

    const breads = createMenuSection("Breads & Rice", [
        { name: "Garlic Naan", description: "Soft leavened bread topped with fresh garlic and herbs.", price: "$4" },
        { name: "Hyderabadi Biryani", description: "Fragrant basmati rice layered with spiced meat and saffron.", price: "$17" }
    ]);

    menuBox.append(appetizers, mains, breads);
    contentBox.appendChild(menuBox);
}

menuBtn.addEventListener("click", renderMenu);