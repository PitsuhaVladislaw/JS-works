console.log('-----------------');

function Animal2(type) {
    this.type = type;
}

Animal2.prototype.run = function() {
    return 'RUN';
}

function Person2(name, age) {
    Animal2.call(this, 'human');
    this.name = name;
    this.age = age;
}

Person2.region = 'Asia';
Person2.help = function() {
    console.log('help');
}
Person2.prototype = Object.create(Animal2.prototype);
Person2.prototype.constructor = Person2;
Person2.prototype.print = function() {
    return `${this.name} ${this.age}`
}

Object.defineProperty(Person2.prototype, 'card', {
    configurable: false,
    writable: false,
    enumerable: true,
    value: '11111',
})

const alex2 = new Person2('Alex2', 20);
console.log(Person2.region);
console.log(alex2.print());
console.log(alex2.run());

console.log(Object.getOwnPropertyDescriptor(alex2));