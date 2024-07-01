'use strict'

// let userInfo = {};
// let userInfo = new Object();




// let firstPart = "beer";
let firstPart = "like beer";

let userInfo = {
    name: "Ivan",
    age: 30,
    "like JS": true,
    // ["like " + firstPart]: false,
    [firstPart]: false,
}

console.log(userInfo); // { name: 'Ivan', age: 30, 'like JS': true, 'like beer': false }
console.log(userInfo.name); // Ivan
console.log(userInfo.age); // 30
console.log(userInfo,userInfo.age ); //  { name: 'Ivan', age: 30, 'like JS': true, 'like beer': false } 30
console.log(userInfo['like JS']); // true
console.log(userInfo["like beer"]); // false
console.log(userInfo[firstPart]); // false

let key = "name";
console.log(userInfo[key]); // Ivan

    




