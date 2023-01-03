class Cloud extends MovableObject {
    y = 20;
    width = 500
    height = 250;

    constructor(x, y) {
        super().loadImage('../img/5_background/layers/4_clouds/1.png');

        this.x = Math.random() * 500; //Zahl zwischen 200 und 700
        this.animate();

        this.x = x;
        this.y = y;

        

    }

    animate() {
        this.moveLeft();
    }
}