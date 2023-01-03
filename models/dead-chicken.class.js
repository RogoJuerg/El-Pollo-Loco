class DeadChicken extends DrawableObject {
    width = 60;
    height = 70;

    IMAGE = '../img/3_enemies_chicken/chicken_normal/2_dead/dead.png';

    constructor(x, y) {
        super().loadImage(this.IMAGE);
        this.x = x;
        this.y = y;
    }

}