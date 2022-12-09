class Box extends ObstacleObject {

    y = 100;
    x = 300;
    width = 75;
    height = 75;


    IMAGE = '../img/Wooden_Crate.png';

    constructor() {
        super().loadImage(this.IMAGE);

        this.relativeGround = 350;

        this.applyGravity();

    }
}