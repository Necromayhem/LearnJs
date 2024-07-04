'use strict'

// let userInfo = {};
// let userInfo = new Object();




// let firstPart = "beer";
// let firstPart = "like beer";

// let userInfo = {
//     name: "Ivan",
//     age: 30,
//     "like JS": true,
//     // ["like " + firstPart]: false,
//     [firstPart]: false,
// }

// console.log(userInfo); // { name: 'Ivan', age: 30, 'like JS': true, 'like beer': false }
// console.log(userInfo.name); // Ivan
// console.log(userInfo.age); // 30
// console.log(userInfo,userInfo.age ); //  { name: 'Ivan', age: 30, 'like JS': true, 'like beer': false } 30
// console.log(userInfo['like JS']); // true
// console.log(userInfo["like beer"]); // false
// console.log(userInfo[firstPart]); // false

// let key = "name";
// console.log(userInfo[key]); // Ivan




// let id = Symbol("id")
// let userInfo = {
//     name: "Ivan",
//     age: 30,
//     [id]: "Некое значение",
// }

// console.log(userInfo);



// let userInfo = {
//     name: "Вася",
//     age: 30,
//     address: {
//         city: "Moscow",
//         street: "red",
//     }
// }

// console.log(userInfo);
// console.log(userInfo.address);
// console.log(userInfo.address.city); 


// function makeUserInfo(name, age){
//     return{
//         keyName: name,
//         keyAge: age,
//     }
// }

// let user = makeUserInfo("Ivan", 30)
// console.log(user);


// function makeUserInfo(name, age){
//     return{
//         name,
//         age,
//         "like JS": true,
//     }
// }

// let user = makeUserInfo("Ivan", 30)
// console.log(user);




// let user1 = {
//     age: 30,
//     name: "ALex",
//     city: "Azov",
//     street: "Red",
//     "like JS": true,
//     "like beer": false,
// };

// // let user2 = Object.assign({}, user1)

// let user2 = {
//     a: 1,
//     b: 2,
// };

// user2 = Object.assign({}, user1)

// console.log(user2);



// let userInfo = {
//     name: "Вася",
//     age: 30,
//     address: {
//         // city: "Azov",
//         street: "red",
//     }

// }

// // console.log(userInfo.address.city);
// console.log(userInfo?.address?.city);


// let userInfo = {
//     name: "Вася",
//     age: 30,
//     address: {
//         city: "Azov",
//         street: "red",
//     }

// }

// if("address" in userInfo){
//     console.log(userInfo.name);
// }



// let userInfo = {
//     name: "Вася",
//     age: 30,
//     address: {
//         city: "Azov",
//         street: "Freedom",
//     }
// }

// for (let key in userInfo){
//     console.log(key);
//     console.log(userInfo[key]);
// }

// for (let key in userInfo.address){
//     console.log(key);
//     console.log(userInfo.address[key]);
// }
    



// let userInfo = {
//     name: "Вася",
//     age: 30,
//     address: {
//         city: "Azov",
//         street: "Freedom",
//     },
//     showInfo: function(){
//         console.log(`${userInfo.name}, ${userInfo.age} лет. Адрес: г.${userInfo.address.city}, улица ${userInfo.address.street}`);
//     }
// }

// userInfo.showInfo()




// let userInfo = {
//     name: "Вася",
//     age: 30,
//     address: {
//         city: "Azov",
//         street: "Freedom",
//     },
//     showInfo: function(){
//         console.log(`${this.name}, ${this.age} лет. Адрес: г.${this.address.city}, улица ${this.address.street}`);
//     }
// }

// userInfo.showInfo()



function UserInfo(name, age, city, likeJS){
    this.name = name;
    this.age = age;
    this.city = city;
    this.likeJS = likeJS;
}


console.log(new UserInfo('Вася', 35, "Azov", false));



