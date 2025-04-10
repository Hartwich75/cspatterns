document.addEventListener("DOMContentLoaded", function() {
    const missingLinkCharmsContainer = document.querySelector(".defaultMissingLinkCharmImages");

    missingLinkCharmsData.forEach(missingLinkCharms => {
        const rarityColor = missingLinkCharms.rarity.color;
        const rarityName = missingLinkCharms.rarity.name;

        const missingLinkCharmsElement = document.createElement("div");
        missingLinkCharmsElement.className = "missingLinkCharmsimage";
        missingLinkCharmsElement.id = missingLinkCharms.id;
        missingLinkCharmsElement.innerHTML = `
            <div class="weaponSkins">
        <a href="${missingLinkCharms.url}" target="_self">
            <img src="${missingLinkCharms.image}" alt="${missingLinkCharms.name}" style="width: 100%; height: auto;">
        </a>
        <div class="rarity-box" style="background-color: ${rarityColor}; color: white; font-weight: bold;">
            ${rarityName}
        </div>
        <div class="skin-name">
            ${missingLinkCharms.name}
        </div>
    </div>
        `;

        missingLinkCharmsContainer.appendChild(missingLinkCharmsElement);
    });
});