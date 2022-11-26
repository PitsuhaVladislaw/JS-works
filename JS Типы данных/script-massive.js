///numbers 

/* 
let arr = new Array();

let fruits = ["apples", "oranges", "sle"];

alert(fruits[0]);
alert(fruits[1]);
alert(fruits[2]);

fruits[3] = 'lemon';

alert(fruits.length);

let dates = ["apples", "documents", { name: "John Bush", age: 30 }, true, function() { alert('Hello') }]

alert(dates[2].name);
alert(dates[3]);

alert(dates[dates.length - 1]);

alert(fruits.at(0));


let fruits = ["Apple", "Banana", "Lemon"];

fruits.push('Orange');

alert(fruits);

fruits.shift();

alert(fruits);

fruits.unshift("Kiwi");

alert(fruits);

fruits.pop();

alert(fruits);

let fruits = ["Banana"];

let arr = fruits;

alert(arr === fruits);

arr.push("Apple");

alert(fruits);

fruits.shift();

alert(fruits);


let fruits = ["apply", "banana", "orange", "kiwi", "lemon"];

alert(fruits);

alert(fruits.length);

alert(fruits.shift());

alert(fruits);

alert(fruits.length);


let arr = ["apply", "banana", "orange"];

for (let i = 0; i < arr.length; i++) {
    alert(arr[i]);
}


for (let fruit of fruit) {
    alert(fruit);
}

let user = {
    name: "John",
    age: 30
};

for (let key in user) {
    alert(user[key]);

    alert(key);
}

let arr = ["apply", "banana", "orange"];

for (let key in arr) {
    alert(arr[key]);
}

let fruits = new Array("apply", "banana", "orange");

alert(fruits);

fruits.pop();

alert(fruits.length);


let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

alert(matrix[1][1]);
alert(matrix[0][2]);
alert(matrix[1][2]);


let array = [1, 2, 3];

alert(array);
alert(String(array) === '1,2,3');


///Задачи
let fruits = ["Apply", "Banana", "Lemon"];

let shoppingCart = fruits;
shoppingCart.push("Orange");

alert(shoppingCart.length);


let styles = ["Jazz", "Blue"];

styles.push("Rock");

alert(styles);

styles[Math.floor((styles.length - 1) / 2)] = "Classic";

alert(styles);

styles.shift()

alert(styles);

styles.unshift("Rap", "Reg");

alert(styles);

let arr = ["a", "b"];

let shoppingCart = arr;
shoppingCart.push("c");

alert(shoppingCart);

function sunInput() {
    let numbers = [];

    while (true) {
        let number = prompt("Write your number", "0");

        if (!isFinite(number) || number === '' || number === null) break;

        numbers.push(+number);
    }

    let sum = 0;

    for (let val of numbers) {
        sum += val;
    }

    return sum;
}

alert(sunInput());


function getMaxSubSum(massive) {
    let maxSum = 0;
    let examSum = 0;

    for (let num of massive) {
        examSum += num;

        maxSum = Math.max(maxSum, examSum);

        if (examSum < 0) {
            examSum = 0;
        }
    }

    return maxSum;
}

alert(getMaxSubSum([-1, 2, 3, -9]));
alert(getMaxSubSum([2, -1, 2, 3, -9]));
alert(getMaxSubSum([-1, 2, 3, -9, 11]));
alert(getMaxSubSum([-2, -1, 1, 2]));
alert(getMaxSubSum([100, -9, 2, -3, 5]));
alert(getMaxSubSum([1, 2, 3])); 
*/


///Методы массивов
/*
let arr = ["I", "go", "home"];

delete arr[1];

alert(arr[1]);

alert(arr.length);
*/

/* 
let arr = ["I", "go", "home"];

arr.splice(1, 1);

alert(arr);


let arr = ["I", "go", "home", "homework", "javascript"];

arr.splice(1, 3, "dancing", "programming");

alert(arr);


let arr = ["e", "t", "h", "a"];

alert(arr.slice(1, 3));
alert(arr.slice(-3));


let arr = [1, 2];

alert(arr.concat([3, 4]));
alert(arr.concat([3, 4], [5, 6]));
alert(arr.concat([3, 4, 5, 6], 7, 8));

let arrayLike = {
    name: "Something",
    length: 1
};

alert(arr.concat(arrayLike));

let arrayExam = {
    0: "Something",
    1: "Anything else",
    [Symbol.isConcatSpreadable]: true,
    length: 2
};

alert(arr.concat(arrayExam));


["TV", "Laptop", "Apply"].forEach(alert);

["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
    alert(`${item} имеет позицию ${index} в ${array}`);
});


let arr = [0, 1, false];

alert(arr.indexOf(0));
alert(arr.indexOf(false));
alert(arr.indexOf(null));

alert(arr.includes(1));

const ars = [NaN];

alert(ars.indexOf(NaN));
alert(ars.includes(NaN));


let users = [
    {id: 1, name: "Вася"},
    {id: 2, name: "Петя"},
    {id: 3, name: "Маша"}
];

let user = users.find(item => item.id == 2);

alert(user.name);

let user2 = users.filter(item => item.id < 4);

alert(user2.length);



let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length)

alert(lengths);


let numbers = [9, 12, 2, 5];

numbers.sort();

alert(numbers);


function compare() {
    if (a > b) return 1;
    if (a === b) return 0;
    if (a < b) return -1;
}

function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a === b) return 0;
    if (a < b) return -1;
}

alert(numbers.sort(compareNumeric));


[1, -2, 15, 2, 0, 8].sort(function(a, b) {
    alert(a + '<>' + b);
});


let arr = [1, 15, 6];

arr.sort(function(a, b) { return a - b });

alert(arr);


arr.sort( (a, b) => a - b);


let arr = [1, 2, 3, 4, 5];

arr.reverse();

alert(arr);


let names = 'Vas, Mike, Kirin, Saske';

let arr = names.split(', ');

alert(arr);

for (let name of arr) {
    alert(`${name} will get the message`);
}


let ars = 'Vova, Kek, Saske, Nuram'.split(', ', 2);

alert(ars);

let str = 'test';

alert(str.split(''));

let massive = ['Vas', 'Mike', 'Kirin', 'Saske'];

let strs = massive.join(';');

alert(strs);


let arr = [1, 2, 3, 4, 5];

let result = arr.reduce( (sum, current) => sum + current, 0);

alert(result);


let numbers = [1, 3, 5, 9, 2];

let mul = numbers.reduce( (mul ,current) => mul * current, 2);

alert(mul);

alert(typeof {});
alert(typeof []);

alert(Array.isArray({}));
alert(Array.isArray([]));


arrs.find(func, thisArg);
arrs.filter(func, thisArg);
arrs.map(func, thisArg);



let army = {
    minAge: 18, 
    maxAge: 27, 

    canJoin(user) {
        return user.age >= this.minAge && user.age <= this.maxAge;
    }
}

let users = [
    {name: 'John', age: 16},
    {name: 'Mike', age: 20},
    {name: 'Pasha', age: 23},
    {name: 'Nik', age: 30}
];

let soldiers = users.filter(army.canJoin, army);
///let soldiers = users.filter(user => army.canJoin(user)); Так тоже можно писать

alert(soldiers.length);
alert(soldiers);
alert(Array.isArray(users));
alert(soldiers[0]);
alert(soldiers[1]); 


function camelize(str) {
    let massive = str.split('-');

    let elemMas = massive.map(
        function(item, index) {
            if (index == 0) {
                return item;
            }

            return item[0].toUpperCase() + item.slice(1);
        }
    );

    return elemMas.join('');
};

alert(camelize("background-color"));
alert(camelize("list-style-image"));
alert(camelize("-webkit-transition"));


let arr = [5, 3, 8, 1];

function filterRange(arr, a, b) {
    let result = arr.filter(
        function(item) {
            return a <= item && item <= b;
        }
    );

    return result;
};

let filtered = filterRange(arr, 1, 4);

alert(filtered);

alert(arr);


let arr = [5, 3, 8, 1];

function filterRangeInPlace(arr, a , b) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= a || arr[i] >= b) {
            arr.splice(i, 1);
        }
    }
};

filterRangeInPlace(arr, 1, 4); /// удалены числа вне диапазона 1..4

alert( arr );

let arr = [5, 2, 1, -10, 8];

/*
function sortMasRes(arr) {
    let order = arr.sort();

    return order.reserve();
}

function sortMas(arr) {
    let result = arr.sort(
        function(a, b) {
            return b - a;
        }
    );

    return result;
};


alert(sortMas(arr));

let arr = ["HTML", "JavaScript", "CSS"];

function copySorted() {
    let massive = arr.concat();

    alert("Arr's copied at Massive, there're results");

    return massive.sort();
}

let sorted =  copySorted(arr);

alert(sorted);
alert(arr);


function Calculator() {
    this.methods = {
        '+': function(a, b) {
            return a + b;
        },
        '-': function(a, b) {
            return a - b;
        }
    };

    this.calculate = function(str) {
        let massive = str.split(' ');

        let a = +massive[0];
        let b = +massive[2];
        let operand = massive[1];

        if (isNaN(0) || isNaN(2) || !this.methods[operand]) {
            return NaN;
        }

        return this.methods[operand](a, b);
    };

    this.addMethod = function(name, func) {
        this.methods[name] = func;
    };
};

let calc = new Calculator();

alert(calc.calculate('7 + 2'));
alert(calc.calculate('25 + 17'));


let powerCalc = new Calculator();

powerCalc.addMethod('/', (a, b) => a / b);
powerCalc.addMethod('*', (a, b) => a * b);
powerCalc.addMethod('**', (a, b) => a ** b);

alert(powerCalc.calculate("17 + 45"));
alert(powerCalc.calculate("20 * 7"));
alert(powerCalc.calculate("256 / 16"));
alert(powerCalc.calculate("6 ** 9"));

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [vasya, petya, masha];

let names = users.map(
    function(user) {
        return user.name;
    }
);

alert(names);


let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [ vasya, petya, masha ];

let usersMapped = users.map(
    function(item) {
        return {
            fullName: `${item.name} ${item.surname}`,
            id: item.id
        };
    }
);

alert(usersMapped[0].id);
alert(usersMapped[0].fullName);


let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let arr = [vasya, petya, masha];

function sortByAge(users) {
    let results = users.sort(
        function(a, b) {
            if (a.age > b.age) {
                return 1;
            }

            return -1;
        }
    );

    return results;
};

sortByAge(arr);

alert(arr[0].name);
alert(arr[1].name);
alert(arr[2].name);


function shuffle(array) {
    let result = array.sort(
        function() {
            return Math.random() - 0.5;
        }
    );

    return result;
};

let values = {
    '123': 0,
    '213': 0,
    '312': 0,
    '132': 0,
    '231': 0,
    '321': 0
};

for (let i = 0; i < 1000; i++) {
    let arr = [1, 2, 3];
    shuffle(arr);
    values[arr[0].join('')]++;
};


let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [vasya, petya, masha];

function getAverageAge(massive) {
    let results = massive.reduce(function(preValue, curValue) {
        return preValue + curValue.age;
    }, 0) / massive.length; 

    return results;
}

alert(getAverageAge(arr))


function unique(arr) {
    let massive = [];

    arr.find(function(item) {
        if(!massive.includes(item)) {
            massive.push(item);
        }
    });

    return massive;
}

let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

alert(unique(strings));


function groupById(arr) {
    let result = arr.reduce(
        function(array, dates) {
            array[dates.id] = dates;
            return array;
        }
    );

    return result;
};

let users = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31}
];


let usersById = groupById(users);

alert(usersById['john']);
*/


