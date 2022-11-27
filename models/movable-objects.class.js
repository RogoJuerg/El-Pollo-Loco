class MovableObject {
    x = 120;
    y = 280;
    img;
    height = 150;
    width = 100;

    imageCache = {};

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }
    /**
     * 
     * @param {Array} arr - ['img/image1.png', 'img/image2.png', ...] 
     */

    loadImages(arr) {
        arr.forEach(() => {
            let image = new Image();
            image.src = arr;
            this.imageCache[path] = path;
        });
    }

    moveRight() {
        console.log('Moving right');
    }

    moveLeft() {

    }
}