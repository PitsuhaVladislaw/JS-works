/*
{
    const arr = [5, 6];
    arr.push(7);
    console.log(arr);

    ///arr = 10;
    arr[0] = 3;
    console.log(arr);
}


let addition = function(a, b) {
    return a + b;
};

let additions = (a, b) => a + b;


let arr = ['apple', 'banana', 'orange'];

let breakfast = arr.map(fruit => {
    return fruit + 's';
});

console.log(breakfast);


function Person() {
    this.age = 0;

    setInterval(function growUp() {
        this.age++;
    }, 1000);
}

var p = new Person();

function Person() {
    this.age = 0;

    setInterval(() => {
        this.age++;
    }, 1000)
}

let p = new Person();


let getFinalPrice = (price, tax = 0.7) => price + price * tax;
getFinalPrice(500);
console.log(getFinalPrice(500));
console.log(getFinalPrice(500, 0.2));


function foo(x, y, z) {
    console.log(x, y, z);
}

let arr = [5, 6, 7];
foo(...arr);

function fot(...args) {
    console.log(args);
}

fot(1, 2, 3, 4, 5);


function getCar(make, model, value) {
    return {
        make, 
        model,
        value,

        ['make' + make]: true,

        depreciate() {
            this.value -= 2500;
        }
    };
}

let car = getCar('Kia', 'Soretto', 40000);
console.log(car);

let oValue = 0o10;
console.log(oValue);

let bValue = 0b10;
console.log(bValue);


function foo() {
    return [1, 2, 3];
}

let arr = foo();

let [a, b, c] = foo();
console.log(a, b, c);

function bar() {
    return {
        x: 4, 
        y: 5,
        z: 6
    };
}

let { x: d, y: x, z: v } = bar();
console.log(d, x, v);


var parent = {
    foo() {
        console.log("Hello from parents!");
    }
}

var child = {
    foo() {
        super.foo(); {
            console.log("Hello from Child");
        }
    }
}

Object.setPrototypeOf(child, parent);
child.foo();


let user = 'Kevin';
console.log(`Hello, ${user}`);


let nickNames = ['di', 'boo', 'punkeye'];
nickNames.size = 3;

for(let nickName of nickNames) {
    console.log(nickName);
}

for (let nickName in nickNames) {
    console.log(nickName);
}


let myMap = new Map();

let keyString = 'string',
    keyObj = {},
    keyFunc = function() {};
myMap.set(keyString, "value1");
myMap.set(keyObj, "value2");
myMap.set(keyFunc, "value3");

myMap.size;

myMap.get(keyString);
myMap.get(keyObj);
myMap.get(keyFunc);


let w = new WeakMap();
w.set('a', 'b');

let o1 = {},
    o2 = function() {},
    o3 = window;

w.set(o1, 37);
w.set(o2, "azerty");
w.set(o3, undefined);

w.get(o3);

w.has(o1);
w.delete(o1);
w.has(o1);


let mySet = new Set([1, 2, 3, 4, 3, 2, 4, 4, 5]);
mySet.size;
mySet.has(1);
mySet.add('string');
mySet.add({a: 1, b: 2});

mySet.forEach((item) => {
    console.log(item);
});

for (let value of mySet) {
    console.log(value);
}


let ws = new WeakSet();
let obj = {};
let foo = {};

ws.add(window);
ws.add(obj);

ws.has(window);
ws.has(foo);

ws.delete(window);
ws.has(window);


class Task {
    constructor() {
        console.log("Task was created");
    }

    snowId() {
        console.log(23);
    }

    static loadAll() {
        console.log("Downland all tasks");
    }
}

console.log(typeof Task);
let task = new Task();
task.snowId(23);
Task.loadAll();


class Car {
    constructor() {
        console.log("Creating a new car");
    }
}

class Porsche extends Car {
    constructor() {
        super();
        console.log()
    }
}

let c = new Porsche();


let sym = Symbol("Optional description");
console.log(typeof sym);

let o = {
    val: 10, 
    [Symbol("diference")]: "It's a symbol"
};

console.log(Object.getOwnPropertyNames(o));
console.log(Object.getOwnPropertySymbols(o));


let arr = [11, 12, 13];
let itr = arr[Symbol.iterator]();

itr.next();
itr.next();
itr.next();

itr.next();


function *infiniteNumbers() {
    let n = 1;
    while(true) {
        yield n++;
    }
}

let numbers = infiniteNumbers();

numbers.next();
numbers.next();
numbers.next();


let p = new Promise(function(resolve, reject) {
    if() {
        resolve();
    } else {
        reject();
    }
});
*/

let hello = new Promise(function(resolve, reject) {
    resolve("hello");
});

hello.then((str) => `${str} World`)
     .then((str) => `${str} !`)
     .then((str) => console.log(str));

let p = new Promise(function(resolve, reject) {
    resolve(1);
});

let eventuallyAdd1 = (val) => {
    return new Promise(function(resolve, reject) {
        resolve(val + 1);
    });
}

p.then(eventuallyAdd1)
 .then(eventuallyAdd1)
 .then((val) => console.log(val));