///Перебираемые объекты

/*
let range = {
    from: 1,
    to: 5
};

range[Symbol.iterator] = function() {
    return {
        current: this.from,
        last: this.to,

        next() {
            if (this.current <= this.last) {
                return {
                    done: false,
                    value: this.current++
                };
            } else {
                return { done: true };
            }
        }
    };
}; 

for (let num of range) {
    alert(num);
};

let range = {
    from: 1,
    to: 5,

    [Symbol.iterator]() {
        this.current = this.from;
        return this;
    },

    next() {
        if (this.current <= this.to) {
            return {
                done: false,
                value: this.current++
            };
        } else {
            return { done: true };
        }
    }
};

for (let num of range) {
    alert(num);
}


for (let char of 'test') {
    alert(char);
}

for (let sym of ':) char') {
    alert(sym);
}


let str = 'Hello';

let iterator = str[Symbol.iterator]();

while (true) {
    let result = iterator.next();
    
    if(result.done) break;
    alert(result.value);
}


let arrayLike = {
    0: "Hello",
    1: "World",

    length: 2
};

///for (let item of arrayLike) {
///    alert(item);
///}

let arr = Array.from(arrayLike);

///alert(arr);
///alert(arr[0]);
///alert(arr.length);
///arr.push("Hello");
///arr.push("World");
///alert(arr)
///alert(arr.unshift());
alert(arr.pop());
alert(arr);


let range = {
    from: 1,
    to: 5
};

range[Symbol.iterator] = function() {
    return {
        current: this.from,
        last: this.to,
        
        next() {
            if(this.current <= this.last) {
                return {
                    done: false,
                    value: this.current++
                };
            } else {
                return {
                    done: true
                };
            }
        }
    };
};

for (let item of range) {
    alert(item);
};

let arr = Array.from(range);

alert(arr);

let str = '𝒳😂';

let chars = Array.from(str);

alert(chars[0]);
alert(chars[1]);
alert(chars.length);


let newNum = Array.from(range,
    function(num) {
        return num * num;
    }
);

alert(newNum);

let str = '𝒳😂𩷶';

let chars = [];
for (let char of str) {
    chars.push(char);
};

alert(chars);


function slice(str, start, end) {
    return Array.from(str).slice(start, end).join('');
};

alert(slice(str, 1, 3));

alert(str.slice(1, 3));
*/



