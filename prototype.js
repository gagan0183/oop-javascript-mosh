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