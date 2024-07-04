"use strict"



// let user = {
//     name: "Alex",
//     age: 26,

//     [Symbol.toPrimitive](hint) {
//         alert(`hint: ${hint}`);
//         return hint == "string" ? `{name: "${this.name}"}` : this.age;
//     }
// }



// alert(user);
// alert(+user);
// alert(user + 500);






// let user = {
//     name: "Alex",
//     age: 26,

//     toString() {
//         return `{name: "${this.name}"}`;
//       },

//       valueOf() {
//         return this.age;
//       }
// }



// alert(user);
// alert(+user);
// alert(user + 500);










// let user = {
// name: "Alex",
// age: 15,
// toString() {
//     return this.name
// }

// }



// let userList = {};
// userList[user] = 'Azov';


// console.log(userList);


let user = true;
// alert(typeof user)

user = String(user);
alert(typeof user);
alert(user);









