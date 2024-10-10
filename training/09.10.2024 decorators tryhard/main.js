// декораторы


// Задача 1: Простой `bind`
// Напиши функцию `getFullName`, которая использует `this` для доступа к объекту, содержащему `firstName` и `lastName`. Создай другой объект с именем и фамилией и используй `bind`, чтобы вызвать `getFullName` с этим объектом.

function getFullName() {
    return `${this.firstName} ${this.lastName}`;
}

const person1 = {
    firstName: 'John',
    lastName: 'Doe'
};

const logPerson1 = getFullName.bind(person1);
// console.log(logPerson1()); // John Doe

const person2 = {
    firstName: 'Иван',
    lastName: 'Иванов'
};

const logPerson2 = getFullName.call(person2);
// console.log(logPerson2); // Иван Иванов


// Задача 2: Использование `call`
// Создай функцию `sum`, которая принимает несколько параметров и возвращает их сумму. Используй `call`, чтобы вызвать `sum` для массива чисел.

function sum() {
    return Array.from(arguments).reduce((acc, val) => acc + val, 0);
};

const arr = [5, 5, 5, 5, 5];

// console.log(sum.call(null, ...arr)); // 25
// console.log(sum.apply(null, arr)); // 25


// ### Задача 3: Использование `apply`
// Реализуй функцию `multiply`, которая принимает всего два аргумента и возвращает их произведение. Используй `apply`, чтобы вызвать `multiply` с массивом двух чисел.

function multiply(x, y) {
    return x * y;
};

const multy1 = multiply.apply(null, [2, 3]);
// console.log(multy1);

const multy2 = multiply.call(null, 2, 6);
// console.log(multy2);

const multy3 = multiply.bind(null, 2, 10);
// console.log(multy3());


// ### Задача 4: Декоратор `call`
// Создай функцию-декоратор `logWithCall`, которая принимает функцию и возвращает новую функцию, которая вызывает оригинальную функцию с использованием `call`, выдавая аргументы. Внутри записи добавь информацию о переданных параметрах.

function logWithCall(fn) {
    return function(...args) {
        console.log(`Calling with arguments: ${args}`);
        return fn.call(this, ...args);
    };
};

function hello(z, x, c){
    return z + x + c
};

const logHello = logWithCall(hello);
// console.log(logHello(1,2,3));



// Вот аналогичная задача для закрепления ваших знаний.
// Создайте функцию-декоратор `timer`, которая принимает другую функцию и возвращает новую функцию. Эта новая функция должна выводить в консоль время, затраченное на выполнение исходной функции, а также вызывать её с переданными аргументами.

// Вот шаги, которые нужно выполнить:

// 1. Создайте функцию-декоратор `timer`, которая принимает функцию `fn` в качестве параметра.
// 2. Внутри `timer` верните новую функцию, которая:
// - Запускает счётчик времени до и после вызова `fn`.
// - Выводит в консоль затраченное время (в миллисекундах) на выполнение `fn`.
// - Вызывает и возвращает результат выполнения оригинальной функции `fn` с переданными аргументами.

function exampleFunction(a, b) {
    // Задержка для имитации длительной операции
    for (let i = 0; i < 1e7; i++) {}
    return a + b;
}

function timer(fn){
    return function(...args){
        // Зафиксируем время начала
        let start = performance.now();

       // Вызовем оригинальную функцию
        let result = fn.apply(this, args);

        // Зафиксируем время окончания
        let end = performance.now();

        // Вычислим время
        let time = end - start;

         // Выводим время выполнения
         console.log(`Время выполнения: ${time} миллисекунд`);
        
         // Возвращаем результат оригинальной функции
         return result;
    }
};

const timedExample = timer(exampleFunction);
// console.log(timedExample(5, 10)); // Время выполнения: 4.8999998569488525 миллисекунд


// Задача 5: Декоратор `bind`
// Создай функцию-декоратор `delay`, которая принимает функцию и задержку в миллисекундах. Она должна возвращать новую функцию, которая вызывает оригинальную функцию после задержки с использованием `bind`.

function delay(fn, ms) {
    return function(...args) {
        setTimeout(() => fn.bind(this)(...args), ms);
    };
}

function sayBye(a, b){
    console.log(a*b);
}

const logBye = delay(sayBye, 3000);
// logBye(5, 5) // 25 через 3 секунды


// Задача 6: `apply` с массивом
// Напиши функцию `avg` для вычисления среднего значения массива чисел.
// Используй метод `apply` для передачи массива в `Math.max`.


function avg(arr){
    const sum = arr.reduce((acc, value) => acc + value, 0);  // Суммируем элементы массива
    const average = sum / arr.length;                         // Вычисляем среднее значение
    return average;                                           // Возвращаем среднее значение
};

function max(){
    return function(arr){
        return Math.max.apply(null, arr)
    }
}

const array = [1, 2, 3, 4, 5, 45];

const logMax = max();
// console.log(logMax(array)); // 45



// Задача 7: `bind` для частичного применения
// Напиши функцию `partial`, которая принимает функцию и возвращает новую функцию с заданными параметрами. Используя это, создай новую функцию, которая всегда будет добавлять 5 к любому переданному числу.

function partial(fn, ...boundArgs){
    return function(...args){
        return fn.bind(this, ...boundArgs)(...args);
    }
};

const add = (x, y) => x + y;

const addFive = partial(add, 5);

// console.log(addFive(10)); // 15
// console.log(addFive(0));  // 5
// console.log(addFive(-3)); // 2



