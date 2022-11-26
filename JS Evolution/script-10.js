const arr = [1, 2, 3, 4];
const str = 'Hello'; 

//console.log(arr[Symbol.iterator]);
//console.log(str[Symbol.iterator]);

const iter = arr[Symbol.iterator]();
/*
console.log(iter.next());
console.log(iter.next());

console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

for (let item of arr) {
    console.log(item);
}
*/
/*
const country = {
    values: ['pl', 'kz','uk', 'by'],
    [Symbol.iterator]() {
        let i = 0
        return {
            next: () => {
                const value = this.values[i]
                i++
                return {
                    done: i > this.values[i],
                    value
                }
            }
        }
    }
}

for (let item of country) {
    console.log(item);
}
*/

function *gen(num = 4) {
    for (let i = 0; i < num; i++) {
        try {
           yield i 
        } catch (e) {
            console.log('Errow, e')
        }
    }
}

for (let i of gen(4)) {
    console.log(i);
}