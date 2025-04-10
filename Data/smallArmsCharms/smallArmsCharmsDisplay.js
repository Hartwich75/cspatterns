document.addEventListener("DOMContentLoaded", function() {
    const smallArmsCharmsContainer = document.querySelector(".defaultSmallArmsCharmImages");

    smallArmsCharmsData.forEach(smallArmsCharms => {
        const rarityColor = smallArmsCharms.rarity.color;
        const rarityName = smallArmsCharms.rarity.name;

        const smallArmsCharmsElement = document.createElement("div");
        smallArmsCharmsElement.className = "smallArmsCharmsimage";
        smallArmsCharmsElement.id = smallArmsCharms.id;
        smallArmsCharmsElement.innerHTML = `
            <div class="weaponSkins">
        <a href="${smallArmsCharms.url}" target="_self">
            <img src="${smallArmsCharms.image}" alt="${smallArmsCharms.name}" style="width: 100%; height: auto;">
        </a>
        <div class="rarity-box" style="background-color: ${rarityColor}; color: white; font-weight: bold;">
            ${rarityName}
        </div>
        <div class="skin-name">
            ${smallArmsCharms.name}
        </div>
    </div>
        `;

        smallArmsCharmsContainer.appendChild(smallArmsCharmsElement);
    });
});