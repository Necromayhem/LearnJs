// на понимание prototype

// // 1
console.log((10).__proto__ === Number.prototype); 
// true +

// // 2
const a = 99999n;
console.log(a.__proto__ === BigInt.prototype);
// true +

// // 3
const b = true;
console.log(b.__proto__ === Boolean.__proto__);
// false -
// console.log(Boolean.__proto__ === Function.prototype) класс создал при помощи функции

// // 4
const c = { name: "Alex", age: 27};
console.log(c.__proto__.proto == undefined );
// true - // null == undefined(true), null === undefined(false)
// n => __proto__ => Object.prototype => __proto__ => null

// // 5
const d = Symbol('A');
console.log(d.prototype === Symbol.prototype);
// false +

// // 6
function foo(){};
class Person{}
console.log(foo.__proto__ === Person.__proto__);
// true +

// // 7
function bar(){}
console.log(bar.__proto__.__proto__ === Object.prototype);
// true +

// // 8
const bar = () => {};
function foo(){};
console.log(bar.prototype === foo.prototype);
// false +
// у стрелки нет prototype

// // 9
function bar(){};
function foo(){};
console.log(bar.prototype === foo.prototype);
// false - 
// два разных объекта

// // 10
const e = 10;
console.log(e.__proto__.constructor.prototype.__proto__.constructor.name === "Number");
// false +
// n ==> __proto__ => Number.prototype => Function.prototype => __proto__ => Object.prototype => constructor => name => Object
// Number.prototype.constructor - это function

// // 11
const person = { name: "Alex", age: 27};
console.log(person.hasOwnProperty('toString'));
// false +



// // 12
const person = { name: "Alex", age: 27};
console.log('toString' in person);
// true +