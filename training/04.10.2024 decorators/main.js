

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


