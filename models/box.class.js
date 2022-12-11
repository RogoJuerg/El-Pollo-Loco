class Box extends ObstacleObject {

    width = 75;
    height = 75;

    originGround = 350;

    relativeGround = 350;

    speed = 2;

    isSlideable = true;
    collided;


    IMAGE = '../img/Wooden_Crate.png';

    constructor(x, y) {
        super().loadImage(this.IMAGE);
        this.collided = false;
        this.x = x;
        this.y = y;

        this.applyGravity();

    }

}