function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    //reset the constructor
    Child.prototype.constructor = Child;
}

function Shape(color) {
    this.color = color;
}

Shape.prototype.duplicate = function() {
    console.log('duplicate');
}

function Circle(radius, color) {
    Shape.call(this, color);
    this.radius = radius;
}

extend(Circle, Shape);

Circle.prototype.draw = function() {
    console.log('draw');
}

function Square(size, color) {
    Shape.call(this, color);
    this.size = size;
}

extend(Square, Shape);

const s = new Shape();
const c = new Circle(1, 'p');
const sq = new Square(9, 'p');