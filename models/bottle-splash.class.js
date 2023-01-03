class BottleSplash extends MovableObject {
    width = 60;
    height = 70;

    IMAGES = [
        '../img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png',
        '../img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png',
        '../img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png',
        '../img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png',
        '../img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png'
    ];

    constructor(x, y) {
        super().loadImage(this.IMAGES[0]);
        this.loadImages(this.IMAGES);
        this.x = x;
        this.y = y;
        this.animate();
        this.splashFall();
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES);
        }, 25);
    }

    splashFall() {
        setInterval(() => {
            this.y += 5;
        }, 1000/ 60);
    }
}