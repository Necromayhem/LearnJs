// F.prototype

let animal = {
    eats: true
};

function Rabbit(name){
    this.name = name;
}

Rabbit.prototype = animal;

let rabbit = new Rabbit("Белый кролик");

// console.log(rabbit.eats); // true



// F.prototype по умолчанию, свойство constructor

// У каждой функци(кроме стрелочных) по усолчанию уже есть свойство "prototype". По умолчанию "prototype" - объект с единственным свойством constructor, которое ссылается на функцию-конструктор.

function Cat(name){
    this.name = name;
    console.log(name);
}

// let cat1 = new Cat("Барсик");
// let cat2 = new cat1.constructor("Макс");

// console.log(cat1.constructor == cat2.constructor); // true





// Создайте новый объект с помощью уже существующего


// Представьте, что у нас имеется некий объект obj, созданный функцией-конструктором – мы не знаем какой именно, но хотелось бы создать ещё один объект такого же типа.

// Можем ли мы сделать так?

//let obj2 = new obj.constructor();

// Приведите пример функции-конструктора для объекта obj, с которой такой вызов корректно сработает. И пример функции-конструктора, с которой такой код поведёт себя неправильно.

function User(name){
    this.name = name;
}

User.prototype = {};

let user = new User("Alex");
let user2 = new user.constructor("Egor");


console.log(user.name);// Alex
console.log(user2.name);// Egor

