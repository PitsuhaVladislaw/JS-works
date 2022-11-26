///Метод пузырька

/*

function bubbleSort(arr) {
    if (arr.length === 0) return [];

    const n = arr.length; 

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j + 1] < arr[j]) {
                let t = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = t
            }
        }

        console.log(arr);
    }

    return arr;
} 

function bubbleSort(arr) {
    if (arr.length === 0) return [];

    console.log(`before func: ${arr}`);

    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j + 1] < arr[j]) {
                let t = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = t;
            }
        }
    }

    console.log(`After func: ${arr}`);
}


function quickSort(arr) {
    if (arr.length === 0) return [];

    let a = [],
    b = [],
    p = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if(arr[i] < p) {
            a.push(arr[i]);
        } else {
            b.push(arr[i]);
        }
    }

    return quickSort(a).concat(p, quickSort(b));
}

function quickSort(arr) {
    if (arr.length === 0) return [];

    let a = [],
    b = [],
    p = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < p) {
            a.push(arr[i]);
        } else {
            b.push(arr[i]);
        }
    }

    return quickSort(a).concat(p, quickSort(b));
}

function quickSort(arr) {
    if (arr.length === 0) return [];

    let a = [],
    b = [];
    p = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < p) {
            a.push(arr[i]);
        } else {
            b.push(arr[i]);
        }
    }

    return quickSort(a).concat(p, quickSort(b));
}

//item: 8 {0  1  2  3  4   5  6  7}
let arr = [
    1, 2, 8, 7, 
    11, 4, 5, 3
]; 

///bubbleSort(arr);
console.log(quickSort(arr));



///Бинарный поиск

const arr = [-1, 0, 1, 2, 3, 4, 6, 100, 10000];

function binarySearchIterationMethod(arr, i) {
    let left = 0,
        right = arr.length - 1;
    let mid;

    while (left <= right) {
        mid = Math.floor((left + right) / 2);

        if (arr[mid] === i) {
            return mid;
        } else if (arr[mid] > i) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return -1;
}

console.log(binarySearchIterationMethod(arr, 100));
console.log(binarySearchIterationMethod(arr, 4));
console.log(binarySearchIterationMethod(arr, 0));
*/

/*
function binarySearchIterationMethod(arr, i) {
    let left = 0;
    let right = arr.length - 1;
    let mid;

    while (left <= right) {
        mid = Math.floor((right + left) / 2);

        if (arr[mid] === i) {
            return mid;
        } else if (arr[mid] > i) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return -1;
}

function binarySearchIterationMethod(arr, i) {
  let left = 0;
  let right = arr.length - 1;
  let mid;

  while (left <= right) {
    mid = Math.floor((right + left) / 2);

    if (arr[mid] === i) {
      return mid;
    } else if (arr[mid] > i) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return -1;
}

console.log(binarySearchIterationMethod(arr, 100));


function binarySearchRecursiveMethod(arr, i, left = 0, right = arr.length - 1) {
    if (left > right) {
        return -1;
    } else {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === i) {
            return mid;
        } else if (arr[mid] > i) {
            return binarySearchRecursiveMethod(arr, i, left, mid - 1);
        } else {
            return binarySearchRecursiveMethod(arr, i, mid + 1, right);
        }
    }
}

console.log(binarySearchRecursiveMethod(arr, 2));
console.log(binarySearchRecursiveMethod(arr, -1));
console.log(binarySearchRecursiveMethod(arr, 10000));


const arr = [-1, 0, 1, 2, 3, 4, 6, 100, 10000];

function binarySearchIterationMethod(arr, i) {
    let left = 0,
        right = arr.length - 1;
    let mid;

    while (left <= right) {
        mid = Math.floor((left + right) / 2);

        if (arr[mid] === i) {
            return mid;
        } else if (arr[mid] > i) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return -1;
}

function binarySearchRecursiveMethod(arr, i, left = 0, right = arr.length - 1) {
    if (left > right) {
        return -1;
    } else {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === i) {
            return mid;
        } else if (arr[mid] < i) {
            return binarySearchRecursiveMethod(arr, i, left + 1, right);
        } else {
            return binarySearchRecursiveMethod(arr, i, left, right - 1);
        }
    }
}

console.log(binarySearchIterationMethod(arr, 2));
console.log(binarySearchIterationMethod(arr, 100));

console.log(binarySearchRecursiveMethod(arr, 0));
console.log(binarySearchRecursiveMethod(arr, 6));
*/