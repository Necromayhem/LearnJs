// JSON

let user = {
    name: 'John',
    age: 30,

    toString(){
        return `{name: "${this.name}", age: ${this.age}}`
    }
}

// alert(user); // {name: "John", age: 30
//JavaScript автоматически вызывает метод toString() объекта user


// JSON.stringify

// JSON.stringify для преобразования объектов в JSON.
// JSON.parse для преобразования JSON обратно в объект.

let student = {
    name: 'John',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    wife: null,
};

let json = JSON.stringify(student)
// console.log(typeof json); // string
// console.log(json); // JSON-форматированный или сериализованный объект


// console.log(JSON.stringify(1)); // 1

// Причина, по которой число 1 в результате JSON.stringify(1) остается без кавычек, заключается в том, что JSON (JavaScript Object Notation) является форматом для представления данных, который оптимизирован для простых типов данных, таких как числа, строки, булевы значения и т.д.
// Когда вы вызываете JSON.stringify() с числовым значением, JSON-преобразователь распознает, что это число, и поэтому не оборачивает его в кавычки. Это отличается от строковых значений, которые обязательно оборачиваются в кавычки, чтобы отобразить их как текст.

// console.log(JSON.stringify(true)); // true
// console.log(JSON.stringify('test')); // "test"


let hello = {
    sayHi(){ // будет пропущено
        alert("Hello");
    },
    [Symbol("id")]: 123, // будет пропущено
    something: undefined // будет пропущено
};

// alert(JSON.stringify(hello)) // {}


// вложенные объекты поддерживаются и конвертируются автоматически:

let meetup = {
    title: 'Conference',
    room: {
        number: 23,
        participants: ['alex', 'ann']
    }
};

// alert(JSON.stringify(meetup))
// console.log(JSON.stringify(meetup));


// REPLACER

let obj = {a:1, b:2, c:3, d:{e:[1, 2, 3]}};

let replaced = JSON.stringify(obj, function replacer(key, value){
    if(typeof value === 'number'){
        return value + 1;
    }
    return value
}, 2);

// console.log(replaced);


// toJSON

let test = {
    name: 'Alex',
    nested: {
        test: 'not in output',
        toJSON: () => 'test'
    }
};

// console.log(JSON.stringify(test));
// {"name":"Alex","nested":"test"}


// JSON.parse

// синтаксис
// let value = JSON.parse(str[, reviver]);
// reviver - необязательная ф-ция, которая будет вызываться для каждой пары(ключ, значение) и может преобразовывать значение.


let numbers = "[0, 1, 2, 3]";

numbers = JSON.parse(numbers);

// console.log(numbers); // [ 0, 1, 2, 3 ]

let users = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';

users = JSON.parse(users);

// console.log(users);


// Использование reviver

let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

let meet =  JSON.parse(str, function(key, value){
    if(key == 'date') return new Date(value);
    return value;
});

// console.log(meet.date.toLocaleString()); // 30.11.2017, 15:00:00





