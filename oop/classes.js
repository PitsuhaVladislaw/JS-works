class Animal {
    constructor(type) {
        this.type = type;
    }

    run(direction) {
        return `RUN ${direction}`
    }
}

class Person extends Animal {
    #card = '0000 111';

    static region = 'Asia';

    static help() {
        console.log('htlp func', this)
    }

    get CardNumber() {
        return this.#card.split(' ')[0]
    }

    set CardNumber(value) {
        this.#card = value
    }

    constructor(name, age) {
        super('human');

        this.name = name;
        this.age = age;
    }

    print() {
        return `${this.name}, ${this.age}`
    }

    runDirection(direction) {
        //some logig
        return super.run(direction);
    }
}

const alex = new Person("Alex", 20);
console.log(alex.runDirection('Home'));
console.log(alex.runDirection('to some point'));
console.log(alex.print());
console.log(alex.CardNumber)

alex.CardNumber = '1111';
console.log(alex.CardNumber);
console.log(Person.help());
console.log(Person.region);