///Map и Set
/*
let map = new Map();
 
map.set('1', 'str1'); // строка в качестве ключа
map.set(1, 'num1'); // цифра как ключ
map.set(true, 'bool1'); // булево значение как ключ

alert(map.get('1'));
alert(map.get(1));

alert(map.size);


let john = { name: 'John' };

/// давайте сохраним количество посещений для каждого пользователя
let visitsCountMap = new Map();

/// объект john - это ключ для значения в объекте Map
visitsCountMap.set(john, 123);

alert(visitsCountMap.get(john));

alert(visitsCountMap.size);


let john = { name: "John", age: 30 };
let ben = { name: "Ben", age: 32 };

let visitsCountObj = {};

visitsCountObj[ben] = 234;
visitsCountObj[john] = 123;

alert(visitsCountObj);

alert(visitsCountObj[ben]);
alert(visitsCountObj[john]);

alert(visitsCountObj["object Object"]);

map.set('1', '123')
.set(1, '568')
.set(true, 'bool1');


let recipeMap = new Map([
    ["огурец", 500],
    ["помидор", 350],
    ["лук",    50]
]);

// перебор по ключам (овощи)
for (let vegetable of recipeMap.keys()) {
    alert(vegetable);
}

// перебор по значениям (числа)
for (let amount of recipeMap.values()) {
    alert(amount);
} 

for (let entry of recipeMap) {
    alert(entry);
}


recipeMap.forEach(
    function(value, key, map) {
        alert(`${key}: ${value}`);
    }
);


let map = new Map([
    ['1', 'str1'],
    [1, 'num1'],
    [true, 'bool1']
]);

alert(map.get('1'));
alert(map.get(1));


let obj = {
    name: "John",
    age: 30
};

let user = new Map(Object.entries(obj));

alert(user.get('name'));


let prices = Object.fromEntries([
    ['banana', 1],
    ['orange', 2],
    ['meat', 4]
]);

///prices = { banana: 1, orange: 2, meat: 4 }

alert(prices.orange);
alert(prices.meat);


let map = new Map();

map.set('banana', 1);
map.set('orange', 2);
map.set('meat', 4);

let obj = Object.fromEntries(map.entries()) /// создаём обычный объект (*)

/// готово!
/// obj = { banana: 1, orange: 2, meat: 4 }
alert(obj.banana);


let set = new Set();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

set.add(john);
set.add(pete);
set.add(mary);
set.add(pete);
set.add(mary);
set.add(john);

alert(set.size);

for (let user of set) {
    alert(user.name);
}


let sets = new Set(["orange", "apple", "banana"]);

for (let value of sets) alert(value);

sets.forEach(
    function(value, valueAgain, sets) {
        alert(value);
    }
);


///Задачи

function unique(arr) {
    let massive = new Set(arr); 

    alert(massive.size);

    return Array.from(massive);
};

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert(unique(values));


function aclean(arr) {
    let mas = new Map();

    for (let word of arr) {
        let sortWord = word.toLowerCase().split("").sort(
            function(a, b) {
                if (a > b) return 1;
                if (a === b) return 0;
                if (a < b) return -1;
            }
        ).join("");

        mas.set(sortWord, word);
    }

    let result = mas.values();

    return Array.from(result);
};

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert(aclean(arr));


function aClean(arr) {
    let obj = {};

    for (let i = 0; i < arr.length; i++) {
        let sortWord = arr[i].toLowerCase().split("").sort(
            function(a, b) {
                if (a < b) return -1;
                if (a === b) return 0;
                if (a > b) return 1;
            }
        ).join("");

        obj[sortWord] = arr[i];
    }

    return Object.values(obj);
};

alert(aClean(arr));


let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());

keys.push("more");

alert(keys); 

function unique(arr) {
    let massive = new Set(arr);

    alert(massive.size);

    return Array.from(massive);
};

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert(unique(values));


let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function aclean(arr) {
    let mass = new Map();

    for (let word of arr) {
        let sortWord = word.toLowerCase().split("").sort(
            function(a, b) {
                if (a < b) return -1;
                if (a === b) return 0;
                if (a > b) return 1;
            }
        ).join("");

        mass.set(sortWord, word);
    }

    let result = mass.values();

    return Array.from(result);
};

alert(aclean(arr));

function aClean(arr) {
    let obj = {};

    for (let i = 0; i < arr.length; i++) {
        let sortWord = arr[i].toLowerCase().split("").sort(
            function (a, b) {
                if (a > b) return 1;
                if (a === b) return 0;
                if (a < b) return -1;
            }
        ).join("");

        obj[sortWord] = arr[i];
    }

    return Object.values(obj);
};

alert(aClean(arr))


let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());

keys.push("more");

alert(keys);
*/


