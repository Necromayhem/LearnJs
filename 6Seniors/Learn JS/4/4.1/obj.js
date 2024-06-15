"use strict"

// let user = new Object();


// let user = {
//     name: 'Alex',
//     age: 26,
//     city: 'London',
//     isStudent: false,
// };

// console.log(user.age); // Обращение через точку
// console.log(user);

// delete user.isStudent; // Удаление свойства
// console.log(user);

// user.height = 185;
// user['like beer'] = false;  // Добавление новых свойств
// console.log(user);

// let key = prompt("Что вы хотите узнать о пользователе?", "name");
// alert(user[key]);



// let phone = prompt("Какой телефон купить?", "");
// let buy = {
//     [phone]: 10,
// };
// console.log(buy);
// document.write(JSON.stringify(buy));




// let currency = prompt("Валюта?", "");
// let wallet = {};

// wallet[currency] = prompt("А сколько", "");
// console.log(wallet);



// let fruit = prompt("Фрукт", "");
// let buy = prompt("Сколько", "")

// let bag = {
//     ['Купить ' + fruit]: buy
// };

// document.write(JSON.stringify(bag));



// let user = {
//     age: 30,
//     name: "Oleg",
// }

// console.log("city" in user);
// console.log("age" in user);      // Проверка существования свойства



// let user = {
//     name: "Alex",
//     age: 26,
//     city: "London",
//     "like beer": false,
// };

// for(let key in user) {
//     console.log(key);
//     console.log(user[key]);
// }


// Homework

// let user = {};
// user.name = "John";
// user.surname = "Smith";
// console.log(user);

// user.name = "Pete";
// console.log(user);

// delete user.name;
// console.log(user);



// let schedule = {};
// schedule["8:30"] = "get up";


// let empty = function(schedule) {
//     if ("8:30" in schedule){
//         return false
//     } else{
//         return true
//     }
// }

// console.log(empty(schedule));





// let sum = 0;

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// }

// for(let key in salaries) {
//     sum += salaries[key]
// }

// console.log(sum);



let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  
  let multiplyNumeric = function (menu){
    for(let key in menu) {
        if (typeof menu[key] === 'number') {
            menu[key] *= 2
        } 
        
    } 
  }

  multiplyNumeric(menu);
  console.log(menu);






























