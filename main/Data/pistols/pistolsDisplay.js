document.addEventListener("DOMContentLoaded", function() {
    const pistolsContainer = document.querySelector(".defaultSkinImages");

    pistolsData.forEach(pistols => {
        const rarityColor = pistols.rarity.color;
        const rarityName = pistols.rarity.name;

        const pistolsElement = document.createElement("div");
        pistolsElement.className = "pistolsimage";
        pistolsElement.id = pistols.id;
        pistolsElement.innerHTML = `
            <div class="weaponSkins">
        <a href="${pistols.url}" target="_self">
            <img src="${pistols.image}" alt="${pistols.name}" style="width: 100%; height: auto;">
        </a>
        <div class="rarity-box" style="background-color: ${rarityColor}; color: white; font-weight: bold;">
            ${rarityName}
        </div>
        <div class="skin-name">
            ${pistols.name}
        </div>
    </div>
        `;

        pistolsContainer.appendChild(pistolsElement);
    });
});