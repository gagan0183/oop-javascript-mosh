//factories
function createCircle(radius) {
    return {
        radius: radius,
        draw: function() {
            console.log('draw');
        }
    };
}

const circle = createCircle(9);
circle.draw();