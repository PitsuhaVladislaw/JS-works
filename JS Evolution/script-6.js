const cityField = 'city'

const person = {
    age: 26, 
    name: 'Irina',
    job: 'Front-end',
    [cityField + Date.now(``)]: 'Warsaw',
    'country-live': 'Poland',
    print: () => 'Person',
    toString: function() {
        return Object
        .keys(this)
        .filter(key => key !== 'toString')
        .map(key => this[key])
        .join(' ')
    }
}

///console.log(person.toString());
///console.log(person.print());
///console.log(person);

/*
const first = {a: 1};
const second = {b: 2};


console.log(Object.is(20, 20));
console.log(Object.assign({
    c: 2,
    d: 3
}, first, second));
console.log(first)
*/
const first = {a: 1}

const obj = Object.assign({}, first, {
    c: 2,
    d: 3
})

console.log(obj);

console.log(Object.entries(obj));``