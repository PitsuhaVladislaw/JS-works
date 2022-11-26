/*
const validator = {
    get(target, prop) {
        return prop in target ? target[prop] : `Item ${prop} in the objet`;
    },

    set(target, prop, value) {
        if(value.length > 2) {
            Reflect.set(target, prop, value)
        } else {
            console.log('Length should be more then 2 symbols. Now ' + value.length)
        }
    }
}

const form = {
    login: 'tester',
    password: '12345'
}

const formProxy = new Proxy(form, validator);

//console.log(formProxy);
//console.log(formProxy.login);
//console.log(formProxy.password);

console.log(formProxy['username']);

formProxy.password = '12';
console.log(formProxy.password);
*/

function log(message) {
    console.log('[Log]:', message);
}

const proxy = new Proxy(log, {
    apply(target, thisArg, argArray) {
        if (argArray.length === 1) {
            Reflect.apply(target, thisArg, argArray)
        } else {
            console.log('No many arguments');
        }
    }
})

proxy('Custom message');
proxy('Message', 2);