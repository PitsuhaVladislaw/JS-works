///Синтаксис new Function



/*
let sum = new Function('a, b', "return a + b");

console.log(sum(1, 2));


let sayHi = new Function('console.log("Hello")');

sayHi();


function getFunc() {
    let value = 'test';

    let func =  function() { console.log(value) };

    return func;
}

getFunc()();


function pow(a, b) {
    let result = 1;

    for (let i = 0; i < b; i++) {
        result *= a
    }

    return result;
}
*/



///Рекурсия


/*
function pow(a, b) {
    return (b === 1) ? a : a * (pow(a, b - 1));
}

console.log(pow(2, 2));
console.log(pow(2, 3));
console.log(pow(2, 4));


function pows(a, b) {
    let result = 1;

    for (let i = 0; i < b; i++) {
        result *= a
    }

    return result;
}

console.log(pows(2, 2));
console.log(pows(2, 3));
console.log(pows(2, 4));


let company = {
    sales: [{
        name: "John",
        salary: 1000
    }, {
        name: "Ann",
        salary: 1000
    }],

    development: {
        sites: [{
            name: "Peter",
            salary: 2000
        }, {
            name: "Alex",
            salary: 1800           
        }],

        internals: [{
            name: "Jack",
            salary: 1300
        }]
    }
};

function sumSalaries(department) {
    if (Array.isArray(department)) {
        return department.reduce((prev, current) => (prev + current.salary), 0);
    } else {
        let sum = 0;

        for (let subDep of Object.values(department)) {
            sum += sumSalaries(subDep);
        }

        return sum;
    }
}

console.log(sumSalaries(company));
*/




///Связанный список



/*
let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

let newList = { value: 1 };
newList.next = { value: 2 };
newList.next.next = { value: 3 };
newList.next.next.next = { value: 4 };

///Добавление нового элемента в список
newList = {value: "new item", next: newList};

///Удаление элмента из списка
newList.next = newList.next.next;

///Разделение
let secondNewList = newList.next.next;
newList.next.next = null;

///Объединение
newList.next.next = secondNewList;
*/

/*
function sumTo(n) {
    let sum = 0;
    let i = 0;

    while (i <= n) {
        sum += i;
        i++;
    }

    return sum;
}

function sumTo(n) {
    if (n === 1) {
        return n;
    } else {
        return n + sumTo(n - 1);
    }
}

function sumTo(n) {
    return n * (n + 1) / 2;
}

console.log(sumTo(1));
console.log(sumTo(2));
console.log(sumTo(3));
console.log(sumTo(100));


function factorial(n) {
    return (n !== 1) ? factorial(n - 1) * n : n;
}

console.log(factorial(1));
console.log(factorial(3));
console.log(factorial(5));
console.log(factorial(12));
console.log(factorial(25));


function fib(n) {
    return (n <= 1) ? n : fib(n - 1) + fib(n - 2);
}

function fib(n) {
    let a = 1,
    b = 1;

    for (let i = 3; i <= n; i++) {
        let c = a + b;

        a = b;
        b = c
    }

    return b;
}

console.log(fib(3)); 
console.log(fib(7)); 
console.log(fib(12));
*/


/*
let list = { 
    value: 1, 
    next: {
        value: 2, 
        next: {
            value: 3, 
            next: {
                value: 4, 
                next: null
            }
        }
    }
};

function printList(list) {
    let obj = list;

    while (obj) {
        console.log(obj.value);
        obj = obj.next;
    }
}

printList(list);

function printList(list) {
    console.log(list.value);

    if (list.next) {
        printList(list.next);
    }
}

printList(list);


let list = {
    value: 1, next: {
        value: 2, next: {
            value: 3, next: {
                value: 4, next: null
            }
        }
    }
};

function printReverseLists(list) {
    if (list.next) {
        printReverseLists(list.next);
    }

    console.log(list.value);
}

printReverseLists(list);

function printReverseList(list) {
    let obj = list;
    let arr = [];

    while (obj) {
        arr.push(obj.value);
        obj = obj.next;
    }

    for (let i = arr.length; i >= 0; i--) {
        console.log(arr[i]);
    }
}
*/



///Остаточные параметры и оператор расширения



/*
function sum(a ,b) {
    return a + b;
}

console.log(sum(1, 2, 3, 4, 5));


function sumAll(...args) { ///args — имя массива
    let sum = 0;

    for (let arg of args) sum += arg;

    return sum;
}

console.log(sumAll(1));
console.log(sumAll(1, 2));
console.log(sumAll(1, 2, 3));


function showName(firstName, lastName, ...titles) {
    console.log(firstName + '' + lastName);

    console.log(titles[0]);
    console.log(titles[1]);
    console.log(titles.length);
}

showName("Юлий", "Цезарь", "Консул", "Император");


function showName() {
    console.log(arguments.length);
    console.log(arguments[0]);
    console.log(arguments[1]);
    /// Объект arguments можно перебирать
    /// for (let arg of arguments) console.log(arg);
}

showName("Юлий", "Цезарь");
showName("Илья");


function f() {
    let showArg = () => console.log(arguments[0]);
    showArg(2);
}

f(1)


console.log( Math.max(3, 5, 1) );


let arr = [3, 5, 1];

console.log(Math.max(...arr));


let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];

console.log(Math.max(...arr1, ...arr2));
console.log(Math.max(1, ...arr1, ...arr2, 25));

let merged = [0, ...arr1, 2, ...arr2];

console.log(merged);


let str = 'Hello';

console.log([...str]);
console.log(Array.from(str));


function sayHi() {
    var phrase = "Hello!";

    console.log(phrase);
}

sayHi();

///console.log(phrase); /// Ошибка: phrase не определена


if (true) {
    var test = true;
}

console.log(test);


function sayHi() {
  if (true) {
    var phrase = "Привет";
  }

  console.log(phrase); // срабатывает и выводит "Привет"
}

sayHi();
console.log(phrase)


var user = "Pete";

var user; // ничего не делает, переменная объявлена раньше
/// ...нет ошибки

alert(user); // Pete

function sayHi() {
  phrase = "Привет";

  console.log(phrase);

  var phrase;
}
sayHi();

function sayHi() {
  var phrase;

  phrase = "Привет";

  console.log(phrase);
}
sayHi();

function sayHi() {
  phrase = "Привет"; /// (*)

  if (false) {
    var phrase;
  }

  console.log(phrase);
}
sayHi();

function sayHi() {
    console.log(phrase);

    var phrase = "Hello";
}

function sayHi() {
    var phrase;

    console.log(phrase);

    phrase = "Hello";
}

sayHi();
*/

