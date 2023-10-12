document.getElementById("suhu-form").addEventListener("submit", function (e) {
    e.preventDefault();
    
    const suhu = parseFloat(document.getElementById("suhu").value);
    const konversi = document.getElementById("konversi").value;
    let hasil;
    let rumus;

    if (konversi === "celsius") {
        hasil = suhu + " Celsius sama dengan " + ((suhu * 9/5) + 32).toFixed(2) + " Fahrenheit";
        rumus = suhu + " Celsius x 9/5 + 32";
    } else if (konversi === "fahrenheit") {
        hasil = suhu + " Fahrenheit sama dengan " + ((suhu - 32) * 5/9).toFixed(2) + " Celsius";
        rumus = "(" + suhu + " Fahrenheit - 32) x 5/9";
    }

    document.getElementById("hasil").textContent = hasil;
    document.getElementById("rumus").textContent = rumus;
    document.getElementById("hasil-konversi").style.display = "block";
    document.getElementById("rumus-konversi").style.display = "block";
});

document.getElementById("reset-button").addEventListener("click", function () {
    document.getElementById("suhu").value = "";
    document.getElementById("hasil").textContent = "";
    document.getElementById("rumus").textContent = "";
    document.getElementById("hasil-konversi").style.display = "none";
    document.getElementById("rumus-konversi").style.display = "none";
});

document.getElementById("reverse-button").addEventListener("click", function () {
    const dropdown = document.getElementById("konversi");
    if (dropdown.value === "celsius") {
        dropdown.value = "fahrenheit";
    } else {
        dropdown.value = "celsius";
    }
});
