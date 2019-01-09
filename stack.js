const arr = new WeakMap();

class Stack {
    
    constructor() {
        arr.set(this, []);
    }

    pop() {
        if(arr.get(this).length === 0) {
            throw new Error('Stack is empty');
        }
        return arr.get(this).pop();
    }

    push(value) {
        arr.get(this).push(value);
    }

    peek() {
        if(arr.get(this).length === 0) {
            throw new Error('Stack is empty');
        }
        return arr.get(this)[arr.get(this).length - 1];
    }

    get count() {
        return arr.get(this).length;
    }
}