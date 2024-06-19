"use strict"


// function User(name){
//     this.name = name;
//     this.isAdmin = false;
// }

// let user = new User("Alex");

// console.log(user.name);
// console.log(user.isAdmin);



// function User(name, age, city, student = false) {
//     this.name = name;
//     this.age = age;
//     this.city = city;
//     this.isStudent = student;
// }

// let user1 = new User('Ann', 34, "Kazan",true);
// let user2 = new User('Egor', 29, "Rostov");
// let user3 = new User('Tom', 32, "London");

// console.log(user1);
// console.log(user2);
// console.log(user3);



// function BigUser() {
//     this.name = 'Alex';
//     return {name: "Godzilla"};
// }

// console.log(new BigUser().name);



// function User(name) {
//     this.name = name;
//     this.sayHi = () => {
//         console.log("Меня зовут " + this.name)
//     }
// }

// let Alex = new User("Alex")
// Alex.sayHi()


// function Calculator() {
//     this.read = function() {
//         this.num1 = +prompt('Введите число 1', '')
//         this.num2 = +prompt('Введите число 2', '');
//     },

//     this.sum = function() {
//         return this.num1 + this.num2
//     },
    
//     this.mul = function() {
//         return this.num1 * this.num2
//     }
    
    


// }

// let calculator = new Calculator();
// calculator.read();
// alert("Sum=" + calculator.sum());
// alert( "Mul=" + calculator.mul() );






function Accumulator(startingValue){
    this.value = startingValue;

    this.read = function() {
        let inputValue = +prompt("Введите значение", "")
        this.value += inputValue

        // this.value += +prompt('Сколько нужно добавить?', 0);    
    }

    
}


let accumulator = new Accumulator(1);
accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
accumulator.read(); // прибавляет введённое пользователем значение к текущему значению

alert(accumulator.value); 