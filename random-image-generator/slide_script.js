const unsplashURL = 'https://source.unsplash.com/random/'; // to get random images
const body = document.body;
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');


leftBtn.addEventListener('click', () => {
    window.location.href = 'index.html';
});

rightBtn.addEventListener('click', () => {
    window.location.href = 'imgReview.html';
});

// function setBgtoBody() {
//     console.log('lll');
//     body.style.backgroundImage = 'https://source.unsplash.com/random/';
// }
