
let canvas;
let world;
let keyboard = new Keyboard();

let toggle = false;
let music = new Audio('../audio/music.mp3');

function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
}

function removeStartScreen() {
    document.getElementById('startScreen').classList.add('d-none');
}

function reloadPage() {
    window.location.reload();
}

function toggleMusic() {
    let buttonIMG = document.getElementById('musicBtn');
        if (toggle == false) {
            music.play();
            buttonIMG.src = '../img/buttons/volume.png';
            toggle = true;
        } else {
            music.pause();
            buttonIMG.src = '../img/buttons/mute.png';
            toggle = false;
        }
    };

window.addEventListener("keydown", (e) => {
    if (e.keyCode == 39) {
        keyboard.RIGHT = true;
    }
    if (e.keyCode == 37) {
        keyboard.LEFT = true;
    }
    if (e.keyCode == 38) {
        keyboard.UP = true;
    }
    if (e.keyCode == 40) {
        keyboard.DOWN = true;
    }
    if (e.keyCode == 32) {
        keyboard.SPACE = true;
    }
    if (e.keyCode == 68) {
        keyboard.D = true;
    }
    if (e.keyCode == 70) {
        keyboard.F = true;
    }
});

window.addEventListener("keyup", (e) => {
    if (e.keyCode == 39) {
        keyboard.RIGHT = false;
    }
    if (e.keyCode == 37) {
        keyboard.LEFT = false;
    }
    if (e.keyCode == 38) {
        keyboard.UP = false;
    }
    if (e.keyCode == 40) {
        keyboard.DOWN = false;
    }
    if (e.keyCode == 32) {
        keyboard.SPACE = false;
    }
    if (e.keyCode == 68) {
        keyboard.D = false;
    }
    if (e.keyCode == 70) {
        keyboard.F = false;
    }
});