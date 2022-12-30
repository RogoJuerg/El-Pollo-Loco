class Box extends ObstacleObject {

    width = 85;
    height = 85;

    isSlideable = true;

    originGround = 340;

    relativeGround = 340;

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