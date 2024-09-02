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

setTimeout(sayHi, 1000);

// С аргументами:

function sayBye(phrase, who){
    console.log(phrase + ', ' + who);
};

setTimeout(sayBye, 2000, "poka", 'chel');

// Если первый аргумент является строкой, то JS создаст из неё функцию:

setTimeout("console.log('rabotaet')", 3000) // нужны разные кавычки!!!

// Но испоьзование строк не рекомендуется, вместо этого используются функции. Например, так:

setTimeout(() => console.log('test'), 4000);




































