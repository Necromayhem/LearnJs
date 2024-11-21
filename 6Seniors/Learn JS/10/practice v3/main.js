// практика 3

// Задача 1: Деление на ноль

// Напишите функцию divide, которая принимает два аргумента: делимое и делитель. Если делитель равен 0, выбросьте ошибку с сообщением "Деление на ноль недопустимо!". Используйте try...catch, чтобы обработать это исключение и вывести сообщение об ошибке.

function divide(a, b){
    try{
        if(b == 0){
            throw new Error("Деление на ноль недопустимо!");
        }

    console.log(a/b);    
    } catch(err) {
        console.log(err.message);
    }
};

// divide(10, 2); // 5
// divide(10, 0) // Деление на ноль недопустимо!

// Задача 2: Проверка на тип

// Создайте функцию checkStringType, которая принимает параметр и проверяет, является ли он строкой. Если нет, выбросьте TypeError с сообщением "Ожидалась строка". Оберните вызов этой функции в try...catch, чтобы ловить исключения.

function checkStringType(param){
    try{
        if(typeof param !== "string"){
            throw new TypeError("Ожидалась строка")
        }
        console.log(param);
    } catch(err){
        console.log(err.message);
    }
};

// checkStringType("qwerty") // qwerty
// checkStringType([1,2,3]) // Ожидалась строка
// checkStringType(123) // Ожидалась строка

// Задача 3: Пользовательская ошибка

// Создайте класс InvalidAgeError, который наследует от Error. Реализуйте функцию registerUser, которая принимает возраст. Если возраст меньше 18, выбросьте InvalidAgeError с сообщением "Возраст должен быть 18 или больше!". Используйте try...catch, чтобы обработать эту ошибку.

class InvalidAgeError extends Error{
    constructor(message){
        super(message);
        this.name = "Error";
    }
};

function registerUser(age){
    try{
        if(age < 18){
            throw new InvalidAgeError("Возраст должен быть 18 или больше")
        }
    } catch(e){
        console.log(e);
        console.log(e.name);
    }
}

// registerUser(17) // InvalidAgeError: Возраст должен быть 18 или больше
// at registerUser (main.js:55:19)
// at main.js:62:1 и Error

// Задача 4: Валидация массива

// Напишите функцию validateNumbers, которая принимает массив чисел. В случае, если в массиве есть хотя бы одно нечисловое значение, выбросьте TypeError с сообщением "Все элементы массива должны быть числами!". Оберните вызов этой функции в try...catch, чтобы обработать возможные исключения.

function validateNumbers(arr){
    try{
        if(arr.find((el) => typeof el !== "number")){
            throw new TypeError("Все элементы массива должны быть числами!")
        }
    } catch(e){
        console.log(e.message);
    }
}

// validateNumbers([1, 2, "q"]) // Все элементы массива должны быть числами!


