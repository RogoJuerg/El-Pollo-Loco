class ThrowableObjects extends MovableObject {


    IMAGES_SPIN = [
        '../img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
        '../img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
        '../img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
        '../img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png'
    ];

    constructor(x, y) {
        super().loadImage('./img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png');
        this.loadImages(this.IMAGES_SPIN);
        
        this.x = x;
        this.y = y;
        this.height = 60;
        this.width = 50;
    }

    throw(direction) {
        this.speedY = 5;
        this.applyGravity();
        setInterval(() => {
            this.x += direction;
            this.playAnimation(this.IMAGES_SPIN);
        }, 25);
    }

}