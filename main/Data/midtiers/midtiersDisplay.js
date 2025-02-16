document.addEventListener("DOMContentLoaded", function() {
    const midtiersContainer = document.querySelector(".defaultMidtierImages");

    midtiersData.forEach(midtiers => {
        const rarityColor = midtiers.rarity.color;
        const rarityName = midtiers.rarity.name;

        const midtiersElement = document.createElement("div");
        midtiersElement.className = "midtiersimage";
        midtiersElement.id = midtiers.id;
        midtiersElement.innerHTML = `
            <div class="weaponSkins">
        <a href="${midtiers.url}" target="_self">
            <img src="${midtiers.image}" alt="${midtiers.name}" style="width: 100%; height: auto;">
        </a>
        <div class="rarity-box" style="background-color: ${rarityColor}; color: white; font-weight: bold;">
            ${rarityName}
        </div>
        <div class="skin-name">
            ${midtiers.name}
        </div>
    </div>
        `;

        midtiersContainer.appendChild(midtiersElement);
    });
});