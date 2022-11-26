///Классы
/*
class Person {}

///анонимный класс
let User = class {};
///Обычный класс
const Users = class Person {}


class Person {}

let tom = new Person;
let tim = new Person;

const tom = new Person();   // ! Ошибка - Uncaught ReferenceError: Cannot access 'Person' before initialization 
class Person{}


const User = class Person {}
let tom = new User();

console.log(tom);


class Person {
    name;
    age;
}

const tom = new Person();
tom.name = "Tom";
tom.age = 28;

console.log(tom.name);
console.log(tom.age);


class Person {
    name = "Tom";
    age = 28;
}

let tom = new Person();
console.log(tom.name);

tom.name = "Unknown";
console.log(tom.name);


class User {
    name;
    age;

    move(place) {
        console.log(`Go to ${place}`);
    }

    eat() {
        console.log("Eat apples");
    }
}

const bob = new User();
bob.move("Cinema");
bob.move("Library");

bob.eat();


class newUser {
    name;
    age;

    print() {
        console.log(`Name is ${this.name}; Age is ${this.age}`);
    }
}

const tobey = new newUser();
tobey.name = "Tobey";
tobey.age = 28;
tobey.print();

const mike = new newUser();
mike.name = "Mike";
mike.age = 25;
mike.print();


class Person {
    name;
    age;

    constructor() {
        console.log("Dobroe utro, everyone!");
    }

    print() {
        console.log(`Name is ${this.name}, Age: ${this.age}`);
    }
}

const tom = new Person();
const mike = new Person();


class Person {
    name;
    age;

    constructor(pName, pAge) {
        this.name = pName;
        this.age = pAge;
    }
    print() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

const tom = new Person("Tom", 24);
tom.print();

const mike = new Person("Mike", 30);
mike.print();


class User {
    constructor(pName, pAge) {
        this.name = pName;
        this.age = pAge;
    }
    
    print() {
        console.log(`Name is ${this.name}; Age is ${this.age}`);
    }
}

const andrew = new User("Andrew", 27);
andrew.print();

const lois = new User("Lois", 24);
lois.print();
*/



///Приватные поля и методы
/*
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    print() {
        console.log(`Name: ${this.name}; Age: ${this.age}`);
    }
}

const tom = new Person("Tom", 25);
tom.name = "Nike";
tom.age = 23;
tom.print();


class Person {
    #name;
    #age;

    constructor(name, age) {
        this.#name = name;
        this.#age = age;
    }

    print() {
        console.log(`Name is ${this.#name}; Age is ${this.#age}`);
    }
}

const bush = new Person("Bush", 29);
bush.print();


class User {
    #name;
    #age = 1;

    constructor(name, age) {
        this.#name = name;
        this.setAge(age);
    }

    setAge(age) {
        if (age > 0 && age < 110) this.#age = age;
    }
    print() {
        console.log(`Name is ${this.#name}; Age is ${this.#age}`);
    }
}

const bob = new User("Bob", 25);
bob.print();

bob.setAge(37);
bob.print();

bob.setAge(-123);
bob.print();


class Profile {
    #name = "undefined";
    #age = 1;

    constructor(name, age) {
        this.#name = this.#checkName(name);
        this.setAge(age);
    }

    #checkName(name) {
        if (name !== "admin") return name;
    }

    setAge(age) {
        if (age > 1 && age < 110) this.#age = age;
    }

    print() {
        console.log(`Name is ${this.#name}; Age is ${this.#age}`);
    }
}

const mike = new Profile("Mike", 30);
mike.print();
*/



///Статические поля и методы
/*
class Person {
    static retirementAge = 65;

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    print() {
        console.log(`Name is ${this.name}, Age is ${this.age}`);
    }
}

console.log(Person.retirementAge);

Person.retirementAge = 62;
console.log(Person.retirementAge);


class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    print() {
        console.log(`Name is ${this.name}, Age is ${this.age}`);
    }
    static printClassInfo() {
        console.log("Class User is showing a person");
    }
}

User.printClassInfo();


class Users {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    static print(person) {
        console.log(`Name is ${person.name}; Age is ${person.age}`);
    }
}

const tom = new Users("Tom", 25);
const brain = new Users("Brain", 31);

Users.print(tom);
Users.print(brain);


class Person {
    static retirementAge = 65;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    print() {
        console.log(`Name is ${this.name}; Age is ${this.age}`);
    }
    static calculateRestAge(person) {
        if (this.retirementAge > person.age) {
            const restAge = this.retirementAge - person.age;
            
            console.log(`Before your holiday is stayed: ${restAge}`);
        } else {
            console.log("You are a grandperson");
        }
    }
}

const alex = new Person("Alex", 19);
Person.calculateRestAge(alex);

const vadim = new Person("Vadim", 23);
Person.calculateRestAge(vadim);
*/



