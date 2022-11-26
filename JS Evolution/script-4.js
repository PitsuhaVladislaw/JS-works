const defaultB = 20
const getDefault = c => c * 2;

function compute(a = 10, b = getDefault(15)) {
    return a + b;
}

console.log(compute());