var zalogujBtn = document.getElementById("zalogujBtn");


zalogujBtn.addEventListener("click", function () {
    var uzytkownik = document.getElementById("uzytkownik").value;
    var haslo = document.getElementById("haslo").value;
    if (!uzytkownik || !haslo){
        alert("Wypełnij wszystkie pola");
    }
    else {
        window.location.href = 'moje-wizyty.html';
    }
});