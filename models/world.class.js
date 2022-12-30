class World {
    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    statusBar = new StatusBar();
    moneyCounter = new MoneyCounter();
    shopCloud = new ShopCloud();
    throwableObject = [];
    coins = [];
    playerCoins = 0;
    playerBottles = 2;
    showShopCloud = false;

    coinCollect_sound = new Audio('../audio/coin_collect.wav');
    

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.ctx.font = "40px MexicanTequila, sans-serif";
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
        if (this.keyboard.D && this.playerBottles > 0) {
            let bottle = new ThrowableObjects(this.character.x + 70, this.character.y + 10);
            this.throwableObject.push(bottle);
            this.playerBottles -= 1;
        }
    }

    checkCollisions() {
        this.checkEnemyCollision();
        this.checkCoinCollision();
        this.checkProjectileCollision();
        this.checkBoxCollision();
        this.checkShopCollision();

        this.adjustOriginGround(this.character);
    }

    checkEnemyCollision() {
        this.level.enemies.forEach((enemy) => {
            this.adjustOriginGround(enemy);
            if (this.character.isColliding(enemy, this.character.offset)) {
                this.character.hit();
                this.statusBar.setPercentage(this.character.energy);
            };

            this.level.obstacleObjects.forEach((obstacle) => {
                this.compareCollisions(enemy, obstacle);
                if(obstacle.isCollidingRight(enemy, 0)) {
                    enemy.otherDirection = false;
                }
                this.compareCollisions(obstacle, enemy);

                this.level.obstacleObjects.forEach((obstacle2) => {
                    this.compareCollisions(enemy, obstacle2);
                    this.compareCollisions(obstacle2, enemy);
                });
                
            });

        }
        );
    }

    checkBoxCollision() {
        this.level.obstacleObjects.forEach((obstacle) => {
            this.adjustOriginGround(obstacle);
            this.character.lastRelativeGround = this.character.relativeGround;

            if(this.character.isCollidingBottom(obstacle)) {
                this.character.y += 5;
                this.character.speedY = 0;
            }
            if (this.character.isCollidingLeft(obstacle, this.character.offset) && obstacle.isSlideable) {
                this.compareCollisions(this.character, obstacle);
            };
            if (this.character.isCollidingRight(obstacle, this.character.offset) && obstacle.isSlideable) {
                this.compareCollisions(this.character, obstacle);
            };
            this.checkTopCollision(this.character, obstacle);
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
        if (col1.isCollidingLeft(col2, col2.offset) && col2.isSlideable) {
            col2.slideLeft(col1.speed);
            col1.slideRight(col2.speed);
        };
        if (col1.isCollidingRight(col2, col2.offset) && col2.isSlideable) {
            col2.slideRight(col2.speed);
            col1.slideLeft(col2.speed);
        };
    }

    checkShopCollision() {
        console.log(this.playerBottles);
        this.level.shops.forEach((shop) => {
            if(this.character.isColliding(shop, this.character.offset)){
                console.log('Show bubble'); // Show bubble with info
                if(this.keyboard.F && this.checkIfPlayerHasEnoughCoind(5)) {
                    console.log('bought');
                    this.addBottle(1);
                    this.playerCoins -= 5;
                }
            }
        });
    }

    checkIfPlayerHasEnoughCoind(minAmount) {
        return (this.playerCoins >= minAmount);
    }

    adjustOriginGround(entity) {
        if (entity.y > entity.originGround) {
            entity.y = entity.originGround;
        }
    }

    checkTopCollision(collider, obstacle) {
        if (collider.isCollidingTop(obstacle, collider.offset) && !obstacle.collided) {
            obstacle.collided = true;
            this.changeRelativeHeight(collider, obstacle);
        };
        if (!collider.isCollidingTop(obstacle, collider.offset) && obstacle.collided) {
            this.changeRelativeHeightBack(collider, obstacle);
            obstacle.collided = false;
        }
    }

    changeRelativeHeight(collider, obstacle) {
        collider.relativeGround = collider.relativeGround - (obstacle.y + obstacle.height);
    }

    changeRelativeHeightBack(collider, obstacle) {
        collider.relativeGround = collider.relativeGround + (obstacle.y + obstacle.height);
    }

    checkProjectileCollision() {
        if (this.throwableObject) {
            this.level.enemies.forEach((enemy) => {
                this.throwableObject.forEach((bottle) => {
                    if (bottle.isColliding(enemy, bottle.offset)) {
                        let indexEnemy = this.level.enemies.indexOf(enemy);
                        this.level.enemies.splice(indexEnemy, 1);
                        this.coinExplosion(enemy.x);
                    }
                })
            })
        }
    }

    checkCoinCollision() {
        this.level.coins.forEach((coin) => {
            if (this.character.isColliding(coin, 0)) {
                this.collectCoin(coin);
            };
        });
    }

    collectCoin(coin) {
        this.coinCollect_sound.cloneNode(true).play();
        this.playerCoins += 1;
        this.removeCoin(coin);
    }

    addBottle(amount) {
        this.playerBottles += amount;
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
        this.addObjectsToMap(this.level.shops);
        this.addObjectsToMap(this.level.clouds);
        this.ctx.translate(-this.camera_x, 0);
        // ----- space for fixed objects -----
        this.addToMap(this.statusBar);
        this.addToMap(this.moneyCounter);
        this.addToMap(this.shopCloud);
        this.ctx.fillText(this.playerCoins, 100, 98);
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
        // mo.drawFrame(this.ctx); // Shows am frame around a object
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
        }
    }
}