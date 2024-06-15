"use strict"


// let user = {
//     name: "Alex",
//     age: 30,
//     city: "London",
//     isStudent: false,
//     'like beer': false,
// }

// let cloneUser = {}

// for(let key in user) {
//     cloneUser[key] = user[key]
// }

// cloneUser['like JS'] = true 

// console.log(cloneUser);




// let users = {};

// let user1 = { name1: "Alex"};
// let user2 = { name2: "Oleg"};
// let user3 = { name3: "Igor"};
// let user4 = { name4: "Viktor"};
// let user5 = { name5: "Anton"};


// Object.assign(users, user1, user2, user3, user4, user5);
// console.log(users);





// let user = {
//     name: "Egor",
//     age: 50,
//     city: "Ekb",
// }

// let userClone = Object.assign({}, user);

// userClone.isStudent = false;

// console.log(userClone);




//Глубокое клонирование


// let user = {
//     name: "Alex",
//     age: 26,
//     sizes: {
//         height: 185,
//         weight: 90,
//     },
//     adress: {
//         city: "Moscow",
//         street: "Red"
//     },
//     hobbies : ['bike', 'piano', 'painting'],
// };

// // console.log(user.sizes.height);

// let userClone = structuredClone(user);

// userClone.color = {
//     like: "red",
//     dontlike: "green",
// }

// console.log(userClone);












