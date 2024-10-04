"use strict"
// повторяю задачи на декораторы

// 1) Напишите декоратор measureTime для функции так, чтобы можно было измерять, сколько времени занимает её выполнение.

function measureTime(func) {
    return function(){
       let startTime = performance.now();
       let result = func.call(this);
       let time = performance.now() - startTime;
       console.log(time);
       return result;
       
    }
  }
  
  function exampleFunction() {
    for (let i = 0; i < 1e6; i++); // Имитация работы функции
  }
  
  const timedFunction = measureTime(exampleFunction);
//   timedFunction();


// 2) Создайте декоратор logArguments, который будет логировать все аргументы, с которыми вызывается функция.

// function logArguments(func) {
//     return function(...arguments){
//         let log = (Array.from(arguments)).join(", ");
//         console.log(`Аргументы: ${log}`);
//         let result = func(this);
//         return result;

//     }
//   }
  
//   function sum(a, b) {
//     return a + b;
//   }
  
//   const loggedSum = logArguments(sum);
// //   loggedSum(2, 3); // Должно вывести в консоль "Аргументы: 2, 3"


// 3) Создайте функцию redirectTo, которая вызывает заданную функцию с указанным контекстом и аргументами, используя call или apply.

function redirectTo(func, context, ...args) {
    return function(){
        let result = func.call(context, args)
        return result;
    }
  }
  
  const obj = {
    name: 'Alice',
    greet(greeting) {
      console.log(`${greeting}, ${this.name}`);
    }
  };
  
  let redirectToGreet = redirectTo(obj.greet, obj, 'Hello'); // Должно вывести "Hello, Alice"
//   redirectToGreet();


// 4) Напишите декоратор throttle, который позволяет вызывать функцию не чаще одного раза в заданный интервал времени.

function throttle(func, delay) {
    let lastCall = 0;

    return function(...args){
        const now = Date.now();

        if (now - lastCall >= delay) {
            lastCall = now;
            func.apply(this, args);
        }


    }
  }
  
  function printMessage(message) {
    console.log(message);
  }
  
//   const throttledPrint = throttle(printMessage, 1000);
//   throttledPrint('Message 1');
//   setTimeout(() => throttledPrint('Message 2'), 500); // Не должно быть вызвано
//   setTimeout(() => throttledPrint('Message 3'), 1500); // Должно быть вызвано




// 5)   Напишите декоратор memoize, который сохраняет результаты вызовов функции для оптимизации повторных вычислений.

function memoize(func) {
    let cache = new Map();
    return function(number) {
        if (cache.has(number)) {
            return cache.get(number);
        }
        let result = func(number);
        cache.set(number, result);
        return result;
    };
}

function timerDecorator(func) {
    return function(...args) {
        let startTime = performance.now();
        let result = func.apply(this, args);
        let time = performance.now() - startTime;
        console.log(`Выполнилась за ${time} мс`);
        return result;
    };
}

function fibonacci(n) {
    if (n <= 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    }

    let prev = 0;
    let curr = 1;

    for (let i = 2; i <= n; i++) {
        let next = prev + curr;
        prev = curr;
        curr = next;
    }

    return curr;
}

fibonacci = memoize(fibonacci);
fibonacci = timerDecorator(fibonacci);

// fibonacci(124222323); // Выполнилась за 336.30000001192093 мс
// fibonacci(124222323); // Выполнилась за 0 мс



function f() {
    alert( this ); // null
  }
  
  let user = {
    g: f.bind(this)
  };
  
  user.g(); 
































