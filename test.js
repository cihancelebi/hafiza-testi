const images = [
    { img: "https://via.placeholder.com/100", text: "Elma" },
    { img: "https://via.placeholder.com/100", text: "Araba" },
    { img: "https://via.placeholder.com/100", text: "Ev" },
    { img: "https://via.placeholder.com/100", text: "Bilgisayar" }
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