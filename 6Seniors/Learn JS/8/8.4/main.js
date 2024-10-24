// Методы прототипов, объекты без свойства __proto__


// Свойство __proto__ считается устаревшим, и по стандарту оно должно поддерживаться только браузерами.

// Современные методы это:

// Object.create(proto[, descriptors]) - создаёт пустой объект со свойством [[Prototype]], указанным как proto, и необязательными дискрипторами свойств descriptors.

// Object.getPrototypeOf(obj) - возвращает свойство [[Prototype]] объекта obj.

// Object.setPrototypeOf(obj) - устанавливает свойство [[Prototype]] объекта obj как proto.

// Эти методы нужно использовать вместо __proto__.

// Например: 

let animal = {
    eats: true,
    jumps: true
};

// создаём новый объект с прототипом animal
let rabbit = Object.create(animal);

console.log(rabbit.eats); // true
console.log(Object.getPrototypeOf(rabbit) === animal);
console.log(Object.getPrototypeOf(rabbit)) // {eats: true, jumps: true}

Object.setPrototypeOf(rabbit, {}) //заменяем прототип объекта rabbit на {}

// У Object.create есть необязательный второй аргумент: дескрипторы свойств.
// Мы можем добавить дополнительное свойство новому объекту таким образом:

let user = {
    age: 27,
};

let person = Object.create(user, {
    name: {
        value: "Alex"
    }
});

console.log(person.name); // Alex
console.log(person.age); // 27

// Мы также можем использовать Object.create для "продвинутого" клониорвания объекта, более мощного, чем копирование в цикле for...in:

let clone = Object.create(Object.getPrototypeOf(person), Object.getOwnPropertyDescriptors(person));

console.log(clone); // {name: 'Alex'}
console.log(clone.age); // 27


let arr = Object.create(Array.prototype)

arr.push(1, 2, 3, 4);
console.log(arr);






