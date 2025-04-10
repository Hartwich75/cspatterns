document.addEventListener("DOMContentLoaded", function () {
    const patternImages = [
        "/images/patternTemplates/AmberFadeTemplate.png",
        "/images/patternTemplates/BoomTemplate.png",
        "/images/patternTemplates/CaseHardenedTemplate.jpg",
        "/images/patternTemplates/ElectricHiveTemplate.png",
        "/images/patternTemplates/EmeraldTemplate.png",
        "/images/patternTemplates/FadeTemplate.png",
        "/images/patternTemplates/MoonriseTemplate.png",
        "/images/patternTemplates/PawTemplate.jpg"
    ];

    const imgElement = document.getElementById("patternTemplate");

    let currentIndex = Math.floor(Math.random() * patternImages.length);
    imgElement.src = patternImages[currentIndex];

    setInterval(() => {
        imgElement.style.opacity = 0;

        setTimeout(() => {
            currentIndex = (currentIndex + 1) % patternImages.length;
            imgElement.src = patternImages[currentIndex];

            imgElement.onload = () => {
                imgElement.style.opacity = 1;
            };
        }, 500);
    }, 5000);
});
