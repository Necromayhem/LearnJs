// 1) Почему greetAbe() на самом деле не приветствует Эйба?

// let name = 'Abe'
// const greetAbe = () => 'Hello, ' + name + '!'
// name = 'Ben'
// const greetBen = () => 'Hello, ' + name + '!'

let name = 'Abe';

const greetAbe = (() => {
  const storedName = name;
  return () => 'Hello, ' + `${storedName}` + '!';
})();

name = 'Ben';

const greetBen = (() => {
  const storedName = name;
  return () => 'Hello, ' + `${storedName}` + '!';
})();

// console.log(greetBen());
// console.log(greetAbe());


// 2) Счетчик закрытия
// Определите счетчик функций , который возвращает функцию, возвращающую возрастающее значение.
// Первое значение должно быть 1.
// Вам придется использовать замыкания.

// Пример:
// const newCounter = counter();
// newCounter() // 1
// newCounter() // 2

function counter(){
    let count = 0;
    return function(){
        count += 1
        return count
    }
}

// const newCounter = counter()
// console.log(newCounter());
// console.log(newCounter());
// console.log(newCounter());
// console.log(newCounter());


// 3) Мы хотим создать функцию, которая возвращает массив функций, которые возвращают свой индекс в массиве. Для лучшего понимания, вот пример:
// var callbacks = createFunctions(5); // create an array, containing 5 functions
// callbacks[0](); // must return 0
// callbacks[3](); // must return 3
// Мы уже реализовали эту функцию, но когда мы на самом деле запускаем код, результат выглядит не так, как мы ожидали. Можете ли вы заметить, что с ним не так? Тестовая фикстура также доступна

function createFunctions(n) {
    var callbacks = [];
  
    for (var i=0; i<n; i++) {
      callbacks.push(function() {
        return i;
      });
    }
    
    return callbacks;
  }

// РЕШЕНИЕ поменять var на let(это 6 ката!)

// 4) GPT 
//Напишите функцию createCounter, которая возвращает объект с методами increment, decrement и getCount. Внутри функции createCounter должна храниться переменная, хранящая текущее значение счетчика. Методы increment и decrement должны увеличивать и уменьшать значение счетчика соответственно, а метод getCount должен возвращать текущее значение счетчика.

// Вот пример использования:

// const counter = createCounter();
// console.log(counter.getCount()); // 0
// counter.increment();
// console.log(counter.getCount()); // 1
// counter.decrement();
// console.log(counter.getCount()); // 0

function createCounter() {
    let count = 0;
  
    return {
      increment: function() {
        return count++;
      },
      decrement: function() {
        return count--;
      },
      getCount: function() {
        return count;
      }
    };
  }

// const counter = createCounter();
// console.log(counter.getCount()); // 0
// counter.increment();
// console.log(counter.getCount()); // 1
// counter.decrement();
// console.log(counter.getCount()); // 0



// 5) GPT 
//Отлично, давайте попробуем решить еще одну задачу на замыкания. Вот условие:

// Напишите функцию createIncrement(), которая возвращает другую функцию increment(). Когда increment() вызывается, она увеличивает некоторое число на 1. Но когда вы впервые вызываете createIncrement(), она логгирует сообщение.

// Например:

// let f1 = createIncrement();
// let g1 = f1(); // logs: Incrementing!
// let g2 = f1(); // logs: Incrementing!
// let g3 = f1(); // logs: Incrementing!

// let f2 = createIncrement();
// let g4 = f2

function createIncrement(){
  let count = 0;

  function increment(){
    count += 1
    console.log('Incrementing!');
    return count
  }

  return increment
}


let f1 = createIncrement();
let g1 = f1(); // logs: Incrementing!
console.log(g1);
let g2 = f1(); // logs: Incrementing!
console.log(g2);
let g3 = f1(); // logs: Incrementing!
console.log(g3);

let f2 = createIncrement();
let g4 = f2()
console.log(g4);



// 1.Функции возвращают новые функкции
// 2. Возвращаемые функции помнят контекст, где были созданы

function createFn(){
  const message = 'потом в глобальной'

  function greeting(){
    // const message = 'сначала нахожу в локальной памяти'
    console.log(message);
  }
  return greeting
}

const helloWorld = createFn();
// console.log(typeof(helloWorld)); // function
// helloWorld() // hello, world



function createGreeting(message){
  const massage = message

  function greeting(str){
    console.log(massage, str);
  }

  return greeting;
}

const hello = createGreeting('hello');
// hello('world');


function addByX(num1) {
  
  return function add(num2){
  return num1 + num2
}
}

// const addByTwo = addByX(2);
// const addByFive = addByX(5);

// console.log(addByTwo(3)); // 5
// console.log(addByTwo(6)); // 8

// console.log(addByFive(10)); // 15
// console.log(addByFive(2)); // 7



function once(fn) {
  let hasBeenCalled = false;

  let cachedResult;  // кэшируем результат, поначалу он undefined
 
  return function(...args){
    if(hasBeenCalled) return cachedResult;

    hasBeenCalled = true;
    cachedResult = fn(...args)

    return cachedResult
  }
}

// function x(num1, num2){
//   return [num1 + 2, num1 + 2]
// }


// const addByTwoOnce = once((num1, num2) => [num1 + 2, num2 + 2]);

// console.log(addByTwoOnce(2,1));
// console.log(addByTwoOnce(5));
// console.log(addByTwoOnce(7));




// Learn JS

// Сумма с помощью замыканий
// важность: 4
// Напишите функцию sum, которая работает таким образом: sum(a)(b) = a+b.

// Да, именно таким образом, используя двойные круглые скобки (не опечатка).

// Например:

// sum(1)(2) = 3
// sum(5)(-1) = 4



function sum(num1){
  return function(num2){
    return num1 + num2
  }
}


// console.log(sum(1)(2)) // 3
// console.log(sum(5)(-1)) // 4








