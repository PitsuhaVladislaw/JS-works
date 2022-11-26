let map = new Map([
    ['a', 1]
]);

//console.log(map.get('a'))
map.set('b', 2).set(NaN, 'Number')
/*
console.log(map)
///map.clear();
console.log(map.has(42));
console.log(map.size);

console.log(map.keys());
console.log(map.entries());
console.log(map.values());
*/


const set = new Set([1, 2, 3, 5, 8, 13, 5, 8]);
console.log(set.size);
console.log(set.add(21));

set.delete(1);
console.log(set);


console.log(set.keys());
console.log(set.clear());
console.log(set.entries());