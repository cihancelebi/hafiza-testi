document.getElementById("startTest").addEventListener("click", function() {
    window.location.href = "test.html"; // Test sayfasına yönlendir
});

// Sayfa yüklendiğinde başlık ve butonu şık hale getirmek için ek stil ekleme
document.addEventListener("DOMContentLoaded", function() {
    const startButton = document.getElementById("startTest");

    // Butona stil ekleyebiliriz (zaten CSS ile yapıldı ama burada JavaScript ile ekleme de yapabiliriz)
    startButton.style.fontSize = "18px";
    startButton.style.padding = "10px 20px";
    startButton.style.backgroundColor = "#4CAF50";
    startButton.style.color = "white";
    startButton.style.border = "none";
    startButton.style.borderRadius = "5px";
    startButton.style.cursor = "pointer";
    startButton.style.transition = "background-color 0.3s ease";

    startButton.addEventListener("mouseover", function() {
        startButton.style.backgroundColor = "#45a049"; // Hover etkisi
    });

    startButton.addEventListener("mouseout", function() {
        startButton.style.backgroundColor = "#4CAF50"; // Normal duruma geri dönme
    });
});
