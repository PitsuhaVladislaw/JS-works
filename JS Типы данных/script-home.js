/*
let user = {};

user.name = "John";
user.surname = "Smith";
user.name = "Pete";

delete user.name;

alert(user.name);
*/

/*
let schedule = {};

function isEmpty() {
    for (let key in schedule) {
        return false;
    }

    return true;
};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false
*/

/*
const user = {
    name: "John"
};

// это будет работать?
user.name = "Pete";

alert(user.name);
*/

/*
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

let sum = 0;

for (let key in salaries) {
    sum += salaries[key];
}

alert(sum);
*/

/*
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function multiplyNumeric(obj) {
    for (let key in obj) {
        obj[key] *= 2;
    }
}

alert(multiplyNumeric(menu));
*/
/*
let message = "Hello";

let phrase = message;

let user = {
    name: "Ivan"
};

let admin = user;
*/

/*
let user = {
    name: "Иван",
    age: 30
};

let clone = {};

for (let key in user) {
    clone[key] = user[key];
}

clone.name = "Пётр"; // изменим в нём данные

alert( user.name );
alert( clone.name );
*/

/*
let user = {
  name: "Иван",
  sizes: {
    height: 182,
    width: 50
  }
};

alert( user.sizes.height ); // 182

let clone = Object.assign({}, user);

alert( user.sizes === clone.sizes ); // true, один и тот же объект

user.sizes.width++;
alert(clone.sizes.width)
*/

/*
function marry(man, woman) {
    woman.husband = man;
    man.wife = woman;

    return {
        father: man,
        mother: woman
    }
}

let family = marry({
    name: "John"
}, {
    name: "Ann"
});

delete family.father;
delete family.mother.husband;
*/



///Методы объекта, "this"

/*
let user = {
    name: "Джон",
    age: 30
};

user.sayHi = function() {
    alert("Привет!");
};

user.sayHi(); // Привет!


/*
user = {
    sayHi: function() {
        alert('Hello!');
    }
};

user = {
    sayHi() {
        alert('hello!');
    }
};
*/


/*
let user = {
    name: "John",
    age: 30,

    sayHi() {
        //this - это "текущий объект"
        alert(this.name);
    }
};

user.sayHi();

let user = {
    name: "Джон",
    age: 30,

    sayHi() {
        alert(user.name);
    }
};

user.sayHi();

let user = {
  name: "Джон",
  age: 30,

  sayHi() {
    alert( user.name ); // приведёт к ошибке
  }

};


let admin = user;
user = null; // обнулим переменную для наглядности, теперь она не хранит ссылку на объект.

admin.sayHi()

let user = { name: "John" };
let admin = { name: "Admin" };

function sayHi() {
    alert(this.name);
}

user.f = sayHi;
admin.f = sayHi;

user.f();
admin.f();

admin['f']();
*/


/* 
let user = {
    name: "john",
    
    hi() {
        alert(this.name);
    },
    bye() {
        alert("Bye!");
    } 
};

user.hi()

(user.name == "Джон" ? user.hi : user.bye)(); // Ошибка!
*

let user = {
    name: "John",
    age: 30,

    hi() {
        alert(this.name);
    }
};

let hi = user.hi;

hi();
*/

//Стрелочный тип
/* 
// значение ссылочного типа (Reference Type)
(user, "hi", true)

let user = {
    firstName: "John",
    
    sayHi() {
        let arrow = () => alert(this.firstName);
        arrow();
    }
};

user.sayHi();
*/

//Задачи 

/* 
function makeUser() {
    return {
        name: "John",
        ref: this
    };
};

let user = makeUser();

alert(user.ref.name);

function makeUser() {
    return {
        name: 'John',

        ref() {
            return this;
        }
    };
};

let user = makeUser();

alert(user.ref().name);

let calculator = {
    a: 20,
    b: 10,

    sum() {
        return this.a + this.b;
    }, 

    mul() {
        return  this.a * this.b;
    }, 

    min() {
        return this.a - this.b;
    },

    div() {
        return this.a / this.b;
    },

};

alert(calculator.sum());
alert(calculator.min());
alert(calculator.mul());
alert(calculator.div());

let ladder = {
    step: 0,

    up() {
        this.step++;
        return this;
    },

    down() {
        this.step--;
        return this;
    },

    showStep: function() {
        alert(this.step);
        return this;
    }
};

ladder.up().up().down().up().showStep();

ladder
    .up()
    .up()
    .down()
    .showStep(); 
*/



///Конструкторы, создание объектов через "new"
/* 
function User(name) {
    this.name = name;
    this.isAdmin = false;
}

let user = new User('Vas');

alert(user.name); // Вася
alert(user.isAdmin); // false

То есть, результат вызова let user = new User("Вася") – это тот же объект, что и:

let user = {
  name: "Вася",
  isAdmin: false
};

*/

