const images = [
    { img: "https://icons.iconarchive.com/icons/treetog/junior/256/folder-blue-pictures-icon.png", text: "Elma" },
    { img: "https://icons.iconarchive.com/icons/vargas21/aquave-metal/256/Photos-icon.png", text: "Araba" },
    { img: "https://icons.iconarchive.com/icons/ampeross/qetto-2/256/photos-icon.png", text: "Ev" },
    { img: "https://icons.iconarchive.com/icons/zhoolego/material/256/Images-icon.png", text: "Bilgisayar" }
];
function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}
function showImages() {
    const container = document.getElementById("test-container");
    container.innerHTML = "";
    shuffle(images).forEach(item => {
        const div = document.createElement("div");
        div.innerHTML = `<img src="${item.img}" alt=""> <p>${item.text}</p>`;
        container.appendChild(div);
    });
    setTimeout(() => {
        container.innerHTML = "<p>Şimdi eşleştirme yap!</p>";
    }, 10000);
}
showImages();
