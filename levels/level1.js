const level1 = new Level(
    [
        new Chicken(300),
        new Chicken(500),
        new Chicken(600),
        new Chicken(700),
        new Chicken(800),
        new Endboss(),
        new Box
    ],
    [
        new Coin(400, 100),
        new Coin(500, 100),
        new Coin(600, 100),
        new Coin(700, 100),
        
    ],
    [
        new Cloud()
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
        new BackgroundObject('../img/5_background/layers/1_first_layer/2.png', 719 * 3)
    ]);