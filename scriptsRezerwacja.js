var wybranaUsluga;
var wybranaData;
var wybranaGodzina;
var wybranaCena;
var wybranyCzasTrwania;
var uslugi = document.getElementById("uslugi");
var kalendarz = document.getElementById("kalendarz");
var naglowek = document.getElementById("naglowek");
var potwUsluga = document.getElementById("potwUsluga");
var potwTermin = document.getElementById("potwTermin");
var potwCzasTrwania = document.getElementById("potwCzasTrwania");
var potwCena = document.getElementById("potwCena");
var potwierdzenie = document.getElementById("potwierdzenie");
var potwierdzBtn = document.getElementById("potwierdzBtn");

var usluga1 = document.getElementById("usluga1");
var usluga2 = document.getElementById("usluga2");
var usluga3 = document.getElementById("usluga3");
var usluga4 = document.getElementById("usluga4");
var usluga5 = document.getElementById("usluga5");
var usluga6 = document.getElementById("usluga6");

usluga1.addEventListener("click", function () {
    uslugi.style.display = "none";
    kalendarz.style.display = "block";
    naglowek.innerText = "Wybierz termin";
    potwUsluga.textContent = "Usługa 1";
    potwCena.textContent = "50 zł";
    potwCzasTrwania.textContent = "30 minut";
});

usluga2.addEventListener("click", function () {
    uslugi.style.display = "none";
    kalendarz.style.display = "block";
    naglowek.innerText = "Wybierz termin";
    potwUsluga.textContent = "Usługa 2";
    potwCena.textContent = "100 zł";
    potwCzasTrwania.textContent = "30 minut";
});

usluga3.addEventListener("click", function () {
    uslugi.style.display = "none";
    kalendarz.style.display = "block";
    naglowek.innerText = "Wybierz termin";
    potwUsluga.textContent = "Usługa 3";
    potwCena.textContent = "120 zł";
    potwCzasTrwania.textContent = "30 minut";
});

usluga4.addEventListener("click", function () {
    uslugi.style.display = "none";
    kalendarz.style.display = "block";
    naglowek.innerText = "Wybierz termin";
    potwUsluga.textContent = "Usługa 4";
    potwCena.textContent = "70 zł";
    potwCzasTrwania.textContent = "30 minut";
});

usluga5.addEventListener("click", function () {
    uslugi.style.display = "none";
    kalendarz.style.display = "block";
    naglowek.innerText = "Wybierz termin";
    potwUsluga.textContent = "Usługa 5";
    potwCena.textContent = "60 zł";
    potwCzasTrwania.textContent = "30 minut";
});

usluga6.addEventListener("click", function () {
    uslugi.style.display = "none";
    kalendarz.style.display = "block";
    naglowek.innerText = "Wybierz termin";
    potwUsluga.textContent = "Usługa 6";
    potwCena.textContent = "200 zł";
    potwCzasTrwania.textContent = "30 minut";
});


potwierdzBtn.addEventListener("click", function () {
    alert("Rejestracja potwierdzona");
    // window.location.href = 'index.html';
    uslugi.style.display = "block";
    potwierdzenie.style.display = "none";
});



const calendarBody = document.getElementById('calendar-body');
const weekRangeSpan = document.getElementById('week-range');
const prevWeekButton = document.getElementById('prev-week');
const nextWeekButton = document.getElementById('next-week');

let currentDate = new Date();

// Example of occupied slots
const occupiedSlots = [
    { date: '2025-01-27', time: '9:00' },
    { date: '2025-01-27', time: '10:30' },
    { date: '2025-01-29', time: '10:00' },
    { date: '2025-01-29', time: '10:30' },
    { date: '2025-01-30', time: '8:00' },
    { date: '2025-01-30', time: '8:30' },
    { date: '2025-01-30', time: '9:00' }
];

// Helper function to format date as YYYY-MM-DD
function formatDate(date) {
    return date.toISOString().split('T')[0];
}

// Helper function to get the start and end dates of the current week
function getWeekRange(date) {
    const startOfWeek = new Date(date);
    const dayOfWeek = startOfWeek.getDay();
    const diffToMonday = (dayOfWeek === 0 ? -6 : 1) - dayOfWeek;
    startOfWeek.setDate(startOfWeek.getDate() + diffToMonday);

    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 6);

    return { startOfWeek, endOfWeek };
}

// Render the current week in the table
function renderWeek(date) {
    const { startOfWeek, endOfWeek } = getWeekRange(date);
    weekRangeSpan.textContent = `${formatDate(startOfWeek)} - ${formatDate(endOfWeek)}`;

    calendarBody.innerHTML = '';

    // Generate rows for time slots
    const times = [];
    for (let hour = 8; hour <= 17; hour++) {
        times.push(`${hour}:00`, `${hour}:30`);
    }

    const daysOfWeek = [];
    for (let i = 0; i < 7; i++) {
        const day = new Date(startOfWeek);
        day.setDate(startOfWeek.getDate() + i);
        daysOfWeek.push(day);
    }

    times.forEach(time => {
        const row = document.createElement('tr');

        // Time column
        const timeCell = document.createElement('td');
        timeCell.textContent = time;
        timeCell.className = 'time-column';
        row.appendChild(timeCell);

        // Day columns
        for (let i = 0; i < 7; i++) {
            const cell = document.createElement('td');
            const cellDate = formatDate(daysOfWeek[i]);

            cell.className = 'clickable';
            cell.dataset.time = time;
            cell.dataset.date = cellDate;
            cell.textContent = '';

            const isOccupied = occupiedSlots.some(slot => slot.date === cellDate && slot.time === time);
            if (isOccupied) {
                cell.classList.add('occupied');
                cell.removeEventListener('click', handleCellClick);
            } else {
                cell.addEventListener('click', handleCellClick);
            }

            row.appendChild(cell);
        }

        calendarBody.appendChild(row);
    });
}

function handleCellClick(event) {
    const { time, date } = event.target.dataset;
    // alert(`Selected time: ${time} on date ${date}`);
    wybranaData = date;
    wybranaGodzina = time;
    potwTermin.innerHTML = date + " " + time;

    //occupiedSlots.add(date: date, time: time);
    occupiedSlots.push({ date, time });
    potwierdzenie.style.display = "block";
    kalendarz.style.display = "none";
    renderWeek(currentDate);


}

// Event listeners for navigation buttons
prevWeekButton.addEventListener('click', () => {
    currentDate.setDate(currentDate.getDate() - 7);
    renderWeek(currentDate);
});

nextWeekButton.addEventListener('click', () => {
    currentDate.setDate(currentDate.getDate() + 7);
    renderWeek(currentDate);
});

// Initial render
renderWeek(currentDate);