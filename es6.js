'use strict';

const Circle = function() {
    this.draw = function() {
        console.log(this);
        console.log('draw');
    }
}

const c = new Circle();
c.draw();
const value = c.draw;
value();