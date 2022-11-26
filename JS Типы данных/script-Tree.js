///Рекурсия и стек



/* 

function pow(x, n) {
  let result = 1;

  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}

console.log(pow(2, 2));
console.log(pow(4, 6));
console.log(pow(5, 3));


function pow(x, n) {
  if (n === 1) {
    return x;
  } else {
    return x * pow(x, n - 1);
  }
}

function pows(x, n) {
  return (n === 1) ? x : x * pows(x, n - 1);
} 

console.log(pows(2, 2));
console.log(pows(4, 6));
console.log(pow(4, 6));
console.log(pow(5, 3));


let company = {
  sales: [{
    name: 'John',
    salary: 1000
  }, {
    name: 'Alice',
    salary: 600
  }], 

  development: {
    sites: [{
      name: 'Peter',
      salary: 2000
    }, {
      name: 'Alex',
      salary: 1800
    }], 

    internals: [{
      name: 'Jack',
      salary: 1300
    }]
  }
}

function sumSalaries(department) {
  if (Array.isArray(department)) {
    return department.reduce((prev, current) => prev + current.salary, 0); 
  } else {
    let sum = 0;

    for (let subdep of Object.values(department)) {
      sum += sumSalaries(subdep);
    }

    return sum;
  }
}

console.log(sumSalaries(company));


let task = { value: 1 };
task.next = { value: 2 };
task.next.next = { value: 3 };
task.next.next.next = { value: 4 };

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
}

let secondList = list.next.next;
list.next.next = null;

list.next.next = secondList;

let list = { value: 1};

list.next = { value: 2};
list.next.next = { value: 3};
list.next.next.next = { value: 4};

/// добавление нового элемента в список
list = {value: "new item", next: list};

///удалить элемент из середины списка
list.next = list.next.next;



///Замыкание и функции IIFE



function outer() {
  let x = 5;

  function inner() {
    x++;
    console.log(x);
  }

  return inner;
}

let fn = outer();

fn();
fn();
fn();


function multiply(n) {
  var x = n;

  return function(m) {
    return x * m;
  };
}

var fn1 = multiply(5);
var result1 = fn1(6);
console.log(result1);

var fn2 = multiply(4);
var result2 = fn2(6);
console.log(result2);


function outer() {
  let x = 5;

  function inner() {
    x++;

    console.log(x);
  };

  return inner;
}

let fn = outer();

fn();
fn();


function multiply(n) {
  var x = n;

  return function(m) {
    return x * m;
  };
}

var fn1 = multiply(5)
var result1 = fn1(3);
console.log(result1);

var fn2 = multiply(4);
var result2 = fn2(6);
console.log(result2);


function mult(n) {
  var x = n;

  return function(m) { return x * m; };
}

var result3 = mult(5)(7)
console.log(result3);


(function() {
  console.log("Hello, world!");
}());

(function(n) {
  let result = 1;

  for (let i = 1; i <= n; i++)
    result += i;
  console.log(`Факториал числа " + ${n} + " равен " + ${result}`)
}(4))
*/



///Массивы


/*
function createArray() {
  let arrayWithInitSize = new Array(4);
  let arrayWithOneValue = new Array('5');
  let arrayWithPresent = new Array(5, 6);
  let arrayWithInitValue = Array.of(4);
  let arrayWithInitValues = Array.of(4, 5, 6);
  let sipleWayArray = ['a', 'b', 'c'];

  console.log('\nArray creation:')
  console.log('arrayWithInitSize:', arrayWithInitSize);
  console.log('arrayWithOneValue:', arrayWithOneValue);
  console.log('arrayWithPresent:', arrayWithPresent);
  console.log('arrayWithInitValue:', arrayWithInitValue);
  console.log('arrayWithInitValues:', arrayWithInitValues);
  console.log('sipleWayArray:', sipleWayArray);
}

///createArray()


function arrayBypass() {
  function logEachElement() {
    for (let i = 0; i < array.length; i++) {
      console.log(`[elem width index ${i}] is ${array[i]}`);
    }
  }

  function findSum() {
    let sum = 0;

    for (let elem of array) {
      sum += elem;
    }

    console.log(`Sum is ${sum}`);
  }

  function findMin() {
    let min = !array.length ? 0 : array[0];

    for (let i = 0; i < array.length; i++) {
      if (array[i] < min) {
        min = array[i];
      }
    }

    console.log(`Min element is ${min}`);
  }

  function findArg() {
    let length = array.length;
    let sum = 0

    for (let elem of array) {
      sum += elem;
    }

    let avg = length ? sum / length : 0;

    console.log(`Average is ${avg}`);
  }

  //let array = [21, 22, 23, 24, 25, 26, 27];
  let array = [5, 1, 12, 10];

  logEachElement(array);
  findSum(array);
  findMin(array);
  findArg(array);
}

arrayBypass();
*/



///Стэк 

