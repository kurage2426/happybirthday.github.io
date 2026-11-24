const audio = new Audio('happybirthday.mp3');
const cake = document.getElementById('cake');
const title = document.querySelector('h1');

title.classList.remove('pulse');

function changeBackgroundColor() {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    document.body.style.backgroundColor = randomColor;
}

function createConfetti() {
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');

        // ランダムな位置・色・速度
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.backgroundColor = getRandomColor();
        confetti.style.animationDuration = `${Math.random() * 2 + 2}s`;

        document.body.appendChild(confetti);

        // 落ち終わったら消す
        setTimeout(() => {
            confetti.remove();
        }, 4000);
    }
}

function getRandomColor() {
    const colors = ['#f94144', '#f3722c', '#f9c74f', '#90be6d', '#577590', '#43aa8b'];
    return colors[Math.floor(Math.random() * colors.length)];
}

let isPlaying = false;

cake.addEventListener('click', () => {
    if (isPlaying) return;
    isPlaying = true;

    audio.play();
    cake.classList.add('shake');
    cake.classList.add('disabled');
    title.classList.add('pulse');

    const bgInterval = setInterval(changeBackgroundColor, 300);

    confettiInterval = setInterval(createConfetti, 100);

    setTimeout(() => {
        cake.classList.remove('shake');
        cake.classList.remove('disabled');
        title.classList.remove('pulse');
        clearInterval(confettiInterval)
        clearInterval(bgInterval);
        isPlaying = false;
    }, 28000);
});
