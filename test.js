<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hafıza Testi</title>
    <style>
        #test-container {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
        }
        #test-container img {
            max-width: 100px;
            max-height: 100px;
            margin: 10px;
        }
        #timer {
            text-align: center;
            font-size: 24px;
            margin-bottom: 20px;
        }
    </style>
</head>
<body>

    <div id="timer"></div> <!-- Süreyi gösterecek alan -->
    <div id="test-container"></div>

    <script>
        const images = [
            "https://icons.iconarchive.com/icons/treetog/junior/256/folder-blue-pictures-icon.png",
            "https://icons.iconarchive.com/icons/vargas21/aquave-metal/256/Photos-icon.png",
            "https://icons.iconarchive.com/icons/ampeross/qetto-2/256/photos-icon.png",
            "https://icons.iconarchive.com/icons/zhoolego/material/256/Images-icon.png"
        ];

        let timer;
        let timeRemaining = 10; // Süreyi saniye cinsinden

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
                const container = document.getElementById("test-container");
                container.innerHTML = "<p>Şimdi eşleştirme yap!</p>";
            } else {
                timeRemaining--;
            }
        }

        // Görselleri rastgele sayılarla gösterme fonksiyonu
        function showImages() {
            const container = document.getElementById("test-container");
            container.innerHTML = ""; // Önceki içerikleri temizle

            // Resimleri rastgele sıraya sokarak ve her birine sayı ekleyerek göster
            const shuffledImages = shuffle(images);
            shuffledImages.forEach(item => {
                const randomNumber = getRandomNumber(10, 99); // 10-99 arasında rastgele sayı
                const div = document.createElement("div");
                div.innerHTML = `
                    <div style="display: inline-block; margin: 10px;">
                        <img src="${item}" alt="${randomNumber}">
                        <p>${randomNumber}</p>
                    </div>`;
                container.appendChild(div);
            });

            // Süreyi başlat
            timer = setInterval(updateTimer, 1000);
        }

        // Sayfa yüklendiğinde resimleri göster
        showImages();
    </script>
</body>
</html>
