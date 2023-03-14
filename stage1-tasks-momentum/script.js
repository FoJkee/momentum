const time = document.querySelector('.time');
const dates = document.querySelector('.date');

function showDate() {
    const date = new Date();

    const options = {
        month: 'long',
        day: 'numeric',
        weekday: 'long',
        timeZone: 'UTC',
    };
    const currentDate = date.toLocaleDateString('en-En', options);
    dates.textContent = currentDate;
}
const greeting = document.querySelector('.greeting');

function getTimeOfDay() {
    const date = new Date();
    const hours = date.getHours();

    if (6 <= hours && hours < 12) {
        return (greeting.textContent = 'Good morning, ');
    } else if (12 <= hours && hours < 18) {
        return (greeting.textContent = 'Good afternoon, ');
    } else if (18 <= hours && hours > 0) {
        return (greeting.textContent = 'Good evening, ');
    } else {
        return (greeting.textContent = 'Good night, ');
    }
}

function showTime() {
    const date = new Date();
    const currentTime = date.toLocaleTimeString();
    time.textContent = currentTime;
    setTimeout(showTime, 1000);
    showDate();
    getTimeOfDay();
}
showTime();

const names = document.querySelector('.name');

function setLocalStorage() {
    localStorage.setItem('name', names.value);
}

window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage() {
    if (localStorage.getItem('name')) {
        names.value = localStorage.getItem('name');
    }
}
window.addEventListener('load', getLocalStorage);

body.style.backgroundImage =
    "url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/18.jpg')";
