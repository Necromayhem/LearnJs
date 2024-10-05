// Вот несколько задач для закрепления концепций `call`, `apply` и `bind` в JavaScript:

// ### Задача 1: Приветствие
// Создайте функцию `greet`, которая принимает `greeting` и выводит `greeting + ", " + this.name`. Создайте объект `person` с полем `name`, и используйте `call`, чтобы поприветствовать эту персону.

function greet(greeting){
    console.log(`${greeting} , ${this.name}`);
};

const person = {
    name: "Alex"
};

greet.call(person, "Zdarova") // Zdarova , Alex



// ### Задача 2: Сумма чисел
// Напишите функцию `sum` с неограниченным количеством аргументов, которая возвращает сумму всех переданных ей чисел. Создайте массив чисел, и используйте `apply`, чтобы передать элементы массива в функцию `sum`.

function sum(){
    return console.log(Array.from(arguments).reduce((acc, curr) => acc + curr, 0));
};

const arr = [5, 5, 5, 5, 5];

sum.apply(null, arr) // 25

// ### Задача 3: Математические операции
// Создайте объект `calculator` с методами `add` и `subtract`, которые принимают два числа и возвращают результат сложения и вычитания соответственно. Напишите функцию `calculate`, которая принимает два числа и метод (например, `add` или `subtract`) в качестве аргументов, а также использует `call` для выполнения расчета.

const calculator = {
    add: function(a, b){
        return a + b
    },
    subtract: function(a, b){
        return a - b
    },
}

function calculate(func){
    return function(a, b){
        return func.call(calculator, a, b)
    }
};

const sum1 = calculate(calculator.add);
const sub1 = calculate(calculator.subtract);
console.log(sum1(10, 5)); // 15
console.log(sub1(33, 11)); // 22

// ### Задача 4: Объединение строк
// Создайте функцию `concatStrings`, которая принимает два параметра и объединяет их в одну строку. Создайте объект `stringUtils` с методом `join`, который выводит результат работы `concatStrings`. Используйте `bind`, чтобы создать новую функцию, которая всегда будет использовать `stringUtils` в качестве контекста.

function concatStrings(one, two){
    return `${one} ${two}`;
};

const stringUtils = {
    join: function(one, two){
        console.log(concatStrings(one, two));
    }
};

function logStrings(func){
    return function(one, two){
        return func.bind(stringUtils, one, two)
    }
};

const logMyStrings = logStrings(stringUtils.join);
logMyStrings("Превед", "Медевед")(); // Вывод: Превед Медевед

// ### Задача 5: Копирование методов
// Создайте объект `car` с методом `drive`, который выводит `Машина {this.model} едет`. Создайте объект `sportsCar` со свойством `model`, и используйте `call` или `apply`, чтобы заставить `sportsCar` "водить" машину.

const car = {
    drive: function(){
        console.log(`Машина ${this.model} едет`);
    }
};

const sportsCar = {
    model: "BMW"
};

car.drive.call(sportsCar); // Машина BMW едет

// ### Задача 6: Массив объектов
// Создайте массив объектов `users`, каждый из которых содержит `name` и `age`. Напишите метод `describe` для этих объектов, который выводит `Я {this.name}, мне {this.age} лет`. Используйте `forEach` и `call` для вывода описания всех пользователей в массиве.

let users = [
    {name: "Alex",
     age: 27   
    },
    {name: "Inga",
        age: 20   
    },
    {name: "Ben",
    age: 45   
    }
];

function describe(){
    console.log(`Я ${this.name}, мне ${this.age} лет`);
};

users.forEach(user => describe.call(user))



// ### Задача 7: Параметры по умолчанию
// Создайте функцию `multiply`, которая умножает два числа. Используйте `bind`, чтобы создать новую функцию, которая всегда будет умножать на 2. Проверьте работу этой функции с различными значениями.

function multiply(a, b){
    return a * b
};

const multiplyBy2 = multiply.bind(null, 2);

// Проверяем работу функции с различными значениями
console.log(multiplyBy2(4)); //  8
console.log(multiplyBy2(5)); //  10
console.log(multiplyBy2(10)); // 20


// ### Задача 8: Сложная функция
// Создайте функцию `complexOperation`, которая принимает три параметра `a`, `b` и `operation` (функцию). Создайте несколько базовых операций, таких как `add`, `subtract`, и используйте `apply` для выполнения операции с массивом аргументов.

function complexOperation(a, b, operation){
    return operation.apply(null, [a, b])
};

function add(a, b){
    return a + b
};

function subtract(a, b){
    return a - b
};

console.log(complexOperation(5, 4, add)); // 9
console.log(complexOperation(11, 5, subtract)); // 6





// ### Задача 9: Подсчет объектов
// Напишите функцию `countProperties`, которая возвращает общее количество свойств объекта. Используйте `call` для вызова этой функции на различных объектах и выводите результат.

const exampleObject = {
    name: "Diana",
    age: 32
};

function countProperties() {
    let count = 0;

    // Перебираем свойства объекта, переданного через call
    for (let key in this) {
        if (this.hasOwnProperty(key)) {
            count++;
        }
    }

    return count;
}

console.log(countProperties.call(exampleObject));

// ### Задача 10: Логирование данных
// Создайте объект `logger` с методом `log`, который выводит любой аргумент в консоль. Создайте функцию `logData`, которая принимает данные и выводит их с использованием метода `log`. Используйте `bind`, чтобы сохранить контекст `logger` и переназначить `logData` для конкретных данных.

const logger = {
    log: function(arg){
        console.log(arg);
    }
};

function logData(func){
    return function(arg){
        return func.bind(logger,arg);
    }
};

logData(logger.log)("Привет")(); // Привет


// Эти задачи помогут вам лучше понять и закрепить использование методов `call`, `apply` и `bind` в JavaScript. Удачи!