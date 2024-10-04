

// ### Задача 1: Применение `call`
// Создай объект `person` с полями `firstName` и `lastName`, а также методом `getFullName`, который возвращает полное имя (например, "John Doe"). Используя `call`, вызови этот метод, передавая объект с именем и фамилией.


const person = {
  firstName: "John",
  lastName: "Doe",
  getFullName: function() {
    return `${this.firstName} ${this.lastName}`;
  }
};

const person2 = {
    firstName: "Вася",
    lastName: "Пупкин"
}

console.log(person.getFullName.call(person)); // John Doe
console.log(person.getFullName.call(person2)); // Вася Пупкин

// либо создать отдельную функцию

function sayHi(){
    return `Привет, ${this.firstName} ${this.lastName}`;
}

console.log(sayHi.call(person)); // Привет, John Doe
console.log(sayHi.call(person2)); // Привет, Вася Пупкин





// ### Задача 2: Применение `apply`
// Создай функцию `sum` которая принимает любое количество аргументов и возвращает их сумму. Затем используй `apply`, чтобы вызвать эту функцию с массивом чисел.


function sum() {
  return Array.from(arguments).reduce((acc, curr) => acc + curr, 0);

}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log(sum.apply(null, arr)); // 45; первым аргументом ожидается контекст(обычно this), вторым - массив аргументов

// Используй apply для передачи массива чисел


// ### Задача 3: Применение `bind`
// Создай объект `car` с полем `brand` и методом `getBrand`, который возвращает строку вида "This car is a [brand]". Используя `bind`, создай новую функцию `getCarBrand`, которая будет всегда возвращать бренд машины, даже если контекст изменится.


const car = {
  brand: "Toyota",
  getBrand: function() {
    return `This car is a ${this.brand}`;
  }
};

// Используй bind для создания getCarBrand

function getCarBrand(func){
    return function(){
        return func.bind(car)()
    }
}

const brandFunc = getCarBrand(car.getBrand);  // Передаем метод getBrand, а не весь объект car
console.log(brandFunc());  // "This car is a Toyota"




// ### Задача 4: Сложная задача с контекстом
// Напиши функцию `printDetails`, которая принимает имя и возраст, и выводит их в формате "Имя: [name], Возраст: [age]". Создай объект `user`, и используя `bind`, создай новую функцию `printUserDetails`, которая всегда будет выводить имя и возраст пользователя из этого объекта. 


function printDetails(name, age) {
  console.log(`Имя: ${name}, Возраст: ${age}`);
}

const user = {
  name: "Alice",
  age: 30
};

function printUserDetails(func, ...args){
    return function(){
        return func.apply(this, args)
    }
}

printUserDetails(printDetails, user.name, user.age)();// Имя: Alice, Возраст: 30


// Привязка контекста при помощи bind


// ### Задача 5: Проблема с контекстом
// Напиши функцию `Counter`, которая будет инкапсулировать логику счетчика с методами `increment` и `getCount`. Обрати внимание на то, что нужно использовать `bind`, чтобы методы `increment` и `getCount` имели правильный контекст `this`.


function Counter() {
  this.count = 0;
  
  this.increment = function() {
    this.count++;
  };
  
  this.getCount = function() {
    return this.count;
  }.bind(this); // привязка через bind
}
// Используй bind для корректного контекста

const counter = new Counter();

counter.increment();
counter.increment();
console.log(counter.getCount()); // 2




//  **Задача 6: Простой вызов**
//    Напишите функцию `greet`, которая принимает два параметра: `greeting` и `name`. Используйте `call`, чтобы вызвать `greet` с `greeting` равным "Привет" и `name` равным "Иван".

   
   function greet(greeting, name) {
       console.log(`${greeting}, ${name}!`);
   }

   greet.call(this, 'Привет', 'Иван (call)');

//    решение через apply
   greet.apply(this, ['Привет', 'Иван (apply)']);

