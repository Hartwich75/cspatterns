document.addEventListener("DOMContentLoaded", function () {
    const patternImages = [
        "/main/images/patternTemplates/AmberFadeTemplate.png",
        "/main/images/patternTemplates/BoomTemplate.png",
        "/main/images/patternTemplates/CaseHardenedTemplate.jpg",
        "/main/images/patternTemplates/ElectricHiveTemplate.png",
        "/main/images/patternTemplates/EmeraldTemplate.png",
        "/main/images/patternTemplates/FadeTemplate.png",
        "/main/images/patternTemplates/MoonriseTemplate.png",
        "/main/images/patternTemplates/PawTemplate.jpg"
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
