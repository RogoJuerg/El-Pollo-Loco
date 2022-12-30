class MoneyCounter extends DrawableObject {

    IMAGE = '../img/8_coin/coin_1.png';


    constructor() {
        super();
        this.loadImage(this.IMAGE);
        this.x = 46;
        this.y = 60;
        this.width = 48;
        this.height = 48;
    }

}