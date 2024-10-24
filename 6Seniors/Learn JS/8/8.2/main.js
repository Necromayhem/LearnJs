// F.prototype

// let animal = {
//     eats: true
// };

// function Rabbit(name){
//     this.name = name;
// }

// Rabbit.prototype = animal;

// let rabbit = new Rabbit("White Rabbit");

// console.log( rabbit.eats ); // true


// Установка Rabbit.prototype = animal буквально говорит интерпретатору следующее:"При создании объекта через new Rabbit() запиши ему animal в [[Prototype]]".

// Если после создания свойство F.prototype изменится(F.prototype = <другой объект>), то новые объекты, созданные с помощью new F, будут иметь в качестве [[Prototype]] другой объект, а уже существующие объекты сохранят старый.


// F.prototype по умолчанию, свойство constructor

// У каждой функции(за исключением стрелочных) по умолчанию уже есть свойство "prototype". 
// По умолчанию "prototype" - объект с единственным свойством constructor, которое ссылается на функцию-конструктор.
// Вот такой: 

// function Rabbit(){}

// прототип по умолчанию
// Rabbit.prototype = { constructor: Rabbit };

// console.log(Rabbit.prototype.constructor == Rabbit); // true


// Можно использовать свойство constructor существующего объекта для создания нового:

function Rabbit(name){
    this.name = name;
    console.log(name);
}

let rabbit = new Rabbit("White Rabbit");

let rabbit2 = new rabbit.constructor("Black Rabbit");



