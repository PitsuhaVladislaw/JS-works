const symbol = Symbol('demo');
const other = Symbol('demo');

//console.log(symbol);
//console.log(other);

//console.log(symbol === other);

const obj = {
    name: 'Elena',
    [demo]: 'DEMO'
}

//console.log(obj);

//console.log(obj[other]);
//console.log(obj[symbol]);


for (let key in obj) {
    console.log(key);
}