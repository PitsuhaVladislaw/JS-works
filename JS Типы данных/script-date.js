/*
let now = new Date();
console.log(now);

let Jan01_1970 = new Date(0);
console.log(Jan01_1970);

let Jan02_1970 = new Date(24 * 3600 * 1000);
console.log(Jan02_1970);


let Dec31_1969 = new Date(-24 * 3600 * 1000);
console.log(Dec31_1969);

let date = new Date("2017-01-26");
console.log(date);

let date = new Date(2011, 0, 1, 2, 3, 4, 567);
console.log(date);

let date = new Date();

console.log(date.getFullYear());
console.log(date.getHours());

console.log(date.getTime());

console.log(new Date().getTimezoneOffset())


let today = new Date();

today.setHours(0);
console.log(today);

today.setHours(0, 0, 0, 0);
console.log(today);;

let date = new Date(2013, 0, 32); // 32 Jan 2013 ?!?
console.log(date);


let date = new Date(2016, 1, 26);
date.setDate(date.getDate() + 2);

console.log(date);


let time = new Date();
time.setSeconds(time.getSeconds() + 70);

console.log(time);


let start = new Date();

for(let i = 0; i < 100000; i++) {
    let doSomething = i * i * i;
}

let end = new Date();

console.log(end - start);


let start = Date.now();

for (let i = 0; i < 100000 ; i++) {
    let doSomething = i * i * i;
}

let end = Date.now();

console.log(end - start);


function diffSubtract(date1, date2) {
    return date2 - date1;
}

function diffGetTime(date1, date2) {
    return date2.getTime() - date1.getTime();
}


function bench(func) {
    let date1 = new Date(0);
    let date2 = new Date();

    let start = Date.now();
    for (let i = 0; i < 100000; i++) func(date1, date2)
    return Date.now - start; 
}

let time1 = 0;
let time2 = 0;

for (let i = 0; i < 10; i++) {
    time1 += bench(diffSubtract);
    time2 += bench(diffGetTime);
}

console.log('Итоговое время diffSubtract: ' + time1);
console.log('Итоговое время diffGetTime: ' + time2);
*/



///Формат JSON, метод toJSON



/*

let user = {
    name: "John",
    age: 27,

    toString() {
        return `name: ${this.name}, age: ${this.age}`;
    }
};

console.log(user)


let student = {
    name: "Mike",
    age: 25,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    wife: null
};

let json = JSON.stringify(student);

console.log(typeof json);
console.log(json);


console.log(JSON.stringify(1));
console.log(JSON.stringify('test'));
console.log(JSON.stringify(true));
console.log(JSON.stringify([1, 2, 3]));


let user = {
    sayHi() {
        console.log("Hello");
    },
    [Symbol("id")]: 123,
    something: undefined
};

console.log(JSON.stringify(user))


let meetup = {
    title: "Conference",
    room: {
        number: 23,
        participants: ["john", "ann"]
    }
};

console.log(JSON.stringify(meetup));


let room = {
    number: 23
};

let meetup = {
    title: "Conference",
    participants: ["john", "ann"]
};

meetup.place = room;
room.occupiedBy = meetup;

console.log(JSON.stringify(meetup));
console.log(JSON.stringify(room));


///let json = JSON.stringify(value, [replacer, space])

let room = {
    number: 23
};

let meetup = {
    title: "Conference",
    participants: [{name: "John"}, {name: "Ann"}],
    place: room
};

room.occupiedBy = meetup;

console.log(JSON.stringify(meetup, ['title', 'participants', 'name', 'place', 'number']));

console.log(JSON.stringify(meetup, function(key, value) {
    console.log(`${key}: ${value}`);
    return (key === 'occupiedBy') ? undefined : value;
}));


let user = {
    name: "Mike",
    age: 20,
    roles: {
        isAdmin: false,
        isEditor: true
    }
};

console.log(JSON.stringify(user, null, 2));
console.log(JSON.stringify(user, null, 4));


let room = {
    number: 23
};

let meetup = {
    title: "Conference",
    date: new Date(Date.UTC(2017, 0, 1)),
    room
};

console.log(JSON.stringify(meetup));


let room = {
    number: 23,
    toJSON() {
        return this.number;
    }
}

let meetup = {
    title: "Conference",
    room
};

console.log(JSON.stringify(room));
console.log(JSON.stringify(meetup));


///let value = JSON.parse(str, [reviver]);

let numbers = "[1, 2, 3, 4, 5]";

numbers = JSON.parse(numbers);

console.log(numbers);


let user = '{"name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';

user = JSON.parse(user);

console.log(user);


let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

let meetup = JSON.parse(str);

console.log(meetup);
console.log(meetup.date.getTime());


let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

let meetup = JSON.parse(str, function(key, value) {
    if (key === 'date') return new Date(value);
    
    return value;
});

console.log(meetup.date.getDate());


let schedule = `{
  "meetups": [
    {"title":"Conference","date":"2017-11-30T12:00:00.000Z"},
    {"title":"Birthday","date":"2017-04-18T12:00:00.000Z"}
  ]
}`;

schedule = JSON.parse(schedule, function(key, value) {
    if(key === 'date') return new Date(value);

    return value;
});

console.log(schedule);
console.log(schedule.meetups[1].date.getDate());


let user = {
    name: "John",
    age: 35
};

let json = JSON.stringify(user);

console.log(json);
console.log(JSON.parse(json));


let room = {
    number: 23
};

let meetup = {
    title: "Conference",
    occupied: [{name: "Mike"}, {name: "Anna"}],
    place: room
};

room.occupied = meetup;
meetup.self = meetup;

console.log(JSON.stringify(meetup, function replacer(key, value) {
    return (key !== '' && value === meetup) ? undefined : value;
}));
*/


///Методы массивов

/*

let arr = ["I", "go", "home"];

delete arr[1];

console.log(arr[1]);

console.log(arr.length);

let arr = ["I", "go", "home"];

arr.splice(1, 1);

console.log(arr)

let arr = ["Я", "изучаю", "JavaScript", "прямо", "сейчас"];

///arr.splice(0, 3);

let removed = arr.splice(0, 2);

console.log(arr);
console.log(removed);

let arr = ["Я", "изучаю", "JavaScript"];

arr.splice(2, 0, "сложный", "язык");

console.log(arr);


let arr = [1, 2, 3, 4];

console.log(arr.slice(1, 3));
console.log(arr.slice(-2));


let arr = ["t", "e", "s", "t"];

console.log(arr.concat([1, 2]));
console.log(arr.concat([3, 4], [5, 6]));
console.log(arr.concat([3, 4], 5, 6));
*/


let array = [1, 2];

let arrayLike = {
    0: "что-то",
    1: "ещё",
    [Symbol.isConcatSpreadable]:true,
    length: 2
};

console.log(array.concat(arrayLike)); /// 1,2,[object Object]


let arr = ["Bilbo", "Gandalf", "Nazgul"];

arr.forEach((item, index, array) => {
    console.log(`${item} имеет позицию ${index} в ${array}`);
});