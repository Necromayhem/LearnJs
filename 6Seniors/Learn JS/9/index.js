// Классы

const b = true;
console.log(b.__proto__ === Boolean.__proto__);

function foo(){};
class Person{}
console.log(foo.__proto__ === Person.__proto__);
console.log(Person.__proto__ === Function.prototype);
console.log(typeof b.proto);