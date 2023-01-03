class Chicken extends MovableObject {
    width = 60;
    height = 70;

    originGround = 360;
    relativeGround = 360;

    IMAGES_WALKING = [
        '../img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        '../img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        '../img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
    ];
    IMAGES_DEAD = [
        '../img/3_enemies_chicken/chicken_normal/2_dead/dead.png'
    ];
    random;

    constructor(position_x) {
        super().loadImage('../img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DEAD);

        this.x = position_x + Math.random() * 500; //Zahl zwischen 200 und 700
        this.speed = 0.4 + Math.random() * 0.25;

        this.applyGravity();
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
            if(this.isDead()) {
                this.playAnimation(this.IMAGES_DEAD);
            } else {
                this.playAnimation(this.IMAGES_WALKING);
            }
        }, 200);


    }


    changeDirection() {
        this.otherDirection = !this.otherDirection;
    }

    randomizeNumber() {
        return Math.random() * 100000;
    }

}