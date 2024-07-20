"use strict"


//для создания уникальных ключей внутри объектов. Когда объекты действительно большие. Либо используются при создании библиотеки для уникальных имён и не допущения конфликта имён снаружи библиотеки

// let id1 = Symbol("id");
// let id2 = Symbol("id");
// console.log(id1 == id2);



// let id = Symbol("id");
// // alert(id);   // Error
// // alert(id.toString());
//  alert(id.description);


// let user = {
//     name: "Alex"
// }

// let id = Symbol("id")

// user[id] = 1;

// alert(user[id])



// let id = Symbol("id");
// let user = {
//   [id]: 123
// };

// let clone = Object.assign({}, user);


// console.log( clone ); 


// let user = {
//   name: "Вася"
// }

// let id = Symbol("id");

// user[id] = 1;

// console.log(user[id]);
// console.log(user);


// let id = Symbol('qqq')

// let user = {
//   name: "Вася",
//   [id]: 123 
// }

// console.log(user);


// let symbol = Symbol('mySymbol');
// console.log(typeof symbol);
// console.log(symbol);

// let symbol2 = Symbol('mySymbol'); // false

// console.log(symbol === symbol2);



// Через for

// let symbol = Symbol.for('mySymbol');
// let symbol2 = Symbol.for('mySymbol');

// console.log(symbol === symbol2); // true
// console.log(symbol); // Symbol(mySymbol)

// let symbolName = Symbol.keyFor(symbol)
// console.log(symbolName); // mySymbol




let person = {
  name: 'Jack',
  age: 20,
  [Symbol.for('password')]: 'Jack20',
  [Symbol.for('nickname')]: 'Freeman',
}

// console.log(person);

// console.log(person[Symbol.for('password')]); // Jack20


console.log(Object.getOwnPropertySymbols(person)); // массив [ Symbol(password), Symbol(nickname) ]


















