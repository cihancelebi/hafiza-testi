const images = [
    "https://icons.iconarchive.com/icons/treetog/junior/256/folder-blue-pictures-icon.png",
    "https://icons.iconarchive.com/icons/vargas21/aquave-metal/256/Photos-icon.png",
    "https://icons.iconarchive.com/icons/ampeross/qetto-2/256/photos-icon.png",
    "https://icons.iconarchive.com/icons/zhoolego/material/256/Images-icon.png"
];

let timer;
let timeRemaining = 10; // Süreyi saniye cinsinden
let imageNumbers = []; // Resim ve sayı eşleşmeleri
let shuffledNumbers = []; // Sayıların karıştırılmış hali

// Rastgele sayı üretecek fonksiyon
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Diziyi karıştırma fonksiyonu
function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

// Süreyi göstermek için fonksiyon
function updateTimer() {
    const timerElement = document.getElementById("timer");
    timerElement.textContent = `Kalan Süre: ${timeRemaining}s`;
    if (timeRemaining === 0) {
        clearInterval(timer);
        showNumbersForMatching(); // Süre bitince sayıları göster
    } else {
        timeRemaining--;
    }
}

// Resimleri rastgele sayılarla gösterme fonksiyonu
function showImages() {
    const container = document.getElementById("test-container");
    container.innerHTML = ""; // Önceki içerikleri temizle

    // Resimleri rastgele sıraya sokarak ve her birine sayı ekleyerek göster
    const shuffledImages = shuffle(images);
    shuffledImages.forEach(item => {
        const randomNumber = getRandomNumber(10, 99); // 10-99 arasında rastgele sayı
        imageNumbers.push({ img: item, number: randomNumber }); // Resim ve sayı eşleştir
        const div = document.createElement("div");
        div.innerHTML = `
            <div style="display: inline-block; margin: 10px;">
                <img src="${item}" alt="${randomNumber}">
            </div>`;
        container.appendChild(div);
    });

    // Süreyi başlat
    timer = setInterval(updateTimer, 1000);
}

// Süre bittikten sonra kullanıcıya eşleştirme yapmasını istemek
function showNumbersForMatching() {
    const container = document.getElementById("numbers-container");
    container.style.display = "block"; // Sayıları görünür yap

    // Sayıları ekle
    shuffledNumbers = imageNumbers.map(item => item.number);
    shuffledNumbers = shuffle(shuffledNumbers); // Sayıları karıştır

    shuffledNumbers.forEach(number => {
        const div = document.createElement("div");
        div.classList.add("number-container");
        div.innerHTML = `<input type="text" placeholder="Resim için sayıyı girin" data-number="${number}" class="number-input"> <span>${number}</span>`;
        container.appendChild(div);
    });

    // Eşleştirme yapabilmek için gerekli kontrol
    const inputs = document.querySelectorAll('.number-input');
    inputs.forEach(input => {
        input.addEventListener('input', checkMatch);
    });
}

// Eşleşmeleri kontrol etme fonksiyonu
function checkMatch(event) {
    const input = event.target;
    const number = input.getAttribute("data-number");
    const value = input.value.trim();

    if (value === number.toString()) {
        input.style.backgroundColor = "lightgreen"; // Doğru eşleşme
    } else if (value !== "") {
        input.style.backgroundColor = "salmon"; // Yanlış eşleşme
    } else {
        input.style.backgroundColor = ""; // Boşsa arka planı temizle
    }
}

// Sayfada resimleri ve süreyi başlat
showImages();
