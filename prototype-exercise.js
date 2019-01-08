function HtmlElement() {
    this.click = function() {
        console.log('click');
    }
}


HtmlElement.prototype.focus = function() {
    console.log('click');
}

function HtmlSelectElement(items = []) {
    this.items = items;
    this.addItem = function(item) {
        this.items.push(item);
    }
    this.removeItem = function(item) {
        this.items.splice(this.items.indexOf(item), 1);
    }
}

HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlElement;