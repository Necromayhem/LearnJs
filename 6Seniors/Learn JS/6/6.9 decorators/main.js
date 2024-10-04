// Декораторы

// function slow(x){
//     // здесь могут быть ресурсоёмкие вычисления
//     console.log('Called with ${x}');
//     return x;
// };

// function cachingDecorator(func){
//     let cache = new Map();

//     return function(x){
//         if(cache.has(x)){    // если кеш содержит такой х,
//          return cache.get(x);// читаем из него результат
//         }

//         let result = func(x); // иначе вызываем функцию

//         cache.set(x, result); // и кешируем(запоминаем) результат
//         return result;
//     };
// }

// slow = cachingDecorator(slow);

// console.log(slow(1)); // slow(1) кешируем
// console.log("Again: " + slow(1)); // возвращаем из кеша

// console.log(slow(2)); // slow(2) кешируем
// console.log("Again: " + slow(2)); // возвращаем из кеша




var fac = function f(n){
    return (n !== 1) ? f(n - 1) * n : n;
}; 



function logResultDecorator(func, funcName){
    return function(){
        var result = func.apply(this, arguments)
        console.log(`Результат функции ${funcName}: ${result}.`);
        return result;

    }
}

function callCountDecorator(func, funcName){
    var count = 0;
    return function(){
        count++;
        console.log(`Функция ${funcName} была вызвана ${count} раз.`);
        return func.apply(this, arguments)
    }

}

function timeDecorator(func, funcName){
    return function(){
        var startTime = performance.now();

        var result = func.apply(this, arguments)

        var time = performance.now() - startTime;

        console.log(`Функция ${funcName} выполнялась ${time} мс.`);
        return result;
    }
}

function cacheDecorator(func){
    var cache = {}
    return function(n){
        if(typeof cache[n] === 'undefined'){
            cache[n] = func.apply(this, arguments);
        }
        return cache[n];
    }
}

function argumentsCountDecorator(func, requiredNumber){
    return function(){
        var argsCount = arguments.length;

        if(requiredNumber !== argsCount){
            console.log(`Количество аргументов не совпадает!`);
            return;
        }
        return func.apply(this, arguments);
    }
}

// fac = logResultDecorator(fac, 'factorial')
// fac = callCountDecorator(fac, 'factorial')
// fac = cacheDecorator(fac)
// fac = timeDecorator(fac, 'factorial')
// fac = argumentsCountDecorator(fac, 1)

// fac(126);
// fac(126);
// fac(127);
// fac(20, 128);

var fib = function fibonacci(n){
    return (n > 2) ? fibonacci(n - 1) + fibonacci(n - 2) : 1;
}

fib = logResultDecorator(fib, 'fibonacci')
fib = callCountDecorator(fib, 'fibonacci')
fib = cacheDecorator(fib)
fib = timeDecorator(fib, 'fibonacci')
fib = argumentsCountDecorator(fib, 1)

fib(5)
fib(7)
fib(6)
fib(2, 4)







// var pow = function(base, n){
//     let result = 1;
//     for(let i = 0; i < n; i++){
//         result *= base
//     }

//     return result;
// }

// function powLogDecorator(func){
//     return function(){
//         var result = func.apply(this, arguments)
//         console.log(`Результат функции: ${result}`);
//         return result;
//     }
// }

// function callCountDecorator(func, funcName){
//     count = 0;
//     return function(){
//         count++;
//         console.log(`Функция ${funcName} была вызывана ${count} раз.`);
//         return func.apply(this, arguments)
//     }
// }

// function timeDecorator(func, funcName){
//     return function(){
//         var startTime = performance.now();

//         var result = func.apply(this, arguments)

//         var time = performance.now() - startTime;

//         console.log(`Функция ${funcName} выполнялась ${time} мс`);

//         return result;
//     }
// }

// function cacheDecorator(func) {
//     var cache = new Map();
//     return function(base, n) {
//         const key = `${base},${n}`; // Создаем ключ, основанный на обоих аргументах
//         if (cache.has(key)) {
//             return cache.get(key);
//         }

//         let result = func(base, n);
//         cache.set(key, result);
//         console.log(cache);
//         return result;
//     }
// }



// pow = powLogDecorator(pow)
// pow = callCountDecorator(pow, 'Возведение в степень')
// pow = cacheDecorator(pow)
// pow = timeDecorator(pow, 'Возведение в степень')

// pow(2, 3)
// pow(5, 3)













