class ShopCloud extends DrawableObject {


    IMAGE = '../img/cloud.png';


    constructor() {
        super();
        this.loadImage(this.IMAGE);
        this.x = 400;
        this.y = 0;
        this.width = 275;
        this.height = 250;
    }

}