const homeBtn = document.getElementById("home-btn");
const contentBox = document.getElementById("content");

function homeSection() {

    const homeContainer = document.createElement("div");
    contentBox.appendChild(homeContainer);

    const estDesc = document.createElement("div");
    estDesc.id = "est-desc";
    estDesc.innerHTML = `
    <p> EST. 1987 | DINNER CLUB AND LOUNGE`;
    homeContainer.appendChild(estDesc);

    const titleDesc = document.createElement("div");
    titleDesc.innerHTML = `
    <h5>Pataka</h5>
    <p>Authentic Indian Cuisine</p>`
    titleDesc.id = "title-desc";
    homeContainer.appendChild(titleDesc);

    const infoDesc = document.createElement("div");
    infoDesc.id = "info-desc";
    titleDesc.innerHTML = `
    <p>At <i>Pataka</i> we serve authentic Indian cuisine consisting of Telugu, North Indian and Indo-Chinese.</p>`;

}

homeBtn.addEventListener("click", () => {
    contentBox.textContent = "";
    homeSection();
});
