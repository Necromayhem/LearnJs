// колбэк-функции

// Задача 1: Простая колбэк-функция

// Напишите функцию greet, которая принимает имя в качестве аргумента и колбэк-функцию. Внутри функции greet вызовите колбэк-функцию с текстом приветствия.

function greet(name, callback){
    return `${name}, ${callback()}`
};

function hi(){
    return `привет!`
}

// console.log(greet("Иван", hi));



// Задача 2: Колбэк с условиями

// Создайте функцию isEven, которая принимает число и колбэк-функцию. Если число четное, колбэк должен возвращать "Это четное число", в противном случае - "Это нечетное число".

function isEven(number, callback){
    if(number % 2 === 0){
        return callback(true)
    } else{
        return callback(false)
    }
};

function check(arg){
    return arg === true ? "Это четное число" : "Это нечетное число";
}

// console.log(isEven(4, check));// Это четное число
// console.log(isEven(7, check));// Это нечетное число



// Задача 3: Асинхронный колбэк

// Напишите функцию fetchData, которая имитирует асинхронный вызов (например, загрузку данных). Используйте setTimeout, чтобы через 2 секунды вызывать колбэк с полученными данными (просто строку "Данные загружены").


function fetchData(callback){
    setTimeout(() => {
        const data = callback();
        console.log(data);
    }, 2000)
}
function loadData(){
    return `Данные загружены`
}

// fetchData(loadData);



// Задача 4: Цепочка колбэков

// Создайте функцию calculate, которая принимает два числа и три колбэка: один для сложения, второй для вычитания и третий для умножения. Внутри функции вызовите все три колбека, передавая им результаты вычислений.


function calculate(a, b, addCallback, subtractCallback, multiplyCallback){
    console.log(`Сложение: ${addCallback(a, b)}`);
    console.log(`Вычитание: ${subtractCallback(a, b)}`);
    console.log(`Умножение: ${multiplyCallback(a, b)}`);
};

function add(a, b){
    return a + b
};

function subtract(a, b){
    return a - b
};

function multiply(a, b){
    return a * b
};

// calculate(5, 3, add, subtract, multiply);


// Задача 5: Колбэк и массивы

// Создайте функцию processArray, которая принимает массив чисел и колбэк. Функция должна применить колбэк ко всем элементам массива и вернуть новый массив с результатами.


function processArray(arr, callback) {
    return arr.map(callback); // Применяем колбэк ко всем элементам массива
}

function doubled(num) {
    return num * 2; 
}

let arr = [1, 2, 3];

// console.log(processArray(arr, doubled)); // [2, 4, 6]




























