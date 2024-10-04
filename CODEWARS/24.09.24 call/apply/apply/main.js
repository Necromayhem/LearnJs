// call/apply

// 1) Создайте декоратор spy(func), который должен возвращать обёртку, которая сохраняет все вызовы функции в своём свойстве calls.

// Каждый вызов должен сохраняться как массив аргументов.

// function work(a, b) {
//     console.log( a + b ); // произвольная функция или метод
//   }

//   function spy(func){
//     function wrapper(...args){
//         // мы используем ...args вместо arguments для хранения "реального" массива в wrapper.calls
//         wrapper.calls.push(args);
//         return func.apply(this, args)
//     }
//     wrapper.calls = [];
//     return wrapper;
//   }


  
//   work = spy(work);
  
//   work(1, 2); // 3
//   work(4, 5); // 9
  
//   for (let args of work.calls) {
//     alert( 'call:' + args.join() ); // "call:1,2", "call:4,5"
//   }


// 2) Напишите декоратор measureTime для функции так, чтобы можно было измерять, сколько времени занимает её выполнение.

function measureTime(func) {
    return function(){
        let startTime = performance.now();

        let result = func.apply(this, arguments);

        let time = performance.now() - startTime 
        console.log(`Функция выполнялась ${time} мс`);
        return result
    }
  }
  
  function exampleFunction() {
    for (let i = 0; i < 1e6; i++); // Имитация работы функции
  }
  
  const timedFunction = measureTime(exampleFunction);
//   timedFunction();


// 3) Создайте декоратор logArguments, который будет логировать все аргументы, с которыми вызывается функция.

function logArguments(func) {
    return function(){
        // Преобразуем 'arguments' в массив и логируем его
        console.log(`Аргументы: ${Array.from(arguments).join(', ')}`);
        // Используем spread для передачи аргументов в исходную функцию
        let result = func.call(this, ...arguments);
        return result;
    }
}

function sum(a, b) {
    return a + b;
}
  
  const loggedSum = logArguments(sum);
//   loggedSum(2, 3); // Должно вывести в консоль "Аргументы: 2, 3"


// 4) Создайте функцию redirectTo, которая вызывает заданную функцию с указанным контекстом и аргументами, используя call или apply.

function redirectTo(func, context, ...args) {
    return function(){
        let result = func.call(context, ...args);
        return result
    }
  }
  
  const obj = {
    name: 'Alice',
    greet(greeting) {
      console.log(`${greeting}, ${this.name}`);
    }
  };
  
  const redirectToGreet = redirectTo(obj.greet, obj, 'Hello'); // Должно вывести "Hello, Alice"
//   redirectToGreet();


// 5) Напишите декоратор throttle, который позволяет вызывать функцию не чаще одного раза в заданный интервал времени.

function throttle(func, delay) {
    let lastCall = 0;
    return function(...args){
        let now = Date.now();

        if( now - lastCall >= delay){
            lastCall = now;
            func.apply(this, args)
        }
    }
  }
  
  function printMessage(message) {
    console.log(message);
  }
  
  const throttledPrint = throttle(printMessage, 1000);
  throttledPrint('Message 1');
  setTimeout(() => throttledPrint('Message 2'), 500); // Не должно быть вызвано
  setTimeout(() => throttledPrint('Message 3'), 1500); // Должно быть вызвано
  








