class Chicken extends MovableObject {
    y = 330;
    width = 80;
    height = 100;

    IMAGES_WALKING = [
        '../img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        '../img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        '../img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
    ];
    random;

    constructor(position_x) {
        super().loadImage('../img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.loadImages(this.IMAGES_WALKING);

        this.x = position_x + Math.random() * 500; //Zahl zwischen 200 und 700
        this.speed = 0.15 + Math.random() * 0.25;




        this.animate();

    }


    animate() {
        setInterval(() => {
            if (!this.otherDirection) {
                this.moveLeft();
            } else {
                this.moveRight();
            }
        }, 1000 / 60);

        setInterval(() => {
            this.changeDirection();
        }, this.randomizeNumber());

        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
        }, 200);


    }


    changeDirection() {
        this.otherDirection = !this.otherDirection;
    }

    randomizeNumber() {
        return Math.random() * 100000;
    }

}