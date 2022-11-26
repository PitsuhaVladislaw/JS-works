//1
/*
alert(null || 2 || undefined);
*/
//2
/*
alert(alert(1) || 2 || alert(3))
*/
//3
/*
alert(1 && null && 2);
*/
//4
/*
alert(alert(1) && alert(2));
*/
//5
/*
alert(null || 2 && 3 || 4);
*/
//6
/*
let age;

if (age >= 14 && age <= 90); 
*/
//7
/*
let age;

if (age < 14 && age !== 14 || age >= 90);
*/
//8
/*
if (-1 || 0) alert( 'first' );
if (-1 && 0) alert( 'second' );
if (null || -1 && 1) alert( 'third' );
*/
//9
/*
let userName = prompt("Кто там?",'');

if (userName === 'Admin') {
    let password = prompt("Пароль?", '');

    if (password === 'Я главный!') {
        alert('Welcome, sir!');
    } else if (password === '' || password === 'Иначе') {
        alert('Неверный пароль');
    } else {
        alert('Отменено')
    }

} else if (userName === '' || userName === null ) {
    alert('Отменено');
} else {
    alert('Я вас не знаю');
}
*/