///Свойства и методы доступа
/*
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const tom = new Person("Tom", 26);
console.log(tom.age);
tom.age = -15;
console.log(tom.age);


class User {
    #agaValue = 1
    constructor(name, age) {
        this.name = name;
        this.setAge(age);
    }

    getAge() {
        return this.#agaValue;
    }
    setAge(value) {
        if (value > 0 && value < 111) {
            this.#agaValue = value;
        } else {
            return undefined;
        }
    } 
}

const mike = new User("Mike", 36);
mike.getAge();

console.log(mike.getAge());
*/


///Статистические поля **ПОВТОР**
/*
class Person {
    static retirementAge = 65;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    print() {
        console.log(`Name is ${this.name}; Age is ${this.age}`);
    }
}

console.log(Person.prototype.age = 25);
console.log(Person.prototype.age);

console.log(Person.retirementAge);

Person.retirementAge = 62;
console.log(Person.retirementAge);


class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    print() {
        if (this.name === '' && this.age === NaN) {
            console.log(`Sorry, but your result is ${undefined}`);
        } else {
            console.log(`Name is ${this.name}; Age is ${this.age}`);
        }
    }
    static printClassInfo() {
        console.log('Class User refers to a person');
    }
}

const mike = new User("Mike", "Ten");
mike.print();

const andrew = new User("Andrew", 26);
andrew.print();

User.printClassInfo();


class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    print() {
        if (this.name === '' && this.age === '') {
            console.log(`Sorry, but your result is ${undefined}`);
        } else {
            console.log(`Name is ${this.name}; Age is ${this.age}`);
        }
    }
    static printAge() {
        console.log(this.age);
    }
}

Person.printAge();


class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    static print(person) {
        console.log(`Name is ${person.name}; Age is ${person.age}`);
    }
}

const mike = new Person("Mike", 26);
Person.print(mike);

const tom = new Person("Tom", 35);
Person.print(tom);


class User {
    static #retirement = 65;

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    print() {
        console.log();
    }
    static calculateRestAges(person) {
        if (this.#retirement > person.age) {
            const restAges = this.#retirement - person.age;

            console.log(`Before retirement you have: ${restAges}`);
        } else {
            console.log("You are already retired");
        }
    }
}

const tim = new User("Tima", 23);
User.calculateRestAges(tim);

const nikita = new User("Nikita", 25);
User.calculateRestAges(nikita);
*/



///Свойства и методы
/*
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const tom = new Person("Tom", 25);
console.log(tom.age);

tom.age = -15;
console.log(tom.age);


class User {
    #ageValue = 1;
    constructor(name, age) {
        this.name = name;
        this.setAge(age);
    }   

    getAge() {
        return this.#ageValue;
    }
    setAge(value) {
        if (value > 0 && value < 110) {
            this.#ageValue = value;
        }
    }
}

const tom = new User("Tom", 32);
console.log(tom.getAge());

tom.setAge(-12);
console.log(tom.getAge());


class Person {
    #ageValue = 1;
    constructor(name, age) {
        this.name = name;
        this.setAge(age);
    }

    getAge() {
        return this.#ageValue;
    }
    setAge(value) {
        if(value > 0 && value < 110) {
            this.#ageValue = value;
        }
    }
}

const mike = new Person("Mike", 25);
console.log(mike.getAge());

mike.setAge(32);
console.log(mike.getAge());


class Person {
    #ageValue = 1;

    constructor(name, age) {
        this.name = name;
        this.setAge(age);
    }

    getAge() {
        return this.#ageValue;
    }
    setAge(value) {
        if (value > 0 && value < 110) {
            this.#ageValue = value;
        }
    }
}

const tom = new Person("Tom", 26);
console.log(tom.getAge());

tom.setAge(-15);
console.log(tom.getAge());


class User {
    #ageValue = 1;

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    set age(value) {
        console.log(`Get ${value}`);
        if (value > 0 && value < 110) {
            this.#ageValue = value;
        }
    }

    get age() {
        return this.#ageValue;
    }
}

const andrew = new User("Andrew", 37);
console.log(andrew.age);

andrew.age = -15;
console.log(andrew.age);


class Users {
    #ageValue = 1;

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    set age(value) {
        console.log(`Get ${value}`);
        if (value > 0 && value < 110) {
            this.#ageValue = value;
        }
    }

    get age() {
        return this.#ageValue;
    }
}

const niki = new Users("Niki", 25);
console.log(niki.age);

const pavel = new Users("Pavel", 17);
pavel.age = 23;
console.log(pavel.age);


class Person {
    #age = 1;
    #name;

    constructor(name, age) {
        this.#name = name;
        this.age = age;
    }

    get name() {
        return this.#name;
    }
    set age(value) {
        if (value > 0 && value < 110) {
            this.#age = value;
        }
    }
    get age() {
        return this.#age;
    }
}

const mike = new Person("Mike", 34);
console.log(mike.name);

mike.name = "Bob";
console.log(mike.name);


class User {
    #age = 1;
    #name;

    constructor(name, age) {
        this.#name = name;
        this.#age = age;
    }

    get name() { return this.#name; }
    set age(value) {
        if(value > 0 && value < 110) {
            this.#age = value;
        }
    }
    get age() {
        return this.#age;
    }
}

const tom = new User("Tom", 26);
console.log(tom.name);
console.log(tom.age);

tom.age = 27;
console.log(tom.age);

tom.name = "Pavel";
console.log(tom.name);


class Person {
    #id;

    constructor(name, age, id) {
        this.name = name;
        this.age = age;
        this.#id = id;
    }

    set id(value) {
        return this.#id = value;
    }
    print() {
        console.log(`id: ${this.#id}; Name: ${this.name}; Age is ${this.age}`);
    }
}

const tom = new Person("Tom", 25, 1);
tom.print();
tom.id = 55;
tom.print();
console.log(tom.id);



class Function {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

const nik = new Function("Nikita", "Smith");
console.log(nik.fullName);


class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName() { return `${this.firstName} ${this.lastName}`; }
    set fullName(value) {
        [this.firstName, this.lastName] = value.split(" ");
    }
}

const andrew = new User("Andrew", "Maikal");
console.log(andrew.fullName);
andrew.fullName = "Andrew Jeferson";
console.log(andrew.fullName);
console.log(andrew.firstName)
console.log(andrew.lastName)
*/



