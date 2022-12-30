class ShopCloud extends DrawableObject {


    IMAGE = '../img/cloud.png';


    constructor() {
        super();
        this.loadImage(this.IMAGE);
        this.x = 225;
        this.y = 60;
        this.width = 275;
        this.height = 250;
    }

}