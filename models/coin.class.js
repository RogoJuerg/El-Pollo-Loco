class Coin extends MovableObject {
    width = 50;
    height = 50;

    groundHit = false;

    IMAGES = [
        '../img/8_coin/coin_1.png',
        '../img/8_coin/coin_2.png',
        '../img/8_coin/coin_3.png',
        '../img/8_coin/coin_4.png',
        '../img/8_coin/coin_5.png'
    ];

    coinDrop_sound;

    originGround = 360;
    relativeGround = 360;

    constructor(x, y) {
        super().loadImage('../img/8_coin/coin_2.png');
        this.loadImages(this.IMAGES);

        this.coinDrop_sound = new Audio('../audio/coin_drop.mp3');
        this.coinDrop_sound.volume = 0.1;

        this.x = x;
        this.y = y;
        this.speedY = 10;


        this.applyGravity();
        this.checkGround();
        this.animate();
    }


    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES);
            this.checkGround();
        }, 125);

    }

    checkGround() {
        if (!this.isAboveGround() && !this.groundHit) {
            this.groundHit = true;
            if (this.groundHit) {
                this.playDropSound();
            }
        }
    }

    playDropSound() {
        this.coinDrop_sound.cloneNode(true).play();
    }

}