///WeakMap и WeakSet
/*
let john = {
    name: "John"
};

/// объект доступен, переменная john -- это ссылка на него

/// перепишем ссылку
john = null;

/// объект будет удалён из памяти

let pete = { name: "Pete" };

let array = [pete];

pete = null;

/// объект john хранится в массиве, поэтому он не будет удалён сборщиком мусора
/// мы можем взять его значение как array[0]

let masha = { name: "Masha" };

let map = new Map();
map.set(masha, '....');

masha = null;


let weakMap = new WeakMap();

let obj = {};

weakMap.set(obj, "ok"); /// работает (объект в качестве ключа)

alert(weakMap.get(obj));

/// нельзя использовать строку в качестве ключа
weakMap.set("test", "Whoops"); ///Ошибка, потому что "test" не объект

alert(weakMap.get("test"));

let steve = { name: "Steve" };

let weakMapSteve = new WeakMap();
weakMapSteve.set(steve, "....");

steve = null;

alert(weakMapSteve.get(steve));/// перезаписываем ссылку на объект

/// объект john удалён из памяти!

weakMap.set(john, "secret documentary");
/// если john умрёт, "секретные документы" будут автоматически уничтожены


/// 📁 visitsCount.js
let visitsCountMap = new Map(); /// map: пользователь => число визитов

function countUser(user) {
    let count = visitsCountMap.get(user) || 0;
    visitsCountMap.set(user, count + 1);
};

/// 📁 main.js

let john = { name: "John" };

countUser(john); ///ведём подсчёт посещений

/// пользователь покинул нас

john = null;


/// 📁 visitsCount.js
let visitsCountMap = new WeakMap(); ///map: пользователь => число визитов

/// увеличиваем счётчик
function countUser(user) {
    let count = visitsCountMap.get(user) || 0;
    visitsCountMap.set(user, count + 1);
};


/// 📁 cache.js
let cashe = new Map();

/// вычисляем и запоминаем результат
/*
function process(obj) {
    if (!cashe.has(obj)) {
        let result = /* тут какие-то вычисления результата для объекта */ /* obj;

        cashe.set(obj, result);
    }

    return cashe.get(obj);
}

/// Теперь используем process() в другом файле:

/// 📁 main.js
let obj = {/* допустим, у нас есть какой-то объект *//*};

let result1 = process(obj);

/// ...позже, из другого места в коде...

let result2 = process(obj); // ранее вычисленный результат взят из кеша

// ...позже, когда объект больше не нужен:
obj = null;

alert(cache.size); // 1 (Упс! Объект всё ещё в кеше, занимает память!)

/// 📁 cache.js
let cache = new WeakMap();

///вычисляем и запоминаем результат
function process(obj) {
    if(!cache.has(obj)) {
        let result = obj;

        cache.set(obj, result);
    }

    return cache.get(obj);
};

/// 📁 main.js
let obj = {
    banana: 500
};

let result1 = process(obj);
alert(result1);
let result2 = process(obj);
alert(result2);

obj = null;

alert(result1);

/// Нет возможности получить cache.size, так как это WeakMap,
/// но он равен 0 или скоро будет равен 0
/// Когда сборщик мусора удаляет obj, связанные с ним данные из кеша тоже удаляются

let visitedSet = new WeakSet();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

visitedSet.add(john); /// John заходил к нам
visitedSet.add(pete); /// потом Pete
visitedSet.add(john); /// John снова

/// visitedSet сейчас содержит двух пользователей

/// проверим, заходил ли John?
alert(visitedSet.has(john));

alert(visitedSet.has(mary));

john = null; /// структура данных visitedSet будет очищена автоматически

///Задачи

let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes", from: "John"},
    {text: "See you soon", from: "Alice"}
];

let readMes = new WeakSet();

readMes.add(messages[0]);
readMes.add(messages[1]);

alert(`The message is ${readMes.has(messages[0])}`);
alert(`The message is ${readMes.has(messages[2])}`);

messages.shift();


let messages = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" }
];

let readMessage = new WeakMap();

readMessage.set(messages[0], new Date (2017, 1, 2));
readMessage.set(messages[1], new Date (2020, 2, 12));

alert(readMessage.get(messages[0]))
alert(readMessage.get(messages[1]))



function unique(arr) {
    let arrSet = new Set(arr);

    alert(arrSet.size);

    return Array.from(arrSet);
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert(unique(values));


function aclean(arr) {
    let massive = new Map();

    for (let word of arr) {
        let sortedWord = word.toLowerCase().split("").sort(
            function(a, b) {
                if (a < b) return -1;
                if (a == b) return 0;
                if (a > b) return 1;
            }
        ).join("");

        massive.set(sortedWord, word);
    }

    let result = massive.values();

    return Array.from(result);
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert(aclean(arr));

function aClean(arr) {
    let obj = {};

    for (let i = 0; i < arr.length; i++) {
        let sortedWord = arr[i].toLowerCase().split("").sort(function(a, b) {
            if (a > b) return 1;
            if (a == b) return 0;
            if (a < b) return -1;
        }).join("")

        obj[sortedWord] = arr[i];       
    }

    return Object.values(obj);
}

alert(aClean(arr));


let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());

keys.push("more");

alert(keys);
*/ 


///Object.keys, values, entries
/* 
let user = {
    name: "Mike",
    age: 25
};

///Object.keys(user) = ["name", "age"]
///Object.values(user) = ["John", 30]
///bject.entries(user) = [ ["name","John"], ["age",30] ]

for (let value of Object.values(user)) {
    alert(value);
} 

for (let value of Object.keys(user)) {
    alert(value);
}

for (let value of Object.entries(user)) alert(value);



let prices = {
    banana: 1,
    orange: 2,
    meat: 4
};

let doublePrices = Object.fromEntries(
    Object.entries(prices).map(function([key, value]) {
        return [key, value * 2];
    })
);

alert(doublePrices.banana);
alert(doublePrices.orange);
alert(doublePrices.meat);


let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

function sumSalaries(arr) {
    let sum = 0;
    
    let massNum = Object.values(arr);

    for (let value of massNum) {
        sum += value;

        if (sum === 0 || sum === '') {
            return `Sum is ${undefined}`;
        }
    }

    return sum
}

alert(sumSalaries(salaries));


let userJohn = {
    name: "John",
    age: 30
};

function count(arr) {
    return Object.keys(arr).length;
}

alert(count(userJohn));
*/



