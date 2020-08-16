const body = document.querySelector("body");

const IMG_NUMBER = 5;

function paintImage(num) {
    const image = new Image();
    image.src = `images/${num + 1}.jpg`;
    image.classList.add("bgImg");
    body.appendChild(image);
}

function numMaker() {
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

function init() {
    const randomNum = numMaker();
    paintImage(randomNum);
}

init();