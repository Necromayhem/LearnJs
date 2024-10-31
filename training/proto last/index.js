// prototype задачи

// const person = { name: 'Alex', age: 22 };

// console.log(person); // {name: 'Alex', age: 22}
// хочу преобразовать объект к строке
// console.log(person.toString()); // [object Object]

// console.log(person.__proto__);
// у null,undefined нет proto

// for(let key in person) console.log(key); // name, age
// ключи в __proto__ неперечисляемые через for...in

// person => __proto__ => toString()
// console.log(Object.getOwnPropertyNames(person.__proto__));

// toString() попадает в __proto__ через вызов constructor
// constructor есть у classes, function

// console.log(Object.getOwnPropertyNames(person.__proto__.constructor));
// console.log(person.__proto__.constructor.name); // Object
// person - дочерний элемент от класса object, то есть класс Object создал объект person

// как это проверить

// console.log(person instanceof Object); // true

// а как метод toString() попал в __proto__

// console.log(Object.getOwnPropertyNames(person.__proto__.constructor.prototype));

// когда создаётся экземпляр объекта, все свойства и методы, которые лежат в prototype связываются с ключом __proto__, который есть у экземпляра объекта.

//  Тогда:
// console.log(person.__proto__ === Object.prototype); // true
// console.log(person.__proto__.constructor === Object); // true

// С помощью каких классов ещё можно создавать объекты:
// String, Array, Function, Symbol, Object, BigInt, Boolean

const isChecked = true;

// console.log(isChecked.constructor === Boolean); // true
// console.log(isChecked.__proto__ === Boolean.prototype); // true

const arr = [1,2,3]

// console.log(arr.__proto__ === Array.prototype); // true
// console.log(arr.constructor === Array); // true
// console.log(arr.map === Array.prototype.map); // true

// const foo = function(){};
// const bar = () => {};

// // console.log(foo.__proto__ === Function.prototype); // true
// // console.log(foo.constructor === Function); // true
// console.log(typeof new foo())
// console.log(typeof new bar())
// console.log(foo.__proto__ === bar.__proto__); // true

// // но у каждого класса и функции есть своё отдельное независимое свойство prototype

// console.log(foo.prototype === bar.prototype); // false
// это два разных объекта, но произошли они от одного класса Function, а прототипы этих объектов будут отличаться


// стрелочная функция

const foobar = () => {}

// console.log(foobar.__proto__ === Function.prototype); // true
// console.log(foobar.prototype); // undefined
// У стрелочной функции нет prototype

// const person = { name: 'Alex', age: 22 };
// console.log(person.__proto__.__proto__); // null

// console.log(person.__proto__ === Object.prototype); // true
// person => __proto__ => Object.prototype => __proto__ => null