///Деструктурирующее присваивание
/*
/// у нас есть массив с именем и фамилией
let arr = ["Ylya", "Kantor"];
/// деструктурирующее присваивание
/// записывает firstName = arr[0]
/// и surname = arr[1]
let [firstName, surname] = arr;

alert(firstName);
alert(surname);


let [firstName, surname] = "Mary Tailor".split(' ');

alert(firstName);
alert(surname);


/// let [firstName, surname] = arr;
let firstName = arr[0];
let surname = arr[1];

let [a, b, c] = 'abc';
let [one, two, three] = new Set([1, 2, 3]);


let user = {};
[user.name, user.surname] = "Ylya Marlow".split(' ');

alert(user.name);
alert(user.surname);

let user = {
    name: "Mike",
    age: 27
};

for (let [key, value] of Object.entries(user)) {
    alert(`${key}:${value}`);
}


let guest = "Jane";
let admin = "Connor";

/// Давайте поменяем местами значения: сделаем guest = "Pete", а admin = "Jane"
[guest, admin] = [admin, guest];

alert(`${guest} ${admin}`);


let [name1, name2] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

alert(name1);
alert(name2);
/// Дальнейшие элементы нигде не присваиваются


let [name1, name2, ...titles] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
/// теперь titles = ["Consul", "of the Roman Republic"]

let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

alert(rest[0]);
alert(rest[1]);
alert(rest.length);


let [firstName, surname] = [];

alert(firstName);
alert(surname);


/// значения по умолчанию
let [name = "Guest", surname = "Anonymous"] = ["Julius"];

alert(name);    /// Julius (из массива)
alert(surname); /// Anonymous (значение по умолчанию)


let [name = prompt('name?'), surname = prompt('surname?')] = ['Jullious'];

alert(name);
alert(surname);


let {var1, var2} = {var1:…, var2:…}

let options = {
    title: "Menu",
    width: 100,
    height: 200
};

let {title, width, height} = options;

/// изменён порядок в let {...}
let {height, width, title} = { 
    title: "Menu", 
    height: 200, 
    width: 100 
}

alert(title);
alert(width);
alert(height);

let options = {
    title: "Menu",
    width: 100,
    height: 200
};

/// { sourceProperty: targetVariable }
let {width: w, height: h, title} = options;

/// width -> w
/// height -> h
/// title -> title

alert(title);
alert(w);
alert(h);


let options = {
    title: "Menu"
};

let {width = 100, heigth: h = 200, title} = options;

alert(title);
alert(width);
alert(h);

let options = {
    title: "Menu"
};

let {width = prompt("width?"), title = prompt("title?")} = options;

alert(width);
alert(title);


let options = {
  title: "Menu"
};

let {width: w = 100, height: h = 200, title} = options;

alert(title);  /// Menu
alert(w);      /// 100
alert(h);


let options = {
    title: "Menu",
    height: 100,
    width: 200
};

/// взять только title, игнорировать остальное
let {title} = options;

alert(title); /// Menu


let options = {
    title: "Menu",
    height: 200,
    width: 100
};

/// title = свойство с именем title
/// rest = объект с остальными свойствами
let {title, ...rest} = options;

/// сейчас title="Menu", rest={height: 200, width: 100}
alert(rest.height); /// 200
alert(rest.width); ///100


let title, width, height;

/// ошибка будет в этой строке
{title, width, height} = {title: "Menu", width: 200, height: 100};

let title, width, height;

({title, width, height} = {title: "Menu", width: 200, height: 100});

alert(title);

let options = {
    size: {
        width: 100, 
        heigth: 250
    },
    items: ["Cake", "Donut"],
    extra: true
};

/// деструктуризация разбита на несколько строк для ясности
let {
    size: { /// положим size сюда
        width: w,
        heigth: h
    },
    items: [item1, item2], /// добавим элементы к items
    title = "Menu" /// отсутствует в объекте (используется значение по умолчанию)
} = options;

alert(title);
alert(w);
alert(item1);
alert(h);
alert(item2);


function showMenu(title = "menu", width = 200, height = 100, item = []) {
    /// ...
};

/// undefined там, где подходят значения по умолчани

showMenu("My menu", undefined, undefined, ["Item1", "Item2"])


let options = {
    title: "My menu",
    items: ["Item1", "Item2"]
};

/// ...и она немедленно извлекает свойства в переменные
function showMenu({title = "Undefined", width: w = 100, height = 200, items = []}) {
    /// title, items – взято из options,
    /// width, height – используются значения по умолчанию     
    alert(`${title} ${w} ${height}`);
    alert(items);
};

showMenu(options);


let options = {
    title: "My menu",
    items: ["Item1", "Item2"]
};

function showMenu({
    title = "Undefined",
    width: w = 100, //// width присваиваем в w
    height: h = 200, ///height присваиваем в h
    items = [item1, item2] /// первый элемент items присваивается в item1, второй в item2
}) {
    alert(`${title} ${w} ${h}`); /// My Menu 100 200
    alert(item1); /// Item1
    alert(item2); /// Item2
}

showMenu(options);

function({
  incomingProperty: varName = defaultValue
  ...
})

showMenu({}); // ок, все значения - по умолчанию

showMenu(); // так была бы ошибка

function showMenu({ title = "Menu", width = 100, height = 200} = {}) {
    alert(`${title} ${width} ${height}`);
}


///Задачи
let user = {
    name: "Mike",
    years: 27
};

let {name, years: age, isAdmin = false} = user;

alert(name);
alert(age);
alert(isAdmin);


let salaries = {
    "John": 100,
    "Mary": 300,
    "Pete": 250
};

function topSalary(salaries) {
    let max = 0;
    let nameValue = null;

    for (let [name, value] of Object.entries(salaries)) {
        if (max < value) {
            max = value;
            nameValue = name;
        }
    }

    return nameValue;
}

alert(topSalary(salaries));


let user = {}; /// пользователь без свойства "address"

alert(user.address.street); /// Ошибка!


/// document.querySelector('.elem') равен null, если элемента нет
let html = document.querySelector('elem').innerHTML; /// ошибка, если он равен null

let user = {}

alert(user.address ? user.address.street : undefined);

let html = document.querySelector('.elem') ? document.querySelector('.elem').innerHTML : null;


let user = {}; /// у пользователя нет адреса

alert(user.address ? user.address.street ? user.address.street.name : null : null);

let user = {};

alert(user.address && user.address.street && user.address.street.name ); ///undefined


let user = {};

alert(user?.address?.street);


let html = document.querySelector('.elem').innerHTML;


let users = null;

alert(users?.address);
alert(users?.address.name);


let user = null;
let s = 0;

user?.sayHi(s++);

alert(s);


let userAdmin = {
    admin() {
        alert("I'm admin");
    }
};

let userGuest = {};

userGuest.admin?.();

userAdmin.admin?.();


let key = "firstName";

let user1 = {
    firstName: "John"
};

let user2 = null;

alert(user1?.[key]);
alert(user2?.[key]);

delete user?.name;



///Data
let now = new Date();

alert(now); /// показывает текущие дату и время


/// 0 соответствует 01.01.1970 UTC+0
let Jan01_1970 = new Date(0);

alert(Jan01_1970);

/// теперь добавим 24 часа и получим 02.01.1970 UTC+0
let Jan02_1970 = new Date(24 * 3600  * 1000);

alert(Jan02_1970)


let Dec31_1969 = new Date(-24 * 3600 * 1000);

alert(Dec31_1969);


let date = new Date("2022-09-09");

alert(date);
/// Время не указано, поэтому оно ставится в полночь по Гринвичу и
/// меняется в соответствии с часовым поясом места выполнения кода
/// Так что в результате можно получить
/// Thu Jan 26 2017 11:00:00 GMT+1100 (восточно-австралийское время)
/// или
/// Wed Jan 25 2017 16:00:00 GMT-0800 (тихоокеанское время)


new Date(2011, 0, 1, 0, 0, 0, 0); /// 1 Jan 2011, 00:00:00
new Date(2011, 0, 1); /// то же самое, так как часы и проч. равны 0

let date = new Date(2011, 0, 1, 2, 3, 4, 567);

alert(date);

let date = new Date();

alert(date.getHours());

alert(date.getUTCHours());

alert(date.getTime());
alert(date.getTimezoneOffset());


let today = new Date();

today.setHours(0);
alert(today);

today.setHours(0, 0, 0, 0);
alert(today);


let newDate = new Date(2013, 0, 32);

alert(newDate);

let date = new Date(2013, 1, 28);

date.setDate(date.getDate() + 2);
alert(date);


let dates = new Date();
dates.setSeconds(date.getSeconds() + 70);

alert(dates);


let date = new Date(2016, 0, 2); /// 2 Jan 2016

date.setDate(1); /// задать первое число месяца
alert(date);

date.setDate(0); /// первый день месяца -- это 1, так что выводится последнее число предыдущего месяца
alert(date); /// 31 Dec 2015


let date = new Date();

alert(+date);


let start = new Date(); /// начинаем отсчёт времени

/// выполняем некоторые действия
for (let i = 0; i < 100000; i++) {
    let doSomething = i * i * i;
}

let end = new Date(); /// заканчиваем отсчёт времени

alert(`Cycle is worked for ${end - start} milliseconds`);


let start = Date.now(); // количество миллисекунд с 1 января 1970 года
alert(start);

for (let i = 0; i < 100000; i++) {
    let doSomething = i * i * i;
}

let end = Date.now();

alert(`Cycle is worked for ${end - start} milliseconds`);


/// есть date1 и date2, какая функция быстрее вернёт разницу между ними в миллисекундах?
function diffSubtract(date1, date2) {
  return date2 - date1;
}

/// или
function diffGetTime(date1, date2) {
  return date2.getTime() - date1.getTime();
}

function bench(func) {
  let date1 = new Date(0);
  let date2 = new Date();

  let start = Date.now();

  for (let i = 0; i < 100000; i++) func(date1, date2);

  return Date.now() - start;
}

alert( 'Время diffSubtract: ' + bench(diffSubtract) + 'мс' );
alert( 'Время diffGetTime: ' + bench(diffGetTime) + 'мс' );


function diffSubtract(date1, date2) {
    return date2 - date1;
}

function diffGetTime(date1, date2) {
    let result = date2.getTime() - date1.getTime();
    
    return result;
}

function bench(func) {
    let date1 = new Date(0);
    let date2 = new Date();

    let start = Date.now()

    for (let i = 0; i < 100000; i++) {
        return func(date1, date2);
    }

    return Date.now() - start;
}

let time1 = 0;
let time2 = 0

// bench(diffSubtract) и bench(diffGetTime) поочерёдно запускаются 10 раз
for (let i = 0; i < 10; i++) {
    time1 += bench(diffSubtract);
    time2 += bench(diffGetTime);
}

alert( 'Итоговое время diffSubtract: ' + time1 );
alert( 'Итоговое время diffGetTime: ' + time2 );


let ms = Date.parse('2012-01-26T13:51:50.417-07:00');

alert(ms);


let date = new Date(Date.parse('2012-01-26T13:51:50.417-07:00'));

alert(date);
*/


