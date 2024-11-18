// практика 

// задача с learn JS

// Создайте класс FormatError, который наследует от встроенного класса SyntaxError.

// Класс должен поддерживать свойства message, name и stack.

class FormatError extends SyntaxError{
    constructor(message, name, stack){
        super(message, name, stack)
    }
};

let err = new FormatError("Ошибка форматирования");

// console.log(err.message);
// console.log(err.name);
// console.log(err.stack);
// console.log(err instanceof FormatError);
// console.log(err instanceof SyntaxError);


// Задача 1: Создание пользовательской ошибки

// Создайте класс `NegativeNumberError`, который будет расширять стандартный класс `Error`. Он должен использоваться для выбрасывания ошибок, когда пользователь вводит отрицательное число.

// 1. Определите класс `NegativeNumberError`, который принимает сообщение об ошибке.
// 2. Реализуйте функцию `checkPositiveNumber`, которая принимает одно число. Если число отрицательное, выбрасывайте `NegativeNumberError` с сообщением "Число не должно быть отрицательным".
// 3. Вызовите функцию с различными значениями и отловите ошибки в блоке `try...catch`, выводя сообщение об ошибке в консоль.

class NegativeNumberError extends Error{
    constructor(message){
        super(message);
        this.name = this.constructor.name;
    }
};

function checkPositiveNumber(num){
    try{
        if(num < 0){
            throw new NegativeNumberError("Число не должно быть отрицательным")
        }
        return num;
    } catch(err){
        console.log(`${err.name}: ${err.message}`);
        return num; // возврат числа, которое отловили как ошибку
    }
};

// console.log(checkPositiveNumber(-3)); // NegativeNumberError: Число не должно быть отрицательным -3
// console.log(checkPositiveNumber(0)); // 0


// Задача 2: Валидация данных пользователя

// Создайте класс `UserValidationError`, расширяющий стандартный класс `Error`. Эта ошибка должна использоваться для проверки корректности данных пользователя.

// 1. Определите класс `UserValidationError`, который принимает сообщение о чем-то, что не так с данными пользователя.
// 2. Реализуйте функцию `validateUser`, которая принимает объект пользователя с полями `name` и `age`. Проверьте, что:
//    - Имя пользователя является строкой и не пустое.
//    - Возраст — это число, и оно больше нуля.
// 3. Если условия не выполнены, выбросьте `UserValidationError` с соответствующим сообщением (например, "Имя должно быть непустой строкой" или "Возраст должен быть положительным числом").
// 4. Напишите несколько тестов, в которых корректные и некорректные данные проверяются с использованием блоков `try...catch`.

class UserValidationError extends Error{
    constructor(message){
        super(message);
        this.name = this.constructor.name;
    }
};

function validateUser(obj) {
    // Проверка на наличие свойств
    if (!obj.hasOwnProperty("name")) {
        throw new UserValidationError("Отсутствует свойство name");
    }
    if (!obj.hasOwnProperty("age")) {
        throw new UserValidationError("Отсутствует свойство age");
    }

    // Проверка, что name является строкой и не пустой
    if (typeof obj.name !== "string") {
        throw new UserValidationError("Свойство name должно быть строкой");
    }
    if (obj.name.trim() === "") { // Учитываем возможность пустоты с пробелами
        throw new UserValidationError("Имя должно быть непустой строкой");
    }

    // Проверка возраста
    if (typeof obj.age !== "number" || obj.age <= 0) {
        throw new UserValidationError("Возраст должен быть положительным числом");
    }

    return obj; // Возврат валидного объекта
}


// Тестируем функцию с различными пользователями
const users = [
    { name: "Alex", age: 27 },   // корректные данные
    { name: "", age: 25 },       // некорректное имя
    { name: "John", age: -5 },   // некорректный возраст
    { name: "Emma", age: 30 },   // корректные данные
    { age: 25 },                 // отсутствует name
    { name: "Liam" }             // отсутствует age
];

users.forEach(user => {
    try {
        validateUser(user);
        console.log(`Пользователь "${user.name}" прошел валидацию.`);
    } catch (err) {
        console.log(`${err.name}: ${err.message}`);
    }
});

        


// Задача 3: Управление данными с использованием пользовательских ошибок

// Создайте класс `DataNotFoundError`, который будет расширять стандартный класс `Error`. Эта ошибка должна использоваться при попытке доступа к данным, которых не существует.

// 1. Определите класс `DataNotFoundError`.
// 2. Создайте функцию `getUserData`, которая пытается получить данные пользователя по идентификатору из заранее определенного массива пользователей. Если пользователь не найден, выбрасывайте `DataNotFoundError` с сообщением "Пользователь не найден".
// 3. Обработайте вызов функции, используя `try...catch`, и при возникновении ошибки выведите сообщение в консоль.


class DataNotFoundError extends Error{
    constructor(message){
        super(message);
        this.name = this.constructor.name;
    }
};


function getUserData(arr, userName) {
    // Ищем пользователя по имени
    const user = arr.find(user => user.name === userName);
    
    // Если пользователь не найден, выбрасываем ошибку
    if (!user) {
        throw new DataNotFoundError("Пользователь не найден");
    }

    return user; // Возвращаем пользователя, если он найден
};

const person = [
    { name: "Alex", age: 27 },
    { name: "Ivan", age: 25 },
    { name: "John", age: -5 },
    { name: "Emma", age: 30 },
    { name: "Egot", age: 25 },                              
    { name: "Liam", age: 30}     
];


try {
    getUserData(person, "Qwerty")
} catch(err){
    console.log(err.message);
}; // Пользователь не найден









