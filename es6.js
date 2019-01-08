class Circle {
    constructor(radius) {
        this.radius = radius;
        //instance method
        this.move = function() {

        }
    }

    //prototype method
    draw() {
        console.log('draw');
    }
}

const p = new Circle(9);