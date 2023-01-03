class Character extends MovableObject {
    y = 500;
    width = 90;
    height = 140;
    speed = 4;

    offset = 10;
    originGround = 280;
    relativeGround = 280;

    IMAGES_WALKING = [
        '../img/2_character_pepe/2_walk/small/W-21.png',
        '../img/2_character_pepe/2_walk/small/W-22.png',
        '../img/2_character_pepe/2_walk/small/W-23.png',
        '../img/2_character_pepe/2_walk/small/W-24.png',
        '../img/2_character_pepe/2_walk/small/W-25.png',
        '../img/2_character_pepe/2_walk/small/W-26.png'
    ];
    IMAGES_JUMPING = [
        'img/2_character_pepe/3_jump/small/J-31.png',
        'img/2_character_pepe/3_jump/small/J-32.png',
        'img/2_character_pepe/3_jump/small/J-33.png',
        'img/2_character_pepe/3_jump/small/J-34.png',
        'img/2_character_pepe/3_jump/small/J-34.png',
        'img/2_character_pepe/3_jump/small/J-34.png',
        'img/2_character_pepe/3_jump/small/J-34.png',
        'img/2_character_pepe/3_jump/small/J-34.png',
        'img/2_character_pepe/3_jump/small/J-34.png',
        'img/2_character_pepe/3_jump/small/J-34.png',
        'img/2_character_pepe/3_jump/small/J-34.png',
        'img/2_character_pepe/3_jump/small/J-35.png',
        'img/2_character_pepe/3_jump/small/J-36.png',
        'img/2_character_pepe/3_jump/small/J-37.png',
        'img/2_character_pepe/3_jump/small/J-38.png',
        'img/2_character_pepe/3_jump/small/J-39.png'
    ];
    IMAGES_DEAD = [
        '../img/2_character_pepe/5_dead/small/D-51.png',
        '../img/2_character_pepe/5_dead/small/D-52.png',
        '../img/2_character_pepe/5_dead/small/D-53.png',
        '../img/2_character_pepe/5_dead/small/D-54.png',
        // '../img/2_character_pepe/5_dead/small/D-55.png'
    ];
    IMAGES_HURT = [
        '../img/2_character_pepe/4_hurt/small/H-41.png',
        '../img/2_character_pepe/4_hurt/small/H-42.png',
        '../img/2_character_pepe/4_hurt/small/H-43.png'
    ];
    IMAGES_IDLE = [
        '../img/2_character_pepe/1_idle/idle/small/I-1.png',
        '../img/2_character_pepe/1_idle/idle/small/I-2.png',
        '../img/2_character_pepe/1_idle/idle/small/I-3.png',
        '../img/2_character_pepe/1_idle/idle/small/I-4.png',
        '../img/2_character_pepe/1_idle/idle/small/I-5.png',
        '../img/2_character_pepe/1_idle/idle/small/I-6.png',
        '../img/2_character_pepe/1_idle/idle/small/I-7.png',
        '../img/2_character_pepe/1_idle/idle/small/I-8.png',
        '../img/2_character_pepe/1_idle/idle/small/I-9.png',
        '../img/2_character_pepe/1_idle/idle/small/I-10.png',
    ];
    world;
    walking_sound = new Audio('../audio/step.mp3');
    hurt_sound = new Audio('../audio/player_hurt.wav');




    constructor() {
        super().loadImage('../img/2_character_pepe/2_walk/W-21.png');
        this.walking_sound.playbackRate = 2.2;
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_JUMPING);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_HURT);


        this.applyGravity();
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.walking_sound.pause();
            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
                this.otherDirection = false;
                this.moveRight();
                this.checkWalkingSound();
            }
            if (this.world.keyboard.LEFT && this.x > 0) {
                this.otherDirection = true;
                this.moveLeft();
                this.checkWalkingSound();
            }
            if (this.world.keyboard.UP && !this.isAboveGround()) {
                this.jump();
            }

            this.world.camera_x = -this.x + 250;
        }, 1000 / 60);




        setInterval(() => {
            if (this.isDead()) {
                this.playAnimation(this.IMAGES_DEAD);
            } else if (this.isHurt()) {
                this.playAnimation(this.IMAGES_HURT);
                this.hurt_sound.play();
            } else if (this.isAboveGround()) {
                this.playAnimation(this.IMAGES_JUMPING);
            } else {
                if (this.world.keyboard.RIGHT == true || this.world.keyboard.LEFT) {
                    this.playAnimation(this.IMAGES_WALKING);
                } else {
                    this.playAnimation(this.IMAGES_IDLE);
                }
            }
        }, 80);
    }

    checkWalkingSound() {
        if (!this.isAboveGround()) {
            this.walking_sound.play();
        }
    }
}