/*
function stackOnArrayExample() {
  let stack = [];

  console.log('Push fake call stack:');

  console.log('push Owner');
  stack.push('Owner');
  
  console.log('push IS');
  stack.push('is');

  console.log('push Not');
  stack.push('not');

  console.log('push Winner');
  stack.push('Winner');

  console.log(stack);

  console.log('Execute fake call stack');

  while(stack.length) {
    let operation = stack.pop();

    console.log('    execute-', operation);
  }

  console.log(stack);
}

function bracketsIssue() {
  const BRACKETS = ['(', '{'];
  const BRACKETS_PAIR = {
    [')']: '(',
    ['}']: '{'
  }

  function isBrackets(str) {
    let stack = [];

    for (let i = 0; i < str.length; i++) {
      let currentValue = str[i];

      if (BRACKETS.includes(currentValue)) {
        stack.push(currentValue);
      } else {
        let topElement = stack[stack.length - 1];

        if (BRACKETS_PAIR[currentValue] === topElement) {
          stack.pop();
        } else {
          return false;
        }
      }
    }

    return stack.length === 0;
  }

  console.log('check case - (({})) -', isBrackets('(({}))'));
  console.log('check case - ()({}) -', isBrackets('()({})'));
  console.log('check case - ){){}) -', isBrackets('){){})'));
  console.log('check case - ({)) -', isBrackets('({))'));
  console.log('check case - ({}{(())}) -', isBrackets('({}{(())})'));
}


stackOnArrayExample();
bracketsIssue();
*/



///Матрица

/*

///#      0  1  2
///
///0   [ [1, 2, 3],
///1     [4, 5, 6], 
///2     [7, 8, 9] ]
/// {1, 2} = item: 6
function logEachMatrixItem() {
  console.log('\nLog each matrix item:');

  for(let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      console.log(`item {${i}, ${j}} - ${matrix[i][j]}`);
    }
  }
}

function showMatrix(matrix) {
  console.log('\nShow matrix:');

  for (let i = 0; i < matrix.length; i++) {
    console.log(matrix[i].join(' '));
  }
}

function showSumByRow(matrix) {
  console.log('\nShow sum by row');

  let sumResults = []

  for (let i = 0; i < matrix.length; i++) {
    let sum = 0;

    for (let j = 0; j < matrix[i].length; j++) {
      sum += matrix[i][j];
    }

    sumResults.push(sum);
  }

  console.log('result - ', sumResults);
}

function findColumnsWithZero(matrix) {
  console.log('\nFind columns with 0:');

  let columnsWithZeroIdx = [];
  let columnCount = matrix[0].length;

  for (let i = 0; i < columnCount; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[j][i] === 0) {
        columnsWithZeroIdx.push(i);
        break;
      }
    }
  }

  console.log(' result - ', columnsWithZeroIdx);
}

function snakeByPass(matrix) {
  console.log('\nSnake by pass:');

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      let columnIdx = i % 2 === 0 ? j : (matrix[i].length - j - 1);

      console.log(matrix[i][columnIdx]);
    }
  }
}

function logMainDiag(matrix) {
  console.log('\nMain diag:');

  for (let i = 0; i < matrix.length; i++) {
    console.log(matrix[i][i])
  }
}

function logSideDiag(matrix) {
  console.log('\nSide diag:');

  let nItem = matrix.length;

  for (let i = 0; i < nItem; i++) {
    console.log(matrix[i][nItem - i - 1]);
  }
}

function showBottomMainTriangle(matrix) {
  console.log('\nBottom main triangle:');

  let row;

  for (let i = 0; i < matrix.length; i++) {
    row = [];

    for (let j = 0; j <= i; j++) {
      ///Action
      row.push(matrix[i][j]);
    }

    console.log(row.join(' '));
  }
}


let matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [0, 3, 6, 9],
  [6, 8, 0, 2 ]
];

let smallMatrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];


logEachMatrixItem(matrix);

showMatrix(matrix);
showMatrix(smallMatrix);

snakeByPass(matrix);
snakeByPass(smallMatrix);

showSumByRow(matrix);

findColumnsWithZero(matrix);

logMainDiag(smallMatrix);
logSideDiag(smallMatrix);

showBottomMainTriangle(matrix);

showBottomMainTriangle(matrix);
*/



///Связный список