///Задачи
/*
let date = new Date('2012-02-26T15:12');
let dates = new Date(2012, 1, 26, 3, 12);

alert(date);
alert(dates);


let date = new Date(2012, 0, 3);

function getWeekDay(date) {
    let week = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
    
    let day = week[date.getDay()];

    return day;
};

alert(getWeekDay(date));
alert(date);


let date = new Date(2012, 0, 3);

function getLocalDay(date) {
    let day = date.getDay();

    if (day === 0) {
        day === 7
    }

    return day;
}

alert(getLocalDay(date));
alert(date);


let date = new Date(2015, 0, 2);

function getDateAgo(date, days) {
    let day = date.getDate();

    let dayAgo = date.setDate(day - days);

    return date.getDate(dayAgo);
};

alert(getDateAgo(date, 2));
alert(getDateAgo(date, 5));
alert(getDateAgo(date, 1));
alert(getDateAgo(date, 3));


function getLastDayOfMonth(year, month) {
    let date = new Date(year, month + 1, 0);

    return date.getDate();
}

alert(getLastDayOfMonth(2012, 1));
alert(getLastDayOfMonth(2014, 1));


function getSecondsToday() {
    let date = new Date();
    
    let dayNow = new Date(date.getFullYear(), date.getMonth(), date.getDate());

    let dayDiff = date - dayNow;

    return Math.round(dayDiff / 1000);
}

alert(getSecondsToday());


function getSecondsToTomorrow() {
    let date = new Date();

    let dayFut = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);

    let seconds = dayFut - date;
    
    return Math.round(seconds / 1000);
}

alert(getSecondsToTomorrow());


function formatDate(date) {
    let dateDiff = new Date() - date;

    if (dateDiff < 1000) {
        return 'right now'
    }

    let seconds = Math.floor(dateDiff / 1000);

    if (seconds < 60) {
        return seconds + 'sec ago';
    }

    let min = Math.floor(dateDiff / 60000); 

    if (min < 60 ) {
        return min + 'min ago';
    }

    let mas = date;

    mas = [
        '0' + d.getDate(),
        '0' + (d.getMonth() + 1),
        '' + d.getFullYear(),
        '0' + d.getHours(),
        '0' + d.getMinutes()
    ].map(function(part) {
        return part.slice(-2)
    });

    return mas.slice(0, 3).join('.') + '' + mas.slice(3).join('.');
}


alert( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

/// вчерашняя дата вроде 31.12.2016, 20:00
alert( formatDate(new Date(new Date - 86400 * 1000)) );


let date = new Date(2012, 1, 20, 3, 12);

alert(date);


let date = new Date(2012, 0, 3);

function getWeekDay(date) {
    let week = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

    return week[date.getDay()];
}

alert(date);
alert(getWeekDay(date));


let date = new Date(2012, 0, 3);

function getLocalDay(date) {
    let dayEuro = date.getDay();
    
    if (dayEuro === 0) {
        dayEuro === 7
    }

    return dayEuro;
}

let dates = new Date(2014, 2, 12);

alert(getLocalDay(date));
alert(getLocalDay(dates));


let date = new Date(2015, 0, 2);

function getDateAgo(date, days) {
    let newDate = new Date(date);
    let day = date.getDate();

    newDate.setDate(day - days);

    return newDate.getDate();
}


alert( getDateAgo(date, 1) ); 
alert( getDateAgo(date, 2) ); 
alert( getDateAgo(date, 365) ); 


function getLastDayOfMonth(year, month) {
    let date = new Date(year, month + 1, 0);

    return date.getDate();
}

alert(getLastDayOfMonth(2012, 1));
alert( getLastDayOfMonth(2012, 1) ); // 29
alert( getLastDayOfMonth(2013, 1) ); // 28
*/


