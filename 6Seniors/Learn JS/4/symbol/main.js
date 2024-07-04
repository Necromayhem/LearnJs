"use strict"

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



let id = Symbol("id");
let user = {
  [id]: 123
};

let clone = Object.assign({}, user);


console.log( clone ); 










