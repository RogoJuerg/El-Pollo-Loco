let level1;

function initLevel() {
    level1 = new Level(
        [
            new Chicken(600),
            new Chicken(700),
            new Chicken(800),
            new Chicken(900),
            new Chicken(900),
            new Chicken(900),
            new Chicken(900),
            new Chicken(1000),
            new Chicken(1400),
            new Chicken(1400),
            new Chicken(1400),
            new Chicken(1400),
            new Chicken(1400),
            new Chicken(2400),
            new Chicken(2400),
            new Chicken(2400),
            new Chicken(2400),
            new Chicken(2400),
            new Chicken(2400),
            new Chicken(2400),
            new Chicken(2400),
            new Chicken(2400),
            new Chicken(3000),
            new Chicken(3000),
            new Chicken(3000),
            new Chicken(3000),
            new Chicken(3000),
            new Endboss(3000)
        ],
        [
            new Coin(1000, 100),
            new Coin(1010, 100),
            new Coin(1025, 100),
            new Coin(1039, 100),

        ],
        [
            new Cloud(200, 0),
            new Cloud(800, 5),
            new Cloud(1400, 0),
            new Cloud(2400, 15),
        ],
        [
            new BackgroundObject('../img/5_background/layers/air.png', -719),
            new BackgroundObject('../img/5_background/layers/3_third_layer/2.png', -719),
            new BackgroundObject('../img/5_background/layers/2_second_layer/2.png', -719),
            new BackgroundObject('../img/5_background/layers/1_first_layer/2.png', -719),

            new BackgroundObject('../img/5_background/layers/air.png', 0),
            new BackgroundObject('../img/5_background/layers/3_third_layer/1.png', 0),
            new BackgroundObject('../img/5_background/layers/2_second_layer/1.png', 0),
            new BackgroundObject('../img/5_background/layers/1_first_layer/1.png', 0),

            new BackgroundObject('../img/5_background/layers/air.png', 719),
            new BackgroundObject('../img/5_background/layers/3_third_layer/2.png', 719),
            new BackgroundObject('../img/5_background/layers/2_second_layer/2.png', 719),
            new BackgroundObject('../img/5_background/layers/1_first_layer/2.png', 719),

            new BackgroundObject('../img/5_background/layers/air.png', 719 * 2),
            new BackgroundObject('../img/5_background/layers/3_third_layer/1.png', 719 * 2),
            new BackgroundObject('../img/5_background/layers/2_second_layer/1.png', 719 * 2),
            new BackgroundObject('../img/5_background/layers/1_first_layer/1.png', 719 * 2),

            new BackgroundObject('../img/5_background/layers/air.png', 719 * 3),
            new BackgroundObject('../img/5_background/layers/3_third_layer/2.png', 719 * 3),
            new BackgroundObject('../img/5_background/layers/2_second_layer/2.png', 719 * 3),
            new BackgroundObject('../img/5_background/layers/1_first_layer/2.png', 719 * 3),

            new BackgroundObject('../img/5_background/layers/air.png', 719 * 4),
            new BackgroundObject('../img/5_background/layers/3_third_layer/1.png', 719 * 4),
            new BackgroundObject('../img/5_background/layers/2_second_layer/1.png', 719 * 4),
            new BackgroundObject('../img/5_background/layers/1_first_layer/1.png', 719 * 4),

            new BackgroundObject('../img/5_background/layers/air.png', 719 * 5),
            new BackgroundObject('../img/5_background/layers/3_third_layer/2.png', 719 * 5),
            new BackgroundObject('../img/5_background/layers/2_second_layer/2.png', 719 * 5),
            new BackgroundObject('../img/5_background/layers/1_first_layer/2.png', 719 * 5),
        ],
        [
            new Box(600, 200),
            new Box(2200, 200)
        ],
        [
            new Shop(1200, 220),
        ]
    );
}