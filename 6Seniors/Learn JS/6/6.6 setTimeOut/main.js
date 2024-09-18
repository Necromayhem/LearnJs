// Планирование: setTimeout и setInterval

// setTimeout

// let timerId = setTimeout(func|code, [delay], [arg1], [arg2], ...);

// Параметры:

// func|code - функция или строка для выполнения. Обычно это функция. По историческим причинам можно передать и строку кода, но это не рекомендуется.

// delay - задержка перед запуском в миллисекундах (1000мс = 1с). Значение по умолчанию - 0.

// arg1, arg2 ... - Аргументы, передаваемые в функцию


// Например, данный код вызовет sayHi() спустя одну секунду:

function sayHi(){
    console.log("privet");
};

// setTimeout(sayHi, 1000);

// С аргументами:

function sayBye(phrase, who){
    console.log(phrase + ', ' + who);
};

// setTimeout(sayBye, 2000, "poka", 'chel');

// Если первый аргумент является строкой, то JS создаст из неё функцию:

// setTimeout("console.log('rabotaet')", 3000) // нужны разные кавычки!!!

// Но испоьзование строк не рекомендуется, вместо этого используются функции. Например, так:

// setTimeout(() => console.log('test'), 4000);


// Отмена через clerTimeout
// вызов setTimeout возвращает идентификатор таймера timerId, который можно использовать для отмены дальнейшего действия.

//Синтаксис для отмены:

// let timerId = setTimeout(...);
// clearTimeout(timerId)


// let timerId = setTimeout(() => console.log("ничего не происходит"), 1000);
// console.log(timerId);

// clearTimeout(timerId);
// console.log(timerId);

// Как мы видим из консоли, идентификатором является число,в других средах это может быть что-то ещё.



// setInterval 
// метод setInterval имеет такой же синтаксис как setTimeput

// let timerId = setInterval(func|code, [delay], [arg1], [arg2], ...);

// Все аргументы имеют такое же значение. Но отличие этого метода от setTimeout в том, что функция запускается не один раз, а периодически через указанный интервал времени.

// Чтобы остановить дальнейшее выполнение функции, необходимо вызвать clearInterval(timerId).

// Следующий пример выводит сообщение каждые 2 секунды. Через 5 секунд вывод прекращается:

// повторить с интервалом 2 секунды
// let timerId = setInterval(() => console.log('tick'), 2000)

// остановить вывод через 5 секунд
// setTimeout(() => { clearInterval(timerId); console.log('stop');}, 5000);


// Вложенный setTimeout

/** вместо:
let timerId = setInterval(() => alert('tick'), 2000);
*/

// let timerId = setTimeout(function tick(){
//     console.log('tick');
//     timerId = setTimeout(tick, 2000);
// }, 2000)

// Вложенный setTimeOut более гибкий метод, чем setInterval. С его помощью последующий вызов может быть задан по-разному в зависимости от результатов предыдущего.


// Объявление функции (Function Declaration)

// function имя(параметры){
//     // тело(код) функции
// }

// Функция вывода сообщения

// function showMessage(){
//     console.log("Сообщение");
// }

// showMessage()


// Вложенность и видимость функций

function getSum(){
    let numOne, numTWo;

    function getNumOne(){
        numOne = 1;
    }

    function getNumTwo(){
        numTWo = 2;
    }

    getNumOne();
    getNumTwo();

    let numSum = numOne + numTWo;
    console.log(numSum);
}

// getNumOne(); Uncaught ReferenceError: getNumOne is not defined
// getSum()


// Локальные и внешние переменные

// function showMessage(){
//     // Локальная переменная
//     var message = 'Сообщение'
//     console.log(message);
// }

// console.log(message); // ReferenceError: message is not defined


// рекурсия 

function calcSumm1(numOne, numTwo){
    let result = 1;
    // умножаем result на numOne numTwo раз в цикле
    for(let i = 0; i < numTwo; i++){
        result *= numOne
    }
    return result;
}
// console.log(calcSumm1(2, 3));

function calcSumm2(numOne, numTwo){
    if(numTwo === 1) return numOne

    return numOne * calcSumm2(numOne, numTwo - 1)
}
// console.log(calcSumm2(2, 3));



// Функциональное выражение (Function Expression)

// let showMessage = function(){
//     console.log('qqq');
// };
// showMessage();


// function getSum(){
//     return console.log('qqq');
// }
// getSum() // qqq

// let test = function(){
//     return function(){
//         return getSum()
//     }
// }
// let returnedFunction = test();
// returnedFunction(); // qqq

// test()() // qqq









































