function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
}

/* FULLSCREEN */
let images = [];
let currentIndex = 0;

function openImage(src) {

    currentIndex = images.indexOf(src);
    if (currentIndex === -1) currentIndex = 0;

    document.getElementById("fullscreen").style.display = "flex";
    document.getElementById("fullscreen-img").src = src;

    const key = "rating_" + src;
    const saved = localStorage.getItem(key);

    updateStars(saved ? Number(saved) : 0);
}

function closeImage() {
    document.getElementById("fullscreen").style.display = "none";
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById("fullscreen-img").src = images[currentIndex];
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    document.getElementById("fullscreen-img").src = images[currentIndex];
}

/* STARS */
function rate(n) {

    const src = document.getElementById("fullscreen-img").src;

    const key = "rating_" + src;

    localStorage.setItem(key, n);

    updateStars(n);
}

function updateStars(n) {
    const stars = document.querySelectorAll("#stars span");

    stars.forEach((s, i) => {
        s.classList.toggle("active", i < n);
    });
}

/* =========================
   GALLERY SYSTEM
========================= */

document.addEventListener("DOMContentLoaded", function () {

    const container = document.getElementById("gallery");
    if (!container) return;

    images = [];

    const categories = {
        mountains: "Mountain",
        forest: "Forest",
        wildlife: "Wildlife",
        macro: "Macro",
        lakeview: "Lakeview",
        architecture: "Architecture"
    };

    const page = document.title.toLowerCase();

    function addImage(src) {

        const img = document.createElement("img");

        img.src = src;

        img.onclick = () => openImage(src);

        img.onerror = () => img.remove();

        container.appendChild(img);

        images.push(src);
    }

    /* =========================
       GALLERY = ALLE BILDER
    ========================= */

    if (page === "gallery") {

        for (const cat in categories) {

            for (let i = 1; i <= 300; i++) {

                addImage(`Bilder/${capitalize(cat)}/${categories[cat]} (${i}).jpg`);
            }
        }

        return;
    }

    /* =========================
       EINZELNE KATEGORIE
    ========================= */

    const key = page;
    const folder = categories[key];

    if (!folder) return;

    for (let i = 1; i <= 300; i++) {

        addImage(`Bilder/${capitalize(key)}/${folder} (${i}).jpg`);
    }
});

/* Hilfsfunktion */
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

/* KEYBOARD */
document.addEventListener("keydown", function (e) {

    const fullscreen = document.getElementById("fullscreen");
    if (!fullscreen || fullscreen.style.display !== "flex") return;

    if (e.key === "ArrowRight") nextImage();
    if (e.key === "ArrowLeft") prevImage();
    if (e.key === "Escape") closeImage();
});