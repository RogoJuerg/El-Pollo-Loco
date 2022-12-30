class Plattform extends ObstacleObject {

    width = 200;
    height = 50;

    speed = 0;

    isSlideable = false;

    IMAGE = '../img/plattform.png';

    constructor(x, y, originGround) {
        super().loadImage(this.IMAGE);


        this.originGround = y;
        this.x = x;
        this.y = y;
    }
}