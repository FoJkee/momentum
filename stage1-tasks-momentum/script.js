const time = document.querySelector('.time');
const dates = document.querySelector('.date');
function showDate() {
    const date = new Date();

    const options = {
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        timeZone: 'UTC',
    };
    const currentDate = date.toLocaleDateString('en-En', options);
    dates.textContent = currentDate;
}
showDate();

function showTime() {
    const date = new Date();
    const currentTime = date.toLocaleTimeString();
    time.textContent = currentTime;
    setTimeout(showTime, 1000);
    showDate();
}
showTime();
