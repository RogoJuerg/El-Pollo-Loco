class BottleCounter extends DrawableObject {

    IMAGE = '../img/6_salsa_bottle/salsa_bottle.png';


    constructor() {
        super();
        this.loadImage(this.IMAGE);
        this.x = 46;
        this.y = 106;
        this.width = 48;
        this.height = 48;
    }

}