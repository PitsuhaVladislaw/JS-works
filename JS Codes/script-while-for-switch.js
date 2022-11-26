/*
let i = 0;

while (i < 3) {
    alert(i);
    i++;
}

*/

//1
/*
let i = 3;

while (i) {
    alert(i--); 
}

*/

//2
/*
let i = 0;

while (++i < 5) {
    alert(i)
}
 
let j = 0;

while (j++ < 5) {
    alert(j);
}
*/

//3
/*
for(let i = 0; i < 5; ++i)   alert(i)

for(let j = 0; j < 5; j++)   alert(j)
*/

//4
/*
for(let i = 2; i <= 10; i++) {
    if (i % 2 == 0) {
        alert(i);
    }
}
*/

//5
/*
for (let i = 0; i < 3; i++) {
  alert( `number ${i}!` );
}
let j = 0;

while (j < 3) {
    alert(`number ${j}!`);
    j++;
}
*/

//6
/*
let number;

do {
    number = prompt('Write number greater than 100', '');
} while (number < 100 && number === null);
*/

//7
/*
let n = 10; 

nextNumber:

for (let i = 2; i < n; i++) {
    
    for (let j = 2; j < i; j++) {
        if (i % j === 0) continue nextNumber;
    }

    alert(i);
}
*/

//8
/*
const browser = prompt('Write','');

//switch
/*
switch (browser) {
    case 'Edge':
        alert("You've got the Edge!");
        break;

    case 'Chrome':
    case 'Firefox':
    case 'Safari':
    case 'Opera':
        alert('Okay we support these browsers too');
        break;

        default:
            alert('We hope that this page looks ok!');
}
*/
//if_else
/*
if (browser === 'Edge') {
    alert("You've got the Edge!");
} else if (browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera') {
    alert('Okay we support these browsers too');
} else {
    alert('We hope that this page looks ok!');
}

*/


//9
/*
//if
const number = +prompt('Введите число между 0 и 3', '');
if (number === 0) {
  alert('Вы ввели число 0');
}

if (number === 1) {
  alert('Вы ввели число 1');
}

if (number === 2 || number === 3) {
  alert('Вы ввели число 2, а может и 3');
}
*/
//switch
/*
switch(number) {
    case 0: 
        alert('Вы ввели число 0');
        break;

    case 1: 
        alert('Вы ввели число 1');
        break;
    
    case 2:
    case 3:
        alert('Вы ввели число 2, а может и 3');
        break;
    
    default:
        alert('Try again!');
}

*/


//10
/*
function checkAge(age) {
    if (age > 18) {
        return true;
    }
    
    return confirm('Родители разрешили?');
}
*/


//11
/*
function checkAge(age) {
    return (age > 18) ? true : confirm('Родители разрешили?');
}
*/
/* 
function checkAge(age) {
    return (age > 18) || confirm('Родители разрешили?');
}

let age = prompt('Checking your age','');

if ( checkAge(age) ) {
    alert( 'Доступ получен' );
} else {
    alert( 'Доступ закрыт' );
}
*/


//12
/*
function minNum(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

function minNum(a, b) {
    return (a < b) ? a : b;
}

let resFirst = minNum(2, 5); 
alert(resFirst);

let resSecond = minNum(3, -1) 
alert(resSecond);

let resThird = minNum(1, 1)
alert(resThird);
*/

//13
/*
function powN(x, n) {
    return x ** n;
}

alert(powN(10, 2));
*/
/*
function pow(x, n) {
    let num = x;

    for(let i = 1; i < n; i++) {
        num *= x;
    }

    return num;
}

const x = prompt('Enter your x', '');

const n = prompt('Enter your n', '');

if (n > 1) {
    alert(pow(x, n));
} else {
    alert(`${n} isn't correct, try again`);
}
*/

//Стрелочная функция 
let func = (arg1, arg2, ...argN) => expression;

let func = function(arg1, arg2, ...argN) {
  return expression;
};


let sum = (a, b) => a + b;

/* Эта стрелочная функция представляет собой более короткую форму:

let sum = function(a, b) {
  return a + b;
};
*/

alert( sum(1, 2) ); // 3


let double = n => n * 2;
// примерно тоже что и: let double = function(n) { return n * 2 }

alert( double(3) ); // 6

//Задача 

function ask(question, yes, no) {
    if(confirm(question)) yes()
    else no();
}

ask(
    function() { alert("Вы согласились."); },
    function() { alert("Вы отменили выполнение."); }
);


function ask(question, yes, no) {
    if(confirm(question)) yes()
    else no();
}

ask(
    () => alert("Вы согласились."),
    () => alert("Вы отменили выполнение.")
);