function getSecondsToday() {
    let dateNow = new Date();

    let today = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate());
    
    let seconds = Math.round((dateNow - today) / 1000);
    
    return seconds;
}

alert(getSecondsToday());

function getSecondToday() {
    let date = new Date();
    let seconds = date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds();

    return seconds;
}

alert(getSecondToday());


function getSecondsToTomorrow() {
    let now = new Date();
    let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);

    let day = Math.round((tomorrow - now) / 1000);

    return day;
}

alert(getSecondsToTomorrow())


function formatDate(date) {
    let diff = new Date() - date; // разница в миллисекундах

    if (diff < 1000) { // меньше 1 секунды
        return 'прямо сейчас';
    }

    let sec = Math.floor(diff / 1000); // преобразовать разницу в секунды

    if (sec < 60) {
        return sec + ' сек. назад';
    }

    let min = Math.floor(diff / 60000); // преобразовать разницу в минуты

    if (min < 60) {
        return min + ' мин. назад';
    }

    // отформатировать дату
    // добавить ведущие нули к единственной цифре дню/месяцу/часам/минутам
    let d = date;
    d = [
        '0' + d.getDate(),
        '0' + (d.getMonth() + 1),
        '' + d.getFullYear(),
        '0' + d.getHours(),
        '0' + d.getMinutes()
    ].map(component => component.slice(-2)); // взять последние 2 цифры из каждой компоненты

    // соединить компоненты в дату
    return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');
}

alert( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
alert( formatDate(new Date(new Date - 86400 * 1000)) );