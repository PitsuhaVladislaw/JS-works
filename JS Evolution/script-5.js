/*
function average(...args) {

    return args.reduce((acc, i) => acc += i, 0) / args.length;
}

///console.log(average(10, 20, 30, 40, 50));

const array = [1, 2, 3, 5, 8, 13];
///console.log(...array);
///console.log(Math.max(...array));
///console.log(Math.min(...array)); 
///console.log(Math.max.apply(null, array));

const fib = [1, ...array];
console.log(fib);

*/
const array = [1, undefined, 3, 5, 8, 13];
/*
///const a = array[0]
///const b = array[1];

const [a, b = 42, ...c] = array;

console.log(a, b, c);
*/

const [a, b, c] = array;
console.log(a, c);

const address = {
    country: 'Poland',
    city: 'Warsaw',
    street: 'Castle',

    concat: function() {
        return `${this.country} ${this.city} ${this.street}`
    }
}

//const {city, country, street, concat: addressConcat} = address;

//console.log(address.concat());

//console.log(addressConcat.call(address));
//console.log(street);

const {city, ...rest} = address;
console.log(city);
console.log(rest);

const newAddress = {...address, street: 'towers', code: '123'}

console.log(newAddress);