///Замыкание

/*
function outer() {
    var n;

    return inner() {

    }
}

function outer() {
    let x = 5;

    function inner() {
        x++;
        console.log(x);
    }

    return inner;
}

let fn = outer();

fn();
fn();
fn();


function multiply(n) {
    var x = n;

    return function(m) {
        return  x * m;
    };
}

var fn1 = multiply(5);
var result1 = fn1(6);
console.log(result1);

var fn2 = multiply(3);
var result2 = fn2(7);
console.log(result2);


///Самовызывающаяся функция // IIFE
(function() {
    console.log("Hello, World!");
}());

(function(n) {
    var result = 1;

    for (var i = 1; i < n; i++) {
        result *= i;
    }

    console.log("Факториал числа " + n + " равен " + result);
}(4))



///Оператор ?.


let tom = null; 
let bob = { name: "Bob" };

function printName(person) {
    if (person !== null && person !== undefined) {
        console.log(person.name);
    }
}

printName(tom);
printName(bob);

let tom = null;
let bob = { name: "Bob"};

function printName(person) {
    console.log(person?.name);
}

printName(tom);
printName(bob);


let mike = undefined;
let andrew = {
    name: "Andrew",

    sayHi: function() {
        console.log(`Hi!, I am ${this.name}`);
    }
}

console.log(mike?.name);
console.log(andrew?.name);

mike?.sayHi();
andrew?.sayHi();


let sam = { name: "Sam" };
let cisco = {
    name: "Cisco",
    company: {
        title: "Microsoft"
    }
};

console.log(sam.company?.title);
console.log(cisco.company?.title);

let sam = { name: "Sam" };
let cisco = {
    name: "Cisco",
    company: {
        title: "Google"
    }
};

console.log(sam.company?.[title]);
console.log(cisco.company?.[title]);

let tom = { name: "Tom"};
let bob = {
    name: "Bob", 
    languages: ["javascript", "typescript"]
};

console.log(tom.languages?.[0]);
console.log(bob.languages?.[0]);
*


let tom = { name: "Tom" };
let bob = {
    name: "Bob",
    say(words) {
        console.log(words);
    }
};

console.log(tom.say?.("my name is Tom"));
console.log(bob.say?.("my name is Tom"));


let mike = { name: "Mike" };

let sam = {
    name: "Sam",
    company: {
        title: "Google"
    }
};

let andrew = {
    name: "Andrew",
    company: {
        title: "KFC",
        print: function() {
            console.log(`Company is ${this.title}`);
        }
    }
};

console.log(mike.company?.print?.());
console.log(sam.company?.print?.());
console.log(andrew.company?.print?.());
*/



///Массивы и spread-оператор

/*

const users = ["Tom", "Sam", "Mike"];
console.log(...users);

const people1 = [...users]; 
const people2 = new Array(...users);
const people3 = Array.of(...users);

console.log(people1);
console.log(people2);
console.log(people3);

const men = ["Tom", "Sam", "Bob"];
const women = ["Kate", "Alice", "Mary"];
const people = [...men, "Alex", ...women];

console.log(people);

const peoples = ["Tom", "Sam", "Bob"];
 
function print(first, second, third){
    console.log(first);
    console.log(second);
    console.log(third);
}
print(...peoples); 

function sum(a, b, c) {
    const d = a + b + c;
    console.log(d);
}

sum(1, 2, 3);
const num = [4, 5, 6];
sum(...num);

const people1 = ["Tom", "Sam", "Bob", "Mike"];
const people2 = ["Alex", "Bill"];

function print(first, second, third) {
    console.log(`${first}, ${second}, ${third}`);
}

print(...people1);
print(...people2);

const people = ["Alex", "Mike", "Bob"];
const employees = [...people];
employees[0] = "Dan";

console.log(employees);
console.log(people);
console.log(...people);
*/

const people = [{name:"Sam"}, {name:"Tom"}, {name:"Bob"}];
const employees = [...people];
employees[0].name = "Dan";

console.log(...employees);
console.log(employees);
console.log(people);
///Устаревшее слово var

/*
*/
var a = 5;
let b = 8;
const c = 9;
function displaySum(){
  
    var d = a + b + c;
    console.log(d);
}
displaySum(); // 22

{
    var a = 5;
    let b = 6;
    const c = 7;
}


function print() {
    var a = 4;
    let b = 6;
    const c = 8;

    console.log("Function is:", a);
    console.log("Function is:", b);
    console.log("Function is:", c);
}

print();
console.log("Global: a =", a);


let z = 10;

function displayZ() {
    let z = 20;

    {
        let z = 30;
        console.log("Black:", z);
    }

    console.log("Function:", z);
}

displayZ(z);
console.log("Global:", z)


"use strict";

function bar() {
    foo = "25";
}

bar();
console.log(foo);