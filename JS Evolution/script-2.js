/*
function sum(a, b) {
    return a + b;
}

function cube(a) {
    return a ** 3;
}

const sum = (a, b) => a + b;

const cube = (a) => {
    return a ** 3;
}

console.log(sum(42, 42));
console.log(cube(3));

setTimeout(/*handler: */ /*function() {
    console.log('After 1 second');
}, 1000);
*/

function log() {
    console.log(this);
}

const arrowLog = () => console.log(this);

const person = {
    name: 'Elena',
    age: 20,
    log: log,
    arrowLog: arrowLog,
    delayLog: function() {
        const self = this
        setTimeout(function() {
            console.log(self.name + ' ' + self.age)
        }, 500)
    }
}

person.delayLog()