class Level {
    enemies;
    coins;
    clouds;
    backgroundObjects;
    obstacleObjects
    level_end_x = 2200;

    constructor(enemies, coins, clouds, backgroundObjects, obstacleObjects) {
        this.enemies = enemies;
        this.coins = coins;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
        this.obstacleObjects = obstacleObjects;
    }
}