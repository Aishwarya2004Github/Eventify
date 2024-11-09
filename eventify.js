const form = document.getElementById('event-form');
const eventList = document.getElementById('events');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const eventName = document.getElementById('event-name').value;
    const eventDate = document.getElementById('event-date').value;

    const li = document.createElement('li');
    li.textContent = `${eventName} - ${eventDate}`;

    eventList.appendChild(li);

    document.getElementById('event-name').value = '';
    document.getElementById('event-date').value = '';
});
