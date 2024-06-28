"use strict"

const { forEach } = require("lodash");

// splice

// let arr = ["Azov","Rostov","London","Moscow","Barnaul",];

// arr.splice(0, 1, "NY") // [ 'NY', 'Rostov', 'London', 'Moscow', 'Barnaul' ]
// console.log(arr);



// slice

// let arr = ["t", "e", "s", "t"];

// console.log(arr.slice(1, 3)); // [ 'e', 's' ]




// Перебор: forEach


// let arr = ["Azov","Rostov","London","Moscow","Barnaul",];

// arr.forEach(i => console.log(i));




// indexOf/lastIndexOf и includes

// let arr = [1, 0, false];

// console.log(arr.indexOf(1));
// console.log(arr.indexOf(false));
// console.log(arr.indexOf(null)); 

// console.log(arr.includes(1));
// console.log(arr.includes(false));
// console.log(arr.includes(null));






// find и findIndex/findLastIndex и filter

// let users = [
//     {id: 1, name: "Вася", age: 30},
//     {id: 2, name: "Игорь", age: 45},
//     {id: 3, name: "Олег", age: 19},
//     {id: 3, name: "Олег", age: 19},
//     {id: 4, name: "Иван", age: 28},
//     {id: 5, name: "Виктор", age: 19},
//     {id: 6, name: "Анна", age: 19},
//     {id: 7, name: "Гриша", age: 19},
// ];

// let user = users.find(item => item.name == "Иван")
// let user2 = users.findIndex(item => item.name == "Вася")
// console.log(user);
// console.log(user2);


// let user = users.filter(item => item.age == 19)
// console.log(user);



// Sort

// let randomCity = [
//     'Дроадроус',
//     'Трафиа',
//     'Вредрард',
//     'Треса',
//     'Блуоплего',
//     'Аплепган',
//     'Сроре',
//     'Идуоцестер',
//     'Идриполис',
//     'Иклибург',
//     'Глесбург',
//     'Уксуимонт',
// ];

// let lengthNameCity = randomCity.map(item => item.length);
// console.log(lengthNameCity);

// randomCity.sort();
// console.log(randomCity);


// reverse

// let arr = ['1','2','3','4','5','6',]
// arr.reverse()
// console.log(arr);



// split и join


// let names = "Вася, Петя, Маша, Игорь, Артём, Олег, Игнат, Виктор, Ольга";

// let arr = names.split(', ', 5) // [ 'Вася', 'Петя', 'Маша', 'Игорь', 'Артём' ]

// for (let name of arr) {
//     console.log( `Сообщение получат: ${name}.` );
//   }

//   console.log(arr);


// let str = '123456789';
// console.log(str.split(''));



// let arr = ['Вася', 'Петя', 'Маша', 'Игорь', 'Артём', 'Олег', 'Игнат', 'Виктор', 'Ольга'];

// let str = arr.join('    ');
// console.log(str);




// reduce/reduceRight
