/*
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// { value: 1, next: <obj_2> } -> { value: 2, next: null }

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  add(value) {
    if (this.length === 0) {
      this.head = new Node(value);
    } else {
      let current = this.head;

      // move to the last node
      while(current.next) {
        current = current.next;
      }

      current.next = new Node(value);
    }

    this.length++;
  }

  insert(position, value) {
    if (position < 0 || position > this.length) {
      return false;
    }

    let node = new Node(value);

    if (position === 0) {
      node.next = this.head;
      this.head = node;
    } else {
      let current = this.head;
      let prev = null;

      let index = 0;

      while (index < position) {
        prev = current;
        current = current.next;
        index++;
      }

      prev.next = node;
      node.next = current;
    }

    this.length++;
  }

  get(position) {
    if (position < 0 || this.length <= position ) {
      return;
    }

    let current = this.head;
    let index = 0;

    while (index < position) {
      current = current.next;
      index++;
    }

    return current.value;
  }

  removeAt(position) {
    if (position < 0 || position >= this.length) {
      return null;
    }

    let current = this.head;

    if (position === 0) {
      this.head = current.next;
    } else {
      let prev = null;
      let index = 0;

      while (index < position) {
        prev = current;
        current = current.next;
        index++;
      }

      prev.next = current.next;
    }

    this.length--;
    return current.value;
  }

  remove(element) {
    this.removeAt( this.indexOf(element) );
  }

  indexOf(element) {
    let current = this.head;
    let index = 0;

    while (current) {
      if (current.value === element) {
        return index;
      }

      current = current.next;
      index++;
    }

    return -1;
  }

  size() {
    return this.length;
  }

  isEmpty() {
    return this.length === 0;
  }

  print() {
    let current = this.head;

    while(current) {
      console.log(current.value);
      current = current.next;
    }
  }
}

console.log('s01e11 - Linked List');

let payload = { a: 4 };

let list = new LinkedList();

function addItems() {
  console.log('\nAdd Items:');

  list.add({a: 1});
  list.add({a: 2});
  list.add({a: 3});

  list.insert(2, payload);

  list.insert(0, {a: 5});
  list.insert(5, {a: 6});

  list.print()
}

function getItems() {
  console.log('\n Get Items')

  console.log('get(4):', list.get(4));
  console.log('get(0):', list.get(0));
  console.log('get(-5):', list.get(-5));

  console.log('indexOf {a: 5}:', list.indexOf({a: 5}));
  console.log('indexOf payload:', list.indexOf(payload));
}

function removeItems() {
  console.log('\n Remove Items');

  console.log('\n Before:');
  list.print();

  list.remove(payload);

  console.log('\n After:');
  list.print();
}

addItems();
getItems();
removeItems();
*/



///Бинарное дерево поиска
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  add(value) {
    this.root = addWithin(this.root, value);

    function addWithin(node, value) {
      if (!node) {
        return new Node(value);
      }

      if (node.value === value) {
        return node;
      }

      if (value < node.value) {
        node.left = addWithin(node.left, value);
      } else {
        node.right = addWithin(node.right, value);
      }

      return node;
    }
  }

  has(value) {
    return searchWithin(this.root, value);

    function searchWithin(node, value) {
      if (!node) {
        return false;
      }

      if (node.value === value) {
        return true;
      }

      return value < node.value ? 
        searchWithin(node.left, value) : 
        searchWithin(node.right, value);
    }
  }

  remove(value) {
    this.root = removeNode(this.root, value);

    function removeNode(node, value) {
      if (!node) {
        return null;
      }

      if (value < node.value) {
        node.left = removeNode(node.left, value);
        return node;
      } else if (node.value < value) {
        node.right = removeNode(node.right, value);
        return node;
      } else {
        // equal - should remove this item
        if (!node.left && !node.right) {
          // put null instead of item
          return null;
        }

        if (!node.left) {
          // set right child instead of item
          node = node.right;
          return node;
        }

        if (!node.right) {
          // set left child instead of item
          node = node.left;
          return node;
        }

        // both children exists for this item
        let minFromRight = node.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }
        node.value = minFromRight.value;

        node.right = removeNode(node.right, minFromRight.value);

        return node;
      }
    }
  }

  min() {
    if (!this.root) {
      return;
    }

    let node = this.root;
    while (node.left) {
      node = node.left;
    }

    return node.value;
  }

  max() {
    if (!this.root) {
      return;
    }

    let node = this.root;
    while (node.right) {
      node = node.right;
    }

    return node.value;
  }

  leftTraverse(cb) {
    doLeft(this.root, cb);

    function doLeft(node, cb) {
      if (node) {
        doLeft(node.left, cb);
        cb(node.value);
        doLeft(node.right, cb);          
      }
    }
  }

  rightTraverse(cb) {
    doRight(this.root, cb);

    function doRight(node, cb) {
      if (node) {
        doRight(node.right, cb);
        cb(node.value);
        doRight(node.left, cb);
      }
    }
  }
}

console.log('s01e12 - BST (Binary Search Tree)');

function addItems() {
  console.log('\n  Add Items');
  console.log('add 13, 15, 9, 20, 18, 32, 25');

  bst.add(13);
  bst.add(15);
  bst.add(9);
  bst.add(20);
  bst.add(18);
  bst.add(32);
  bst.add(25);

  console.log(bst);
}

function getItems() {
  console.log('\n Get items');

  console.log('has 10:',bst.has(10));
  console.log('has 15:', bst.has(15));
  console.log('\n', bst);

  console.log(' Left Traverse:');
  bst.leftTraverse((val) => console.log(val));

  console.log(' Right Traverse:');
  bst.rightTraverse((val) => console.log(val));

  console.log('min:', bst.min());
  console.log('max:', bst.max());
}

function removeItem() {
  console.log(' Remove item:');

  bst.remove(15);
  console.log('remove 15');
  console.log(bst);

  console.log('Left Traverse:');
  bst.leftTraverse((val) => console.log(val));
}

const bst = new BinarySearchTree();

addItems()
getItems()
removeItem()


