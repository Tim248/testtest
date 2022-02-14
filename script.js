function random(min, max) {

    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);

    return rand;

}

for (var i = 0; i < 100; i++) {
    document.getElementsByTagName('body')[0].innerHTML += '<i class="rain" style="left: ' + random(-2000, 2000) + 'px;transform: translate3d(0, 0, 0);animation-delay: ' + (0.05 * i) + 's"></i>';
}

let modal = document.querySelector('.modal');
let modalSub = document.querySelector('.moda__sub');
let check = document.querySelector('#ckbox');
let typeText = document.querySelector('.wrapper__text');
let audio = new Audio()
audio.src = './audio/Jah_Khalib_-_Sozvezdie_Angela_47828338.mp3'
setTimeout(() => {
    modalSub.style = 'opacity:1'
}, 3000);

check.addEventListener('click', function (e) {
    console.log(check.checked);

    if (check.checked) {
        audio.play()
        params()
    } else {
        audio.pause()
    }
})

function params() {
    setTimeout(() => {
        modalSub.style.opacity = '0'
    }, 1000);
    setTimeout(() => {
        modal.style.opacity = '0'
    }, 7000);
    setTimeout(() => {
        modal.style.display = 'none'
    }, 9000);
    setTimeout(() => {
        text()
    }, 10000);
}

function text() {
    var typed = new Typed('.wrapper__text', {
        strings: ["слушай музыку и читай", "привет Ясь", "как дела ?.", "давно нормально не общались...", "все еще обижена..(", "прости меня за все", ".", ".", ".", "хочу чтобы ты знала..", "сколбко бы сильно мы с тобой не ругались ", "тебя именно тебя я люблю по другому сильно очень сильно", " закрой глаза на секунду и скажи что видишь ", "ТЕМНОТА", "вот это мой мир без тебя", "я тебя очень сильно люблю"],
        typeSpeed: 200
    });
}
