var person = {name: 'Gagan'};

Object.defineProperty(person, 'name', {
    writable: false,
    configurable: false,
    enumerable: false
});

//create read only property
person.name = 'P';
console.log(person);

//cannot delete the property
delete person.name;
console.log(person);

//cannot enumeration the property
console.log(Object.keys(person));

function Circle(radius) {
    //instance members
    this.radius = radius;
}

//prototype members
Circle.prototype.draw = function() {
    console.log('draw');
}

const c1 = new Circle(9);
const c2 = new Circle(9);

Circle.prototype.toString = function() {
    return 'circle with radius ' + this.radius;
}