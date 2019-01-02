//factories
function createCircle(radius) {
    return {
        radius: radius,
        draw: function() {
            console.log('draw');
        }
    };
}

//const circle = createCircle(9);

//constructor function
// does three things
// 1. create an empty object {}
// 2. pass this empty object as this inside the function
// 3. return this object from the function p
function Circle(radius) {
    console.log(this);

    let defaultLocation = {x : 9, y: 9};

    //implement abstraction it is not accessible outside of this function
    let calculateOptimumLocation = function() {
        console.log('calculate optimum location');
    }
    this.radius = radius;
    this.draw = function() {
        calculateOptimumLocation();
        console.log('draw');
    }

    //read only properties
    // also can set the value using setter method
    Object.defineProperty(this, 'defaultLocation', {
        get: function() {
            return defaultLocation;
        },
        set: function(value) {
            defaultLocation = value;
        }
    });
    // The below statement is implicit
    //return this
}

//functions are objects
// Function is a constructor used to create object
let circle1 = new Function('radius', `
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
`);

//value types
var num = 9;
function increment(num) {
    num++;
}

increment(num);
console.log(num);

//reference types
var object = { value: 9 };
function incrementval(object) {
    object.value++;
}

incrementval(object);
console.log(object.value);

//call and apply function
Circle.call({}, 9);
Circle.apply({}, [9]);

const circle = new Circle(9);
