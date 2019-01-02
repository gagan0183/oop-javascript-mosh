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
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }

    // The below statement is implicit
    //return this
} 

const circle = new Circle(9);