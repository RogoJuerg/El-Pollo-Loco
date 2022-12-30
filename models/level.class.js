class Level {
    enemies;
    coins;
    clouds;
    backgroundObjects;
    obstacleObjects;
    shops;
    level_end_x = 3000;

    constructor(enemies, coins, clouds, backgroundObjects, obstacleObjects, shops) {
        this.enemies = enemies;
        this.coins = coins;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
        this.obstacleObjects = obstacleObjects;
        this.shops = shops;
    }
}