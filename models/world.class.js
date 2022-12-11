class World {
    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    statusBar = new StatusBar();
    throwableObject = [];
    coins = [];
    playerCoins = 0;

    coinCollect_sound = new Audio('../audio/coin_collect.wav');

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.checkCollisions();
        this.deleteLastThrownBottle();
        this.run();
    }


    setWorld() {
        this.character.world = this;
    }

    run() {
        setInterval(() => {
            this.checkCollisions();
            this.checkThrowObjects();
        }, 1000 / 60);

    }

    deleteLastThrownBottle() {
        setInterval(() => {
            this.throwableObject.splice(0, 1);
        }, 5000);
    }

    checkThrowObjects() {
        if (this.keyboard.D) {
            let bottle = new ThrowableObjects(this.character.x + 80, this.character.y + 75)
            this.throwableObject.push(bottle);
        }
    }

    checkCollisions() {
        this.checkEnemyCollision();
        this.checkCoinCollision();
        this.checkProjectileCollision();
        this.checkBoxCollision();

        this.adjustOriginGround(this.character)

        console.log(this.character.y);

    }

    checkEnemyCollision() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                this.character.hit();
                this.statusBar.setPercentage(this.character.energy);
            };

            this.level.obstacleObjects.forEach((obstacle) => {
                if (enemy.isCollidingLeft(obstacle)) {
                    obstacle.slideLeft(enemy.speed);
                };
                if (enemy.isColliding(obstacle)) {
                    obstacle.slideRight(enemy.speed);
                };

                if (obstacle.isCollidingLeft(enemy)) {
                    enemy.slideLeft(obstacle.speed);
                };
                if (obstacle.isColliding(enemy)) {
                    enemy.slideRight(obstacle.speed);
                };


            });

        }
        );
    }

    checkBoxCollision() {

        this.level.obstacleObjects.forEach((obstacle) => {
            this.adjustOriginGround(obstacle);
            this.character.lastRelativeGround = this.character.relativeGround;
            
            // console.log(obstacle.collided);
            if (this.character.isCollidingLeft(obstacle)) {
                obstacle.slideLeft(this.character.speed);
            };
            if (this.character.isColliding(obstacle)) {
                obstacle.slideRight(this.character.speed);
            };
            
            this.checkBoxTopCollision(obstacle);

            this.compareCollisions(obstacle, this.character);
            this.compareCollisions(this.character, obstacle);

            this.level.obstacleObjects.forEach((obstacle2) => {
                this.compareCollisions(obstacle, obstacle2);
                this.compareCollisions(obstacle2, obstacle);

            });
        });
    }

    /**
     * Compares collision between 2 entities
     * @param {*} col1 the colliding entity
     * @param {*} col2 the collider the first entity is colliding with
     */

    compareCollisions(col1, col2) {
        if (col1.isCollidingLeft(col2) && col2.isSlideable) {
            col2.slideLeft(col2.speed);
        };
        if (col1.isColliding(col2) && col2.isSlideable) {
            col2.slideRight(col2.speed);
        };
    }

    adjustOriginGround(entity) {
        if (entity.y > entity.originGround) {
            entity.y = entity.originGround;
        }
    }

    checkBoxTopCollision(obstacle) {
        if (this.character.isCollidingTop(obstacle) && !obstacle.collided) {
            obstacle.collided = true;
            this.character.relativeGround = this.character.relativeGround - obstacle.height;
        };
        if (!this.character.isCollidingTop(obstacle) && obstacle.collided) {
            this.character.relativeGround = this.character.relativeGround + obstacle.height;
            obstacle.collided = false;
        }
    }

    checkProjectileCollision() {
        if (this.throwableObject) {
            this.level.enemies.forEach((enemy) => {
                this.throwableObject.forEach((bottle) => {
                    if (bottle.isColliding(enemy)) {
                        let indexEnemy = this.level.enemies.indexOf(enemy);
                        let indexBottle = this.throwableObject.indexOf(bottle);
                        this.level.enemies.splice(indexEnemy, 1);
                        this.coinExplosion(enemy.x);
                    }
                })
            })
        }

    }


    checkCoinCollision() {
        this.level.coins.forEach((coin) => {
            if (this.character.isColliding(coin)) {
                this.collectCoin(coin);
            };
        });
    }

    collectCoin(coin) {
        this.coinCollect_sound.cloneNode(true).play();
        this.playerCoins += 1;
        this.removeCoin(coin);
    }

    spawnCoin() {
        let coin = new Coin(this.character.x + 300, this.character.y)
        this.level.coins.push(coin);
    }

    removeCoin(coin) {
        let index = this.level.coins.indexOf(coin);
        this.level.coins.splice(index, 1);
    }


    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.backgroundObjects);
        this.addObjectsToMap(this.level.clouds);

        this.ctx.translate(-this.camera_x, 0);
        // ----- space for fixed objects -----
        this.addToMap(this.statusBar);
        // ----- space for fixed objects -----
        this.ctx.translate(this.camera_x, 0);

        this.addObjectsToMap(this.throwableObject);
        this.addToMap(this.character);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.obstacleObjects);

        this.ctx.translate(-this.camera_x, 0);



        // Draw() wird immer wieder aufgerufen
        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }

    addObjectsToMap(objects) {
        objects.forEach((o) => {
            this.addToMap(o);
        });

    }

    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo);
        }
        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);



        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }
    }

    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }

    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }

    coinExplosion(position_x) {
        for (let i = 0; i < Math.random() * 5; i++) {
            let coin = new Coin(position_x + Math.random() * 100, 150 + Math.random() * 200)
            this.level.coins.push(coin);
            console.log('Coins dropped:', i);
        }
    }
}