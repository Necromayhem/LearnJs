"use strict"
// повторяю задачи на декораторы


// Задача 1: Тайминг выполнения функции
// Описание:
// Напишите декоратор measureTime для функции так, чтобы можно было измерять, сколько времени занимает её выполнение.

function measureTime(func) {
  return function(){
    let startTime = performance.now();
    let log = func.call(this);
    let time = performance.now() - startTime;
    console.log(`Функция выполнилась за ${time} мс`);
    return log;
  }
}

function exampleFunction() {
  for (let i = 0; i < 1e6; i++); // Имитация работы функции
}

const timedFunction = measureTime(exampleFunction);
// timedFunction();


// Задача 2: Логирование аргументов функции
// Описание:
// Создайте декоратор logArguments, который будет логировать все аргументы, с которыми вызывается функция.

function logArguments(func) {
  let cache = new Map();
  return function(...arguments){
    if(cache.has(arguments)){
      return cache.get(arguments)
    }

    let result = func.call(arguments);
    cache.set(arguments, result);
    console.log("Аргументы: " + (Array.from(arguments)).join(", "));
    return result;
  }
// }

function sum(a, b) {
  return a + b;
}

const loggedSum = logArguments(sum);
loggedSum(2, 3); // Должно вывести в консоль "Аргументы: 2, 3"


// Задача 3: Переадресация вызова с изменением контекста
// Описание:
// Создайте функцию redirectTo, которая вызывает заданную функцию с указанным контекстом и аргументами, используя call или apply.

function redirectTo(func, context, ...args) {
  return function(){
    return func.apply(context, args)
  }
}

const obj = {
  name: 'Alice',
  greet(greeting) {
    console.log(`${greeting}, ${this.name}`);
  }
};

let redirectToGreet = redirectTo(obj.greet, obj, 'Hello'); // Должно вывести "Hello, Alice"
// redirectToGreet();


// Задача 4: Декоратор ограничения частоты вызовов
// Описание:
// Напишите декоратор throttle, который позволяет вызывать функцию не чаще одного раза в заданный интервал времени.


function throttle(func, delay) {
  let lastCall = 0;
  return function(...args) {
    let now = performance.now();
    if (lastCall === 0 || now - lastCall >= delay) {
      lastCall = now;
      return func.apply(this, args);
    }
  };
}

function printMessage(message) {
  console.log(message);
}

// const throttledPrint = throttle(printMessage, 1000);
// throttledPrint('Message 1');
// setTimeout(() => throttledPrint('Message 2'), 500); // Не должно быть вызвано
// setTimeout(() => throttledPrint('Message 3'), 1500); // Должно быть вызвано


// Задача 5: Декоратор мемоизации
// Описание:
// Напишите декоратор memoize, который сохраняет результаты вызовов функции для оптимизации повторных вычислений.


function memoize(func) {
  let cache = new Map();
  return function(number){
    if(cache.has(number)){
      return cache.get(number)
    }

    let result = func(number);
    cache.set(number, result);
    return result;
    
  }
}

function factorial(n) {
  if (n < 0) {
    return undefined; // Факториал отрицательного числа не определен
  }

  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  
  return result;
}

const memoizedFactorial = memoize(factorial);
// console.log(memoizedFactorial(40)); 
// console.log(memoizedFactorial(40)); // Должно рассчитать быстрее

//================================================================================
// bind gpt

// Задача 1: Простая задача с использованием bind
// У вас есть объект person с функцией greet, которая выводит приветственное сообщение. Однако функция greet используется в другом контексте, и необходимо, чтобы она всегда использовала this объекта person.

const person = {
  name: "Alice",
  greet: function() {
    console.log(`Hello, my name is ${this.name}.`);
  }
};

const greetSomeoneElse = person.greet.bind(person);
// greetSomeoneElse()

// Задача: Используя bind, сделайте так, чтобы вызов greetSomeoneElse() всегда выводил "Hello, my name is Alice."


// Задача 2: Более сложная задача с использованием bind и аргументов
// Вы работаете с функцией, которая выполняет вычисления для какого-то объекта. Это вызов функции от calc объекта со значением, делая фиксированное значение аргумента для использования позднее.

const calculator = {
  factor: 2,
  calculate: function(number, additionalFactor) {
    return (number + additionalFactor) * this.factor;
  }
};

// Задача: Используя bind, создайте новую функцию calculateWithFactorFive, 
// которая берет одно число в качестве аргумента и всегда использует additionalFactor равный 5, 
// и связана с `calculator` в качестве контекста выполнения. 

// Пример: calculateWithFactorFive(10) должно возвращать 30

let calculateWithFactorFive = calculator.calculate.bind(calculator, 5)
// console.log(calculateWithFactorFive(10));




//================================================================================
// learn js


// Создайте декоратор delay(f, ms), который задерживает каждый вызов f на ms миллисекунд. Например:

function f(x) {
  console.log(x);
}

function delay(f, ms){
 return function(...args){
  setTimeout(()=> {
    f.apply(this, args)
  }, ms)
 }
}

// создаём обёртки
let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

// f1000("test"); // показывает "test" после 1000 мс
// f1500("test"); // показывает "test" после 1500 мс




function askPassword(ok, fail) {
  let password = prompt("Password?", '');
  if (password == "rockstar") ok();
  else fail();
}

let user = {
  name: 'Вася',

  loginOk() {
    alert(`${this.name} logged in`);
  },

  loginFail() {
    alert(`${this.name} failed to log in`);
  },

};
for (let key in user) {
  if (typeof user[key] == 'function') {
    user[key] = user[key].bind(user);
  }
}
// askPassword(user.loginOk.bind(user), user.loginF ail.bind(user));

function bar(...args){
  console.log(args);

  console.log(typeof args[1]);
}

bar([1, 2, 3], 4, 5, 6, 7)




















