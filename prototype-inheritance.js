function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    //reset the constructor
    Child.prototype.constructor = Child;
}

function Shape() {

}

Shape.prototype.duplicate = function() {
    console.log('duplicate');
}

function Circle() {
}

extend(Circle, Shape);

Circle.prototype.duplicate = function() {
    console.log('circle proto');
}

function Square() {
}

extend(Square, Shape);

Square.prototype.duplicate = function() {
    console.log('square proto');
}

let shapes = [
    new Square(),
    new Circle()
];

for(let shape of shapes) {
    shape.duplicate();
}


