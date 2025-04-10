document.addEventListener("DOMContentLoaded", function() {
    const riflesContainer = document.querySelector(".defaultRifleImages");

    riflesData.forEach(rifles => {
        const rarityColor = rifles.rarity.color;
        const rarityName = rifles.rarity.name;

        const riflesElement = document.createElement("div");
        riflesElement.className = "riflesimage";
        riflesElement.id = rifles.id;
        riflesElement.innerHTML = `
            <div class="weaponSkins">
        <a href="${rifles.url}" target="_self">
            <img src="${rifles.image}" alt="${rifles.name}" style="width: 100%; height: auto;">
        </a>
        <div class="rarity-box" style="background-color: ${rarityColor}; color: white; font-weight: bold;">
            ${rarityName}
        </div>
        <div class="skin-name">
            ${rifles.name}
        </div>
    </div>
        `;

        riflesContainer.appendChild(riflesElement);
    });
});