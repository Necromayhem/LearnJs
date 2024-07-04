"use strict"

// const userInfo = {
// 	name: "Вася",
// 	age: 30,
// }
// console.log(userInfo);


// let userInfo = {
// 	name: "Вася",
// 	age: 30,
// 	"58": 'Значение свойства'
// }
// console.log(userInfo[58]);

// let userInfo = {
// 	name: "Вася",
// 	age: 30
// }
// let user = userInfo;
// user.age = 45;

// console.log(userInfo.age);

// let userInfo = {
// 	name: "Вася",
// 	age: 30,
// 	showInfo() {
// 		console.log(`${this.name}`);
// 	}
// }
// let user = userInfo;
// userInfo = null;
// user.showInfo();


// let userInfo = {
// 	name: "Вася",
// 	age: 30,
// }
// for (const key in userInfo) {
// 	const value = userInfo[key];
// 	console.log(value);
// }


// let userInfo = {
// 	name: "Вася",
// 	age: 30,
// 	address: {
// 		city: "Uzhhorod"
// 	}
// }
// for (const key in userInfo.address) {
// 	console.log(userInfo.address[key]);
// }


// const userInfo = {
// 	name: "Вася",
// 	age: 30,
// 	"likes js": true
// }
// console.log(userInfo["likes js"]);


let userInfo = {};
userInfo.name = 'Вася';
userInfo.age = 30;
console.log(userInfo);
userInfo.name = 'Лена';
console.log(userInfo);
delete userInfo.name;
console.log(userInfo);


