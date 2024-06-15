"use strict"


// let user = {
//     name: "Alex",
//     age: 26,
// }


// user.sayHi = () => alert("Привет!");


// // user.sayHi()
// // console.log(user);


// function bye(){
//     alert("Пока");
// } 

// user.sayBye = bye

// // user.sayBye()
// // console.log(user);



// let user = {
//     name: "Alex",
//     age: 30,
//     sayHi(){
//         alert(`Привет ${this.name}`)
//     }
// }

// user.sayHi();


// let user = {name: "Alex"};
// let admin = {name: "Oleg"};

// function sayHi() {
//     alert(this.name)
// }


// user.f = sayHi;
// admin.f = sayHi;


// user.f();




let calculator = {
    read() {
        this.a = prompt("Введите число 1", "");
        this.b = prompt("Введите число 1", "");
    },
    sum() {
        return this.a + this.b
    },
    mul() {
        return this.a * this.b;
      }

}

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
















