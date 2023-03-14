function getRandomNum(min, max) {
    min = Math.ceil(20);
    max = Math.floor(1);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
getRandomNum();

const date = new Date();
const hours = date.getHours();
function getTimeOfDay(hours) {
    if (6 <= hours && hours < 12) {
        return 'Good morning, ';
    } else if (12 <= hours && hours < 18) {
        return 'Good afternoon, ';
    } else if (18 <= hours && hours > 0) {
        return 'Good evening, ';
    } else {
        return 'Good night, ';
    }
}

let randomNum = getRandomNum();

function setBg() {
    const body = document.querySelector('.body');
    randomNum = String(randomNum).padStart(2, '0');
    const img = new Image();
    img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${getTimeOfDay(
        hours
    )}/${randomNum}.jpg`;
    img.onload = () => {
        document.body.style.backgroundImage = `url(${img.src})`;
    };
}

setBg();

function getSlideNext() {
    randomNum < 20 ? randomNum++ : randomNum == 1, setBg();
}
function getSlidePrev() {
    randomNum > 1 ? randomNum-- : randomNum == 20, setBg();
}

const slideNext = document.querySelector('.slide-next');
slideNext.addEventListener('click', getSlideNext);
const slidePrev = document.querySelector('.slide-prev');
slidePrev.addEventListener('click', getSlidePrev);
