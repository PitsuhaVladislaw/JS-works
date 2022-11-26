///Расширение объектов. Prototype
/*
function User(pNAme, pAge) {
    this.name = pNAme;
    this.age = pAge;
    this.displayInfo = function() {
        console.log("Name is: " + this.name + "; age is: " + this.age + "<br/>");
    };
};

User.prototype.hello = function() {
    console.log(this.name + "says: 'Hello! <br/>");
};

User.prototype.maxAge = 110;

let tom = new User("Tom", 28);
tom.hello();

let john = new User("Jhon", 30);
john.hello();

console.log(tom.maxAge);
console.log(john.maxAge);


function User(pNAme, pAge) {
    this.name = pNAme;
    this.age = pAge;
    this.displayInfo = function() {
        console.log("Name is " + this.name + "; age is " + this.age);
    };
};

User.prototype.hello = function() {
    console.log(this.name + "says 'Hello!");
};

User.prototype.maxAge = 110;

let tom = new User("Tom", 28);
tom.hello();
tom.maxAge = 99;

let john = new User("John", 30);
john.hello();

console.log(tom.maxAge);
console.log(john.maxAge);
*/



///Объекты в функциях
/*
function createUser(pNAme, pAge) {
    return {
        name: pNAme,
        age: pAge,

        displayInfo: function() {
            console.log("Name is: " + this.name + "age is: " + this.age);
        }
    };
};

let tom = createUser("Tom", 28);
tom.displayInfo();

let alice = createUser("Alice", 23);
alice.displayInfo();


function createUser(pNAme, pAge) {
    return {
        name: pNAme,
        age: pAge,

        displayInfo: function() {
            console.log("Name: " + this.name + " Age: " + this.age);
        },
        driverCar: function(car) {
            console.log(this.name + " drives by " + car.name);
        }
    };
};

function createCar(mName, mAge) {
    return {
        name: mName,
        age: mAge
    };
};

let tom = createUser("Tom", 28);
tom.displayInfo();

let bently = createCar("Bently", 2004);
tom.driverCar(bently);
*/



///Объекты в функциях **ПОВТОР**
/*
function createUser(pName, pAge) {
    return {
        name: pName,
        age: pAge,

        displayInfo: function() {
            console.log("Name: " + this.name + " age: " + this.age);
        }
    };
};

let tom = createUser("Tom", 25);
tom.displayInfo();

let alice = createUser("Alice", 22);
alice.displayInfo();


function createPerson(pName, pAge) {
    return {
        name: pName,
        age: pAge,

        displayInfo: function() {
            console.log("Name: " + this.name + " age is " + this.age);
        },

        driveCar: function(car) {
            console.log(this.name + " drives " + car.name);
        }
    };
};

function createCar(pName, pAge) {
    return {
        name: pName,
        year: pAge
    };
};

let mike = createPerson("Mike", 27);
mike.displayInfo();

let beantly = createCar("Beantly", 2004);
mike.driveCar(beantly);
*/



///Конструктор-функция
/*
function User(pName, pAge) {
    this.name = pName;
    this.age = pAge;

    this.displayInfo = function() {
        console.log("Name: " + this.name + "," + " Age: " + this.age);
    };
};

let miki = new User("Miki", "Tartl");
console.log(miki.name);
miki.displayInfo();


function Car(mName, mAge) {
    this.name = mName;
    this.year = mAge;

    this.getCarInfo = function() {
        console.log(`Name is ${this.name}; Age is ${this.year}`);
    };
};

function User(pFirstName, pSecondName, pAge) {
    this.firstName = pFirstName;
    this.secondName = pSecondName;
    this.age = pAge;

    this.driveCar = function(car) {
        console.log(this.firstName + " drives " + car.name);
    };
    this.displayInfo = function() {
        console.log(`Name is ${this.firstName} ${this.secondName}; Age is ${this.age}`);
    };
};

let andrew = new User("Andrew", "Tairon", 27);
andrew.displayInfo();

let mustang = new Car("Mustang", 2017);
mustang.getCarInfo();
andrew.driveCar(mustang);


let saske = new User("Saske", "Uchiha", 2002);

let isSaske = saske instanceof User;
let isCar = saske instanceof Car;

console.log(isSaske);
console.log(isCar);
*/