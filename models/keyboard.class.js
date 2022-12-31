class Keyboard {
    LEFT = false;
    RIGHT = false;
    UP = false;
    DOWN = false;
    SPACE = false;
    D = false;
    F = false;

    constructor() {
        this.run();
    }

    run() {
        setInterval(() => {
            this.bindBtsPressEvents();
        }, 1000 / 60);
    }

    bindBtsPressEvents() {
        document.getElementById('btnLeft').addEventListener('touchstart', (e) => {
            this.LEFT = true;
        });
        document.getElementById('btnLeft').addEventListener('touchend', (e) => {
            this.LEFT = false;
        });

        document.getElementById('btnRight').addEventListener('touchstart', (e) => {
            this.RIGHT = true;
        });
        document.getElementById('btnRight').addEventListener('touchend', (e) => {
            this.RIGHT = false;
        });

        document.getElementById('btnJump').addEventListener('touchstart', (e) => {
            this.UP = true;
        });
        document.getElementById('btnJump').addEventListener('touchend', (e) => {
            this.UP = false;
        });

        document.getElementById('btnThrow').addEventListener('touchstart', (e) => {
            this.D = true;
        });
        document.getElementById('btnThrow').addEventListener('touchend', (e) => {
            this.D = false;
        });

        document.getElementById('btnBuy').addEventListener('touchstart', (e) => {
            this.F = true;
        });
        document.getElementById('btnBuy').addEventListener('touchend', (e) => {
            this.F = false;
        });
    }
}