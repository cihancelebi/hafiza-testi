document.getElementById("startTest").addEventListener("click", function() {
    window.location.href = "test.html"; // Test sayfasına yönlendir
});

// Sayfa yüklendiğinde başlık ve butonu şık hale getirmek için stil ekleme
document.addEventListener("DOMContentLoaded", function() {
    const startButton = document.getElementById("startTest");

    // Buton için stil eklemeye gerek yok, çünkü CSS ile zaten ayarlanmıştı,
    // ancak JavaScript ile dinamik stil ekleyebilirsiniz.

    // JavaScript üzerinden stil eklemek
    startButton.style.marginTop = "20px";
    startButton.style.padding = "10px 20px";
    startButton.style.fontSize = "16px";
    startButton.style.border = "none";
    startButton.style.backgroundColor = "#007bff"; // Mavi arka plan
    startButton.style.color = "white";
    startButton.style.borderRadius = "5px";
    startButton.style.cursor = "pointer";
    startButton.style.transition = "background-color 0.3s ease";

    // Hover efekti ekleme
    startButton.addEventListener("mouseover", function() {
        startButton.style.backgroundColor = "#0056b3"; // Hover efekti için daha koyu mavi
    });

    startButton.addEventListener("mouseout", function() {
        startButton.style.backgroundColor = "#007bff"; // Normal duruma geri dönme
    });
});
