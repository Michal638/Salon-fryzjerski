var zarejestruj = document.getElementById("zarejestrujBtn");

zarejestruj.addEventListener("click", function () {
    var imienazwisko = document.getElementById("imienazwisko").value;
    var email = document.getElementById("email").value;
    var telefon = document.getElementById("telefon").value;
    var haslo = document.getElementById("haslo").value;
    var haslo2 = document.getElementById("haslo2").value;
    if (!imienazwisko || !email || !telefon || !haslo || !haslo2) {
        alert("Wypełnij wszystkie pola");
    } else if (haslo !== haslo2) {
        alert("Hasła nie są jednakowe");
    } else {

        ////////////////tu dodać zapisywanie do bazy danych/////////////////

        alert("Konto utworzone pomyślnie. Za chwilę zostaniesz przeniesiony na stronę główną.");
        window.location.href = 'index.html';
    }
});