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
    Shape.prototype.duplicate.call(this);
    console.log('circle proto');
}

const c = new Circle();