///Наследование
/*
class Person {
    name;
    age;

    print() {
        console.log(`Name is ${this.name}; Age is ${this.age}`);
    }
}

class Employee {
    name;
    age;
    company;

    print() {
        console.log(`Name is ${this.name}; Age is ${this.age}`);
    }
    work() {
        console.log(`${this.name} works in ${this.company}`);
    }
}

const tom = new Person();
tom.name = "Tom";
tom.age = 26;

const bob = new Employee();
bob.name = "Bob";
bob.age = 27;
bob.company = "Microsoft";

tom.print();
bob.print();
bob.work();

///Применим наследование
class Person {
    name;
    age;

    print() {
        console.log(`Name is ${this.name}; Age is ${this.age}`);
    }
}

class Employee extends Person {
    company;

    work() {
        console.log(`${this.name} works in ${this.company}`);
    }
}

const tom = new Person();
tom.name = "Tom";
tom.age = 26;

const bob = new Employee();
bob.name = "Bob";
bob.age = 27;
bob.company = "Microsoft";

tom.print();
bob.print();
bob.work();


class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    print() {
        console.log(`Name: ${this.name}; Age: ${this.age}`);
    }
}

class Employee extends Person {
    company;

    work() {
        console.log(`${this.name} work in ${this.company}`);
    }
}

const din = new Person("Din", 25);
din.print();

const sam = new Employee("Sam" , 28);
sam.company = "Google";
sam.print();
sam.work();


class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    print() {
        console.log(`Name: ${this.name}; Age: ${this.age}`);
    }
}

class Employee extends Person {
    constructor(name, age, company) {
        super(name, age);
        this.company = company;
    }

    work() {
        console.log(`${this.name} works in ${this.company}`);
    }
}

const tom = new Person("Tom", 34);
tom.print();

const sam = new Employee("Sam", 25, "Google");
sam.print();
sam.work();


class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    print() {
        console.log(`Name: ${this.name}; Age: ${this.age}`);
    }
}

class Employee extends Person {
    constructor(name, age, company) {
        super(name, age);
        this.company = company;
    }

    print() {
        console.log(`Name: ${this.name}; Age: ${this.age}`);
        console.log(`Company: ${this.company}`);
    }
    work() {
        console.log(`${this.name} works in ${this.company}`);
    }
}

const sam = new Employee("Sam", 27, "Google");
sam.print();


class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    print() {
        console.log(`Name: ${this.name}; Age: ${this.age}`);
    }
}

class Employee extends Person {
    constructor(name, age, company) {
        super(name, age);
        this.company = company;
    }

    print() {
        super.print();
        console.log(`Company: ${this.company}`);
    }
    work() {
        console.log(`${this.name} works in ${this.company}`);
    }
}

const sam = new Employee("Sam", 25, "Google");
sam.print();


class Person {
    #name;

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    print() {
        console.log(`Name: ${this.#name} ; Age: ${this.age}`);
    }
}

class Employee extends Person {
    constructor(name, age, company) {
        super(name, age);
        this.company = company;
    }

    print() {
        super.print();
        console.log(`Company: ${this.company}`);
    }
    work() {
        console.log(`${this.#name} works in ${this.company}`);
    }
}
*/