//alert("Hello, world");

//[1, 2].forEach(alert);

//let age = prompt('Сколько тебе лет?', 100);

//alert(age);

//let isBoss = confirm("Ты здесь главный?");

//alert(isBoss);

//let value = true;

//alert(typeof value);

//value = String(value);

//alert(typeof value);

//alert(5 > 4);
//alert("ананас" > "яблоко");
//alert("2" > "12");
//alert(undefined == null);
//alert(undefined === null);
//alert(null == "\n0\n");
//alert(null === +"\n0\n");
/*
let year = prompt('В каком году была опубликована спецификация ECMAScript-2015?', '');

if (year == 2015) {
    alert('Да вы знаток!');
} else {
    alert('А вот и неправильно!');
}

let years = prompt('', '');

if (years == 2015) {
    alert('Это слишком рано...');
} else {
    alert('Это поздновато');
}
if (years > 2015) {
    alert('Верно!');
} */

let isScript = prompt('Какое "официальное" название JavaScript?', 'Подумайте');

if (isScript == 'ECMAScript') {
    alert('Верно!');
} else {
    alert('Не знаете? ECMAScript');
}