const privateProps = new WeakMap();

//we can also define separate weakmaps for each property

class Circle {
    constructor(radius) {
        privateProps.set(this, {
            radius: radius,
            move: () => {
                console.log('move ', this);
            }
        });
    }

    draw() {
        console.log(privateProps.get(this).radius);
        console.log(privateProps.get(this).move());
    }
}

const c = new Circle(9);
c.draw();