// Задача 8. Создайте функцию `sum`, которая принимает три числа и возвращает их сумму. Используйте эту функцию с методами `call` и `apply`, чтобы вызвать её с аргументами 1, 2 и 3:

function sum(a, b, c){
    return a + b + c
};

// console.log(sum.call(null, 1, 2, 3)); // 6
// console.log(sum.apply(null, [1, 2, 3])); // 6

// Задача 9: Фиксация контекста с `bind`
// Создайте объект `user` с полем `name` и методом `getName`, который возвращает имя пользователя. Используйте `bind`, чтобы создать новую функцию `getNameBound`, которая всегда будет ссылаться на объект `user`, независимо от контекста вызова.

const user = {
    name: "Alex",
    getName: function(){
        return this.name
    }
};

const user2 = {
    name: "Иван",
    getName: function(){
        return this.name
    }
};

const getNameBound = user.getName.bind(user);
const getNameBound2 = user.getName.bind(user2);
// console.log(getNameBound()); // Alex
// console.log(getNameBound2()); // Иван


// Задача 10 Обработка массива с использованием `apply`
// Создайте функцию `processNumbers`, которая принимает функцию и массив чисел. Используйте `apply`, чтобы передать массив чисел в функцию и обработать каждый элемент. В качестве обработчика напишите функцию `square`, которая возвращает квадрат числа.

function processNumbers(fn, arr) {
    return arr.map((num) => fn.apply(null, [num])); // Используем apply для каждого элемента
}

function square(num) {
    return num * num; // Возвращаем квадрат числа
}

const array3 = [1, 2, 3, 4, 5];

// console.log(processNumbers(square, array3)); 


// Задача 11 Фильтрация массивов
// Создайте функцию `filterNumbers`, которая принимает функцию и массив чисел. Используйте `apply`, чтобы передать массив чисел в функцию `fn`, которая должна возвращать `true` для тех чисел, которые необходимо оставить, и `false` — для тех, которые нужно отфильтровать.

function filterNumbers(fn, arr){
    return arr.filter((num) => fn.apply(null, [num]))
};

function filt(num){
    return num <= 10;
};

const array4 = [15, 12, 1, 3, 6, 7, 34, 54, 23, 8, 9, 0];

// console.log(filterNumbers(filt, array4)); // [1, 3, 6, 7, 8, 9, 0]


// Задача 12: Логгирование с фиксированным контекстом
// Создайте объект `logger` с методами `log` и `warn`. Используйте `bind`, чтобы создать фиксированные методы `logToConsole` и `warnToConsole`, которые будут выводить сообщения в консоль.

const logger = {
    log: function(message1){
        console.log(`${message1}`);
    },
    warn: function(message2){
        console.log(`${message2}`);
    },
};

const sayLog = logger.log.bind(logger);
// sayLog("Логгирую"); // Логгирую

const sayWarn = logger.warn.bind(logger);
// sayWarn("Предупреждаю"); // Предупреждаю


// Задача 13: Применение операций ко всем элементам массива
// Создайте функцию `applyOperation`, которая принимает операцию и массив. Используйте `apply` для применения операции к каждому элементу массива. В качестве операции напишите функцию `double`, которая удваивает число.

function applyOperation(fn, arr){
    return arr.map((num) => fn.apply(null, [num]))
};

function double(num){
    return num * 2
};

const array5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(applyOperation(double, array5));
// [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]



// Задача 14: Переопределение контекста с помощью `call`

// Создайте объект `person`, который содержит имя и метод для приветствия:
// Напишите функцию `introduce`, которая принимает объект и вызывает метод `greet` этого объекта, используя `call` для установки контекста.

const person = {
    name: 'Alice',
    greet: function() {
        console.log(`Привет, меня зовут ${this.name}`);
    }
};

function introduce(obj){
    obj.greet.call(obj)
};

// introduce(person);


// Задача 15: Удаление дублирования с помощью `apply`

// Напишите функцию `sum`, которая принимает произвольное количество чисел и возвращает их сумму. Затем создайте метод `calculateTotal`, который принимает массив чисел и вызывает функцию `sum` с использованием `apply`.


function sum(...nums){
    return nums.reduce((acc, num) => acc + num, 0)
};

function calculateTotal(fn, arr){
    return fn.apply(null, arr)
};

const array6 = [1, 2, 3, 4, 5]

// console.log(calculateTotal(sum, array6));


// Задача 16: Фиксация контекста с помощью `bind`

// Создайте объект `counter`, который будет иметь метод `increment`, увеличивающий счётчик на 1 и выводящий текущее значение счётчика. Также создайте функцию `incrementer`, которая вызывает метод `increment` с фиксированным контекстом `counter` с помощью `bind`.
// P.S дописал метод уменьшения счётчика и назаначения текущего счётчика

const counter = {
    count : 0,

    increment: function(){
        this.count++
        console.log(`${this.count}`);
    },

    decrement: function(){
        this.count--
        console.log(`${this.count}`);
    },
    curVal: function(num){
        this.count = num
        console.log(`${this.count}`);
    },
};

function incrementer(obj){
    return obj.increment.bind(obj)
};

function decrementer(obj){
    return obj.decrement.bind(obj)
};

function curInc(obj){
    return function(num){
        return obj.curVal.bind(obj, num)
    }
};

const currentValue = curInc(counter);
currentValue(5)(); // 5
currentValue(11)(); // 11
incrementer(counter)(); // 12
decrementer(counter)(); // 11
decrementer(counter)(); // 10