//    решение через bind
   greet.bind(null,'Привет', 'Иван (bind)')();
  
   

//  **Задача 7: Вызов с аргументами**
//    Напишите функцию `add`, которая принимает два числа и возвращает их сумму. Используйте `apply` для вызова этой функции с массивом аргументов `[5, 10]`.

   
   function add(a, b) {
       return a + b;
   }

   console.log(add.apply(this, [5, 10]));
   
   


//  **Задача 8: Привязка контекста**
//    Создайте объект `personed` с полями `name` и методом `introduce`, который выводит `Привет, меня зовут {name}`. Используйте `bind`, чтобы создать новую функцию `introduceAlice`, которая всегда будет вводить "Alice".

   
   const personed = {
       name: 'Default',
       introduce: function() {
           console.log(`Привет, меня зовут ${this.name}`);
       }
   };

   function introduceAlice(func){
    return function(){
        return func.bind({name: "Alice"})()
    }
   }

   introduceAlice(personed.introduce)()
   

//  **Задача 9: Функция поздравления**
//    Создайте функцию `celebrate`, которая принимает `message` и выводит его. Создайте новый контекст `event` с полем `name` и используйте `bind` для создания функции `birthdayMessage`, которая выводит `Happy birthday to {name}`.

   function celebrate(message) {
       console.log(`${message}, ${this.name}!`);
   }

   const event = {
    name: "Alex"
   };

   function birthdayMessage(func, message){
    return function(){
        return func.bind(event, message)()
    }
   };

   birthdayMessage(celebrate, "С днём рождения")() // С днём рождения, Alex!
   
   


//  **Задача 10: Вызов с аргументами и контекстом**
//    Создайте функцию `multiply`, которая принимает два числа и возвращает их произведение. Создайте массив `[2, 3]` и используйте `apply` для вызова функции, установив контекст `null`.

  
   function multiply(a, b) {
       return a * b;
   }

   const array = [2, 3];

   console.log(multiply.apply(null, array));// 6
   

//  **Задача 11: Игроки в игре**
//    Создайте функцию `score`, которая принимает `points` и выводит `У {this.name} сейчас {points} очков`. Создайте объект `player` с полем `name`, и используйте `call`, чтобы сообщить игроку, сколько у него очков.

   
function score(points) {
    console.log(`У ${this.named} сейчас ${points} очков`);
}

const player1 = {
named: 'Игрок 1'
};

const player2 = {
named: 'Игрок 2'
};

const player3 = {
    named: 'Игрок 3'
};


score.call(player1, 14); // У Игрок 1 сейчас 14 очков
score.call(player2, 88); // У Игрок 2 сейчас 88 очков
score.call(player3, 'kek'); // У Игрок 3 сейчас kek очков

// через отдельную функцию
function logPlayer(func, player){
    return function(points){
        return func.call(player, points)
    }
}

let logPlayer1 = logPlayer(score, player1)
let logPlayer2 = logPlayer(score, player2)
let logPlayer3 = logPlayer(score, player3)

logPlayer1(12334); // У Игрок 1 сейчас 12334 очков
logPlayer2(7878); // У Игрок 2 сейчас 7878 очков
logPlayer3(56656); // У Игрок 3 сейчас 56656 очков
   


   

//  **Задача 12: Усложнение с аргументами и контекстом**
//    Создайте функцию `logProduct` с параметрами `a`, `b`. Оберните эту функцию с помощью `bind`, чтобы контекст всегда возвращал объект `mathUtils`, содержащий метод `log`, который выводит результат.

   
   const mathUtils = {
       log: function(value) {
           console.log(`Логарифм: ${value}`);
       }
   };

   function logProduct(a, b) {
       const product = a * b;
       this.log(product);
   }

   logProduct.bind(mathUtils, 5, 8)() // Логарифм: 40

   // Либо

   const logMathUtils = logProduct.bind(mathUtils)
   logMathUtils(7, 8) // Логарифм: 56

