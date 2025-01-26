var wybranaUsluga;
var wybranaData;
var wybranaGodzina;
var uslugi = document.getElementById("uslugi");
var kalendarz = document.getElementById("kalendarz");
var naglowek = document.getElementById("naglowek");
var usluga1 = document.getElementById("usluga1");
var usluga2 = document.getElementById("usluga2");
var usluga3 = document.getElementById("usluga3");
var usluga4 = document.getElementById("usluga4");
var usluga5 = document.getElementById("usluga5");
var usluga6 = document.getElementById("usluga6");

usluga1.addEventListener("click", function(){
    uslugi.style.display = "none";
    kalendarz.style.display = "block";
    naglowek.innerText = "Wybierz termin";
});






const calendarBody = document.getElementById('calendar-body');
        const weekRangeSpan = document.getElementById('week-range');
        const prevWeekButton = document.getElementById('prev-week');
        const nextWeekButton = document.getElementById('next-week');

        let currentDate = new Date();

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
                    cell.className = 'clickable';
                    cell.dataset.time = time;
                    cell.dataset.date = formatDate(daysOfWeek[i]);
                    cell.textContent = '';
                    cell.addEventListener('click', () => {
                        alert(`Wybrany termin: ${cell.dataset.date} ${time}`);
                    });
                    row.appendChild(cell);
                }

                calendarBody.appendChild(row);
            });
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