const container = document.querySelector('.container');
const unsplashURL = 'https://source.unsplash.com/random/'; // to get random images
const rows = 5;

const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

for (let i = 0; i < rows * 3; i++) {
    const img = document.createElement('img');
    img.src = `${unsplashURL}${getRandomSize()}`;
    container.appendChild(img);

    img.addEventListener('click', () => {
        window.location.href = 'imgReview.html';
    });
}


function getRandomSize() {
    return `${getRandomNr()}x${getRandomNr()}`;
}

function getRandomNr() {
    return Math.floor(Math.random() * 10) + 300;
}
