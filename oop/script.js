class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHi() {
        console.log(`Hello, my name's ${this.name}`);
        console.log(`You know my name, share fact about me, I'm ${this.age} years`);
    }
}

const alex = new Person("Alex", 25);
alex.sayHi();

class Employee extends Person {
    constructor(name, age, salary) {
        super(name, age);
        this.salary = salary;
    }

    eSalary() {
        console.log(`${this.name} has $${this.salary} dollars.`);
    }
}

class Manager extends Employee {
    constructor(name, age, salary, department) {
        super(name, age, salary);
        this.department = department;
    }
}

const alexSal = new Employee("Alex", 26, 2000);
alexSal.sayHi();
alexSal.eSalary();


class Timer {
    maxInterval;
    minInterval;
    currentTimer;
    interval;
    count

    constructor(interval) {
        this.validateTimeout(interval);
        this.interval = interval;
        this.maxInterval = 1000;
        this.minInterval = 100;
        this.count = 1;
    }

    start() {
        if (this.currentTimer) {
            console.log('Timer already started');
            return;
        }

        this.currentTimer = setInterval(() => {
            console.log(`Tick ${this.count++}`);
        }, this.interval);
    }

    stop() {
        if (!this.currentTimer) {
            console.log('Timer already stopped');
            return;
        }

        this.clear();
    }

    reset() {
        this.stop();
        this.start();
    }

    clear() {
        clearInterval(this.currentTimer);
        this.count = 1;
        this.currentTimer = undefined;
    }

    validateTimeout(timeout) {
        if (timeout < this.minInterval || timeout > this.maxInterval) {
            throw new Error(`Invalid interval! The allowed values are in the range from ${this.minInterval} to ${this.maxInterval}`);
        }
    }
}

const timer = new Timer(500);

timer.start();
timer.reset();
timer.stop();


class Transport {
    type;
    model;

    constructor(type, model) {
        this.type = type;
        this.model = model;
    }

    // method
    move();
}

class Car extends Transport {
    constructor(type, model) {
        super(type, model)
    }

    move() {
        console.log('Moving on the road');
    }
}

class Plane extends Transport {
    constructor(type, model) {
        super(type, model)
    }

    move() {
        console.log('Flying in the sky');
    }
}

class Ship extends Transport {
    constructor(type, model) {
        super(type, model)
    }

    move() {
        console.log('Moving on the water');
    }
}