/*
function User() {
    alert(new.target);
};

User();

new User();

function User(name) {
    if(!new.target) {
        return new User(name);
    }

    this.name = name
}

let vasya = User("Vasia");
alert(vasya.name);

function BigUser() {
    this.name = 'Vas';

    return {name: "Godzilla"};
}

alert(new BigUser().name);


function User(name) {
    this.name = name;

    this.sayHi = function() {
        alert("My name's " + this.name)
    };
}

let vasya = new User("Vasya");

vasya.sayHi();

vasya.name();
*/

/*
vasya = {
   name: "Вася",
   sayHi: function() { ... }
}
*/

//Задачи
/*
function A() {}
function B() {}

let a = new A;
let b = new B;

alert (a == b); 

let obj = {};

function A() {return obj;}
function B() {return obj;}

alert(new A() === new B());
*/

/* 
let calculator = {
    read() {
        this.a = +prompt('Write your a', '0');
        this.b = +prompt('Write your b', '0');
    },

    sum() {
        return this.a + this.b;
    }, 

    mul() {
        return this.a * this.b;
    }
};

calculator.read();

alert(calculator.sum());
alert(calculator.mul());

function Calculator() {
    this.read = function() {
        this.a = +prompt('Write your a', '0');
        this.b = +prompt('Write your b', '0');
    };

    this.sum = function() {
        return this.a + this.b;
    };

    this.min = function() {
        return this.a - this.b;
    };

    this.mul = function() {
        return this.a * this.b;;
    };

    this.div = function() {
        return this.a / this.b;
    };
}

let calculator  = new Calculator();

calculator.read();

alert( "Sum= " + calculator.sum() );
alert("Min= " + calculator.min());
alert( "Mul= " + calculator.mul() );
alert("Div= " + calculator.div());
*/

/* 
function Accumulator(startingValue) {
    this.value = startingValue;

    this.read = function() {
        this.value += +prompt('Write your num that you want to include', '0')
    };
}

let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read(); // прибавит ввод prompt к текущему значению
accumulator.read(); // прибавит ввод prompt к текущему значению

alert(accumulator.value); // выведет сумму этих значений
*/



///Опциональная цепочка '?.'
/*
let user = {};

alert(user.address.street);

/ document.querySelector('.elem') равен null, если элемента нет
let html = document.querySelector('.elem').innerHTML;// ошибка, если он равен null

alert(html);

let user = {};

alert(user.address ? user.address.street : undefined);

let html = document.querySelector('.elem') ? document.querySelector('.elem').innerHTML : null;

let user = {};

alert(user.address ? user.address.street ? user.address.street.name : null : null); //null

alert(user.address && user.address.street && user.address.street.name); //undefined
*/


/* 
let user = {};

alert(user?.address?.street);

let html = document.querySelector('.elem')?.innerHTML;

let user = null;

alert(user?.address);
alert(user?.address.street);


let user = null;

let x = 0;

user?.sayHi(x++);

alert(x);

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

let user2 = {
    firstName: "Sam"
};

alert(user1?.[key]);
alert(user2?.[key]);

delete user?.name;
*/



///Тип данных Symbol

/* 
let id1 = Symbol('id');
let id2 = Symbol('id');

alert(id1 == id2)

let idd = Symbol('id');

alert(idd.toString());

alert(idd.description);


let user = {
    name: "John"
};

let id = Symbol('id');

user[id] = 1;

alert(user[id]);


let id3 = Symbol('Id3');

user[id3] = "Their ident";

let user = { name: "John"};

user.id = "Their ident";

user.id = "Their ident";

alert(user.id);

let id = Symbol();

let user = {
    name: "John",
    [id]: 123
};


let id = Symbol("id");

let user = {
    name: "John",
    age: 30,
    [id]: 123
};

for (let key in user) alert(key);

alert("Space work's pass" + user[id]);
*/

/*
let id = Symbol.for("id");

let idAdmin = Symbol.for("id");

alert(id === idAdmin);

/// получаем символ по имени
let sum = Symbol.for("name");
let sum2 = Symbol.for("id");

/// получаем имя по символу
alert(Symbol.keyFor(sum));

alert(Symbol.keyFor(sum2));
*/

/*
let globalSymbol = Symbol.for("name");
let localSymbol = Symbol("name");

alert(Symbol.keyFor(globalSymbol));
alert(Symbol.keyFor(localSymbol));

alert(localSymbol.description);
*/


///Преобразование объектов в примитивы

/* 

alert(obj);

anotherObj[obj] = 123;*/
/*
/ явное преобразование
let num = Number(obj);

/ математические (не считая бинарного плюса)
let n = +obj;

let delta = date1 - date2;

/ сравнения больше/меньше
let greater = user1 > user2;


let total = obj1 + obj2;

if (user == 0) {};
*/

//Symbol.toPrimitive
/* 
obj[Symbol.toPrimitive] = function(hint) {
    / вот код для преобразования этого объекта в примитив
    / он должен вернуть примитивное значение
    / hint = чему-то из "string", "number", "default"
};

let user = {
    name: "John",
    moneyCash: 1500,

    [Symbol.toPrimitive](value) {
        alert(`Value is ${value}`);

        return value == 'string' ? `{name: ${this.name}}` : this.moneyCash;
    }
};

/// демонстрация результатов преобразований:
alert(user); /// hint: string -> {name: "John"}
alert(+user); /// hint: number -> 1000
alert(user + 500); /// hint: default -> 1500

let user = { name: "John" };

alert(user);
alert(user.valueOf() === user);

let user = {
    name: "John",
    money: 1000,

    toString() {
        return `{name: "${this.name}"}`;
    },

    valueOf() {
        return this.money;
    }
};

alert(user); /// hint: string -> {name: "John"}
alert(+user); /// hint: number -> 1000
alert(user + 500); /// hint: default -> 1500
*/

/*
let user = {
    name: "John",

    toString() {
        return `{name: "${this.name}"}`
    }
};

alert(user); // toString -> John
alert(user + 500); // toString -> John500

let obj = {
    
    toString() {
        return "2";
    }
};

alert(obj);
alert(obj * 2);
*/


///Числа

/*
let roma = {
    name: "Roma",

    sayHi() {
        alert("Hello!")
    }
};

roma.sayHi();

let str = "Hello";

alert(str.toUpperCase());


let n = 1.2356;

alert(n.toFixed(2));

let strs = "HEllo";

strs.test = 5;

alert(str.test);

let billion = 7.3e9;

alert(billion);

let num = 1.23658;

alert(Math.floor(num * 100) / 100);
*/


//Задачи
/* 

let a = +prompt('Wtite your a', '');
let b = +prompt('Write your b', '');

alert(a + b);


alert(1.35.toFixed(1));

alert(Math.round(6.35 * 10) / 10);
alert(Math.round(6.35));


function readNumber() {
    let num;

    do {
        num = prompt('Write your number', '')
    } while(!isFinite(num));

    return num === null || num === '' ? null : num;
}

alert(readNumber());


function Infinite() {
    let i = 10;

    while (i != 10) {
        i += 0.2;
    };

    return i;
}

alert(Infinite());


let i = 0;

while (i < 11) {
    i += 0.2;

    if (i > 9.2 && i < 10.2) { alert(i) };
}


function random(min, max) {
    return min + Math.random() * (max-min);
};

alert( random(1, 5) ); // 1.2345623452
alert( random(1, 5) ); // 3.7894332423
alert( random(1, 5) ); // 4.3435234525

alert(Math.random());

function randomInteger(min, max) {
    let result = min + 0.5 + Math.random() * (max - min);

    return Math.round(result);
}

alert( randomInteger(1, 5) ); // 1
alert( randomInteger(1, 5) ); // 3
alert( randomInteger(1, 5) ); // 5
*/


///Строки
/* 
let str = "Guys, you are cool who is here";

let target = "o";

let pos = 0;

while (true) {
    let foundPos = str.includes(target, pos);

    if (foundPos == -1) break;

    alert(`${target} is on pos ${foundPos}`);

    pos = foundPos + 1;
};

let strs = "Guys, you are cool who is here";

let targets = "o";

let position = -1;

while ((position = strs.includes(targets, position + 1)) != -1) {
    alert(position);
};+

let str = "Widget is new";

if (str.includes('Widget') != -1) {
    alert('We have result');
};


let strs = "Widget is new";

if (~strs.includes("Widget")) {
    alert('We have result');
};


let str = "stringify";

alert(str.slice(0, 1));
alert(str.slice(2, 8));
alert(str.startsWith(""));
alert(str.startsWith(""));
alert(str.substring(2, 6));
alert(str.substring(6, 2));
alert(str.endsWith("fy"));
alert(str.endsWith("gify"));
*/


//Задачи
/* 
function ucFirst(str) {

    return str.substring(0, 1).toUpperCase() + str.substring(1, );
};

function ucFirstWord(strs) {
    return strs[0].toUpperCase() + strs.slice(1);
};

alert(ucFirst("марк Спектор"));
alert(ucFirstWord("mark"));


function checkSpam(str) {
    let smallStr = str.toLowerCase();

    let bigStr = str.toUpperCase();

    return smallStr.includes("viagra") || bigStr.includes("XXX");
}


alert(checkSpam('buy ViAgRA now')); ///== true
alert(checkSpam('free xxxxx')); ///== true
alert(checkSpam("innocent rabbit")); /// == false


function truncate(str, maxlength) {
    let length = str.length;

    if (length > maxlength) {
        return str.substr(0, maxlength) + '...';
    }

    return str;
};

alert(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20)); //"Вот, что мне хотело…"
alert(truncate("Всем привет!", 20)); //"Всем привет!"
alert(truncate("Вот, что мне хотелось бы сказать на эту тему:", 70));
alert(truncate("Всем привет!", 5));


function extractCurrencyValue(str) {
    return str.slice(1);
}

alert(extractCurrencyValue("$45"));
alert(extractCurrencyValue("$444"));
alert(extractCurrencyValue("$120"));
*/