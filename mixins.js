function mixin(parent, ...p) {
    Object.assign(parent, ...p);
}

const canEat = {
    eat: function() {
        console.log('eat');
    }
}

const canWalk = {
    walk: function() {
        console.log('walk');
    }
}

const canSwim = {
    swim: function() {
        console.log('swim');
    }
}

function Person() {
}

mixin(Person.prototype, canEat, canWalk);

const p = new Person()
console.log(p);