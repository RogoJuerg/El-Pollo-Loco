class Shop extends BackgroundObject {
    y = 240;
    
    width = 175;
    height = 175;

    IMAGE = '../img/Stall_01.png';

    constructor(x) {
        super().loadImage(this.IMAGE);
        this.x = x;
    }
}