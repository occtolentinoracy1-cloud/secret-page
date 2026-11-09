const button = document.getElementById('myButton')
const sound = document.getElementById('texas')

button.addEventListener('click', function() {
    sound.currentTime = 0;
    sound.play();
});
const image = ['marlou.jpg','yanong.jpg','yanong2.jpg'];
let currentIndex = 0;

function changebackground() {
    currentIndex = (currentIndex + 1) % image.length;
document.body.style.backgroundImage = `url(${image[currentIndex]})`;
}