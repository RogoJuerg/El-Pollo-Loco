class MovableObject extends DrawableObject {
    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 1;
    energy = 100;
    lastHit = 0;

    originGround;


    lastRelativeGround;
    relativeGround;

    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25);
    }

    isAboveGround() {
        if (this instanceof ThrowableObjects) {
            return true;
        } else {
            return this.y < this.relativeGround;
        }
    }



    isColliding(mo) {
        return this.x + this.width > mo.x &&
            this.y + this.height - 10 > mo.y &&
            this.x < mo.x &&
            this.y < mo.y + mo.height - 10;
    }

    isCollidingLeft(mo) {
        return this.x + this.width > mo.x + mo.width &&
            this.y + this.height - 5 > mo.y &&
            this.x < mo.x + mo.width &&
            this.y < mo.y + mo.height - 5;
    }

    isCollidingTop(mo) {
        return this.x + this.width + mo.width - 20 > mo.x + mo.width &&
            this.y + this.height + 5 > mo.y &&
            this.x < mo.x + mo.width &&
            this.y < mo.y + mo.height + 5;
    }

    hit() {
        this.energy -= 0.5;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit; // Difference in milliseconds
        timepassed = timepassed / 1000; // Difference in seconds
        return timepassed < 0.5;
    }

    isDead() {
        return this.energy == 0;
    }


    moveRight() {
        this.x += this.speed;
    }

    moveLeft() {
        this.x -= this.speed;
    }

    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    jump() {
        this.speedY = 15;
    }

    slideRight(speed) {
        this.x += speed;
    }

    slideLeft(speed) {
        this.x -= speed;
    }

} 