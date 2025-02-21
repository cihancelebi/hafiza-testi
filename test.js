const images = [
    { img: "https://icons.iconarchive.com/icons/treetog/junior/256/folder-blue-pictures-icon.png", text: "Elma" },
    { img: "https://icons.iconarchive.com/icons/vargas21/aquave-metal/256/Photos-icon.png", text: "Araba" },
    { img: "https://icons.iconarchive.com/icons/ampeross/qetto-2/256/photos-icon.png", text: "Ev" },
    { img: "https://icons.iconarchive.com/icons/zhoolego/material/256/Images-icon.png", text: "Bilgisayar" }
];

// Diziyi karıştırma fonksiyonu
function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

// Görselleri gösterme fonksiyonu
function showImages() {
    const container = document.getElementById("test-container");
    container.innerHTML = ""; // Önceki içerikleri temizle

    // Resimleri rastgele sıraya sokarak ekle
    shuffle(images).forEach(item => {
        const div = document.createElement("div");
        div.innerHTML = `
            <div style="display: inline-block; margin: 10px;">
                <img src="${item.img}" alt="${item.text}" style="max-width: 100px; max-height: 100px;">
                <p>${item.text}</p>
            </div>`;
        container.appendChild(div);
    });

    // 10 saniye sonra eşleştirme mesajını göster
    setTimeout(() => {
        container.innerHTML = "<p>Şimdi eşleştirme yap!</p>";
    }, 10000);
}

// Sayfa yüklendiğinde resimleri göster
showImages();
