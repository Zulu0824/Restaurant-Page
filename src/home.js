const homeBtn = document.getElementById("home-btn");
export const contentBox = document.getElementById("content");

function homeSection() {

    const homeContainer = document.createElement("div");
    homeContainer.id = "home-container";
    contentBox.appendChild(homeContainer);

    const estDesc = document.createElement("div");
    estDesc.id = "est-desc";
    estDesc.innerHTML = `
    <p> EST. 1987 | DINNER CLUB AND LOUNGE`;
    homeContainer.appendChild(estDesc);

    const titleDesc = document.createElement("div");
    titleDesc.innerHTML = `
    <h2>Pataka</h2>
    <p>Authentic Indian and Indo-Chinese Cuisine</p>`;
    titleDesc.id = "title-desc";
    homeContainer.appendChild(titleDesc);

    const infoDesc = document.createElement("div");
    infoDesc.id = "info-desc";
    infoDesc.innerHTML = `
    <h3>Our Story</h3>
    <p>Since 1987, <i>Pataka</i> has been serving authentic Indian cuisine rooted in tradition. Every plate tells a story passed down through generations, spanning:</p>
    <ul>
    <li>Telugu — Bold & spice-forward flavors from South India.</li>
    <li>North Indian — Rich & comforting classics.</li>
    <li>Indo-Chinese — A delicious fusion of Chinese cooking with Indian spices.</li>
    </ul>
    <p>Our kitchen blends time-honored family recipes with fresh, hand-ground spices, bringing the true taste of India to every table we serve.</p>`;
    homeContainer.appendChild(infoDesc);
}

homeSection();

homeBtn.addEventListener("click", () => {
    contentBox.textContent = "";
    homeSection();
});