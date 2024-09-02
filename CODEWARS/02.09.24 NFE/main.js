// Learn JS

// 1) Измените код makeCounter() так, чтобы счётчик мог уменьшать и устанавливать значение:

// counter() должен возвращать следующее значение (как и раньше).
// counter.set(value) должен устанавливать счётчику значение value.
// counter.decrease() должен уменьшать значение счётчика на 1.
// Посмотрите код из песочницы с полным примером использования.

// P.S. Для того, чтобы сохранить текущее значение счётчика, можно воспользоваться как замыканием, так и свойством функции. Или сделать два варианта решения: и так, и так.

function makeCounter() {
    // Переменная count доступна только в замыкании функции makeCounter.
    let count = 0;
    
    // Возвращаем объект с функциями для управления счётчиком.
    return {
        set: function(value) {
            count = value;
        },
        decrease: function() {
            count--;
        },
        increment: function() {
            count++;
        },
        getCount: function() {
            return count;
        }
    };
}
  
// / Создаём счётчик.
// let counter = makeCounter();

// console.log(counter.getCount()); // Выводит 0
// counter.increment();
// console.log(counter.getCount()); // Выводит 1
// counter.decrease();
// console.log(counter.getCount()); // Выводит 0
// counter.set(5);
// console.log(counter.getCount()); // Выводит 5


// 2) Напишите функцию sum, которая бы работала следующим образом:

// sum(1)(2) == 3; // 1 + 2
// sum(1)(2)(3) == 6; // 1 + 2 + 3
// sum(5)(-1)(2) == 6
// sum(6)(-1)(-2)(-3) == 0
// sum(0)(1)(2)(3)(4)(5) == 15

function sum(a) {

    let currentSum = a;
  
    function f(b) {
      currentSum += b;
      return f;
    }
  
    f.toString = function() {
      return currentSum;
    };
  
    return f;
  }
  
//   alert( sum(1)(2) ); // 3
//   alert( sum(5)(-1)(2) ); // 6
//   alert( sum(6)(-1)(-2)(-3) ); // 0
//   alert( sum(0)(1)(2)(3)(4)(5) ); // 15































