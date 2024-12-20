// конструкция `try..catch`


// Задача 1: Деление на ноль

// Напишите функцию `divide(a, b)`, которая принимает два числа и возвращает результат деления. Если второе число `b` равно нулю, функция должна выбрасывать ошибку с сообщением "Деление на ноль невозможно". Используйте `try..catch`, чтобы обработать эту ошибку и вернуть `null` в случае её возникновения.

function divide(a, b) {
    try {
        if (b === 0) {
            throw new Error("Деление на ноль невозможно!");
        }
        return a / b; // Возвращаем результат деления
    } catch (err) {
        return `${err.message}`;
    }
}

// console.log(divide(20, 4)); // 5
// console.log(divide(10, 0)); // Error: Деление на ноль невозможно!

          


// Задача 2: Конвертация строки в число

// Напишите функцию `convertToNumber(str)`, которая принимает строку и пытается преобразовать её в число с помощью `Number()`. Если строка не может быть преобразована (например, содержит символы, отличные от цифр), выбрасывайте ошибку с сообщением "Некорректный ввод". Обработайте эту ошибку с помощью `try..catch` и возвращайте `-1` в случае возникновения ошибки.

function convertToNumber(str){
  try{
    if( typeof str !== "string"){
        throw new Error("Некорректный ввод!");
    }
    const num = Number(str);
    if(isNaN(num)){
        throw new Error("Некорректный ввод!");
    }
    return num
  } catch(err){
    console.log(err.message);
    return -1;
  }
}

// console.log(convertToNumber("12345")); // 12345
// console.log(convertToNumber("abc")); // Некорректный ввод! и -1
// console.log(convertToNumber(12345)); // Некорректный ввод! и -1

// Задача 3: Работа с массивами

// Напишите функцию `getElement(array, index)`, которая принимает массив и индекс. Она должна возвращать элемент массива по указанному индексу. Если индекс выходит за границы массива, выбрасывайте ошибку с сообщением "Индекс вне границ массива". Используйте `try..catch` для обработки этой ошибки и возвращайте `undefined` в случае её возникновения.

function getElement(array, index){
    try{
        if(index < 0 || index >= array.length){
            throw new Error("Индекс вне границ массива")
        }
        return array[index];
    } catch(err){
        return `${err.message}`
    }
};

let arr = [1, 2, 3, 4, 5];
// console.log(getElement(arr, 1)); // 2
// console.log(getElement(arr, 15)); // Индекс вне границ массива

// Задача 4: Сложение чисел

// Создайте функцию `sumNumbers(a, b)`, которая принимает два аргумента и возвращает их сумму. Если один из аргументов не является числом, выбрасывайте ошибку с сообщением "Оба аргумента должны быть числами". Обработайте ошибку с помощью `try..catch` и возвращайте `0` в случае возникновения ошибки.

function sumNumbers(a, b){
    try{
        if(typeof a !== "number" || typeof b !== "number"){
            throw new Error("Оба аргумента должны быть числами")
        }
        return a + b;
    } catch(err){
        return `${err.message}`
    }
};

// console.log(sumNumbers(5, 10)); // 15
// console.log(sumNumbers('qwer', 10)); // Оба аргумента должны быть числами

// Задача 5: Чтение объекта

// Напишите функцию `getProperty(obj, prop)`, которая принимает объект и имя свойства. Она должна возвращать значение свойства объекта. Если переданное свойство не существует, выбрасывайте ошибку с сообщением "Свойство не найдено". Обработайте эту ошибку с использованием `try..catch` и возвращайте `null` в случае возникновения ошибки.

function getProperty(obj, prop){
    try{
        if(!obj.hasOwnProperty(prop)){
            throw new Error("Свойство не найдено")
        }
        return obj[prop]
    } catch(err){
        console.log(err.message);
        return null;
    }
};

const user = {
    name: "Alex",
    age: 27
};

// console.log(getProperty(user, "name")); // Alex
// console.log(getProperty(user, "city")); // Свойство не найдено null



// Задача 6: Валидация формата электронной почты

// Напишите функцию `validateEmail(email)`, которая принимает строку с электронной почтой и проверяет, соответствует ли она стандартному формату (например, с использованием регулярного выражения). Если формат неверен, выбрасывайте ошибку с сообщением "Некорректный адрес электронной почты". Обработайте ошибку с помощью `try..catch` и возвращайте `false` в случае её возникновения. В противном случае возвращайте `true`.










