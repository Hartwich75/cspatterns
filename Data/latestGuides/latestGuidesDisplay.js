document.addEventListener("DOMContentLoaded", function() {
    const latestGuidesContainer = document.querySelector(".defaultLatestGuidesImages");

    latestGuidesData.forEach(latestGuides => {
        const rarityColor = latestGuides.rarity.color;
        const rarityName = latestGuides.rarity.name;

        const latestGuidesElement = document.createElement("div");
        latestGuidesElement.className = "latestGuidesimage";
        latestGuidesElement.id = latestGuides.id;
        latestGuidesElement.innerHTML = `
            <div class="weaponSkins">
        <a href="${latestGuides.url}" target="_self">
            <img src="${latestGuides.image}" alt="${latestGuides.name}" style="width: 100%; height: auto;">
        </a>
        <div class="rarity-box" style="background-color: ${rarityColor}; color: white; font-weight: bold;">
            ${rarityName}
        </div>
        <div class="skin-name">
            ${latestGuides.name}
        </div>
    </div>
        `;

        latestGuidesContainer.appendChild(latestGuidesElement);
    });
});