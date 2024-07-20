// Создание массива

// let arr = [];
// let arr = new Array

// let arrOne = [
//     'Ваня',
//     'Саша',
//     'Маша'
// ]

// console.log(arrOne);

// let arrTwo = [
//     'Alex',
//     {
//         name: "Ivan",
//         age: 30
//     },
//     1945,
//     true,
//     false,
//     [],
//     {},
//     function (){
//         console.log('privet');
//     },
// ];

// let matrix = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]

// console.log(matrix[0][2]); // 3
// console.log(matrix[1][1]); // 5
// console.log(arrTwo);


// let arrOne = ['alex', 'ivan', 'maks']
// console.log(arrOne[1]); // ivan
// console.log(arrOne[6]); // undefined



// let arrTwo = [
//     'Alex',
//     {
//         name: "Ivan",
//         age: 30
//     },
//     1945,
//     true,
//     false,
//     [],
//     {},
//     function (){
//         console.log('privet');
//     },
// ];

// console.log(arrTwo[1].name); // Ivan
// console.log(arrTwo[7]()); // privet // undefined
// console.log(arrTwo.length); // 8


// Массив как объект копируется по ссылке

// let arr = ['Ivan', 'Oleg', 'Egor']

// let arrNew = arr;

// arrNew.length = 2;

// console.log(arr); // ['Ivan', 'Oleg']



// Изменение значений

// let arr = ['Ivan', 'Oleg', 'Egor']

// arr[0] = 'Alex'

// console.log(arr); // ['Alex', 'Oleg', 'Egor']

// arr[3] = 'Maks'

// console.log(arr); // ['Alex', 'Oleg', 'Egor', 'Maks']

// arr[123] = 'what?'
// console.log(arr); // ['Alex', 'Oleg', 'Egor', 'Maks', empty × 119, 'what?']




// МЕТОДЫ МАССИВОВ

// метод push - добавляет элемент в конец массива

// let arr = ['alex', 'ivan', 'oleg']

// arr.push('iiiiiigor')
// console.log(arr); // ['alex', 'ivan', 'oleg', 'iiiiiigor']

// arr.push('dima', 'maks')
// console.log(arr); // ['alex', 'ivan', 'oleg', 'iiiiiigor', 'dima', 'maks']



// Метод shift - удаляет элемент в начале,
// так что второй элемент становится первым


// let arr = ['alex', 'ivan', 'oleg']
// arr.shift();
// console.log(arr); // ['ivan', 'oleg']


// Метод pop - удаляет последний элемент


// let arr = ['alex', 'ivan', 'oleg']
// arr.pop();
// console.log(arr); // ['alex', 'ivan']


// Метод unshift - добавляет элемент в начало,
// сдвигая все остальные

// let arr = ['alex', 'ivan', 'oleg']
// arr.unshift('dima')
// console.log(arr); // ['dima', 'alex', 'ivan', 'oleg']
// arr.unshift('maks','vika')
// console.log(arr); // ['maks', 'vika', 'dima', 'alex', 'ivan', 'oleg']




// Удаление/добавление/изменение конкретных элементов


// let arr = ['alex', 'ivan', 'oleg']

// delete arr[1];
// console.log(arr); // ['alex', empty, 'oleg']
// console.log(arr[1]); // undefined
// console.log(arr.length); // 3



// Метод splice. Позволяет добавить, удалить и заменить элементы.
// Синтаксис arr.splice(index[, deleteCount, elem1, ..., elemN])

// Удаляем элемент
// let arr = ['alex', 'ivan', 'oleg']
// // Начиная с первой позиции('ivan') удаляем один элемент
// arr.splice(1, 1);
// console.log(arr); // ['alex', 'oleg']

// Удаляем элемент и возвращаем его в переменную

// let arr = ['alex', 'ivan', 'oleg']

// let removed = arr.splice(0,1)
// console.log(removed); // ['alex']


// Замена элементов

// let arr = ['alex', 'ivan', 'oleg']
// // Начиная с 0 позиции заменяем один элемент
// arr.splice(0, 1, 'zamena')
// console.log(arr); // ['zamena', 'ivan', 'oleg']


// Добавление элементов

// let arr = ['alex', 'ivan', 'oleg']
// // Начиная с 1 позиции(перед 'ivan') добавляем два элемента
// arr.splice(1, 0, 'el1', 'el2')
// console.log(arr); // ['alex', 'el1', 'el2', 'ivan', 'oleg']


// Удаление элемента

// let arr = ['alex', 'ivan', 'oleg']
// // Начиная с последней позиции удаляем 1 элемент
// arr.splice(-1, 1)
// console.log(arr); // ['alex', 'ivan']






// Метод slice.
// Создаёт новый массив, в котором копирует часть либо весь массив
// Синтаксис arr.slice([start], [end]) не включая [end]

// Копируем часть массива

// let arr = ['alex', 'ivan', 'oleg']

// // Начиная с 1й позиции 'ivan'
// // До 2й позиции 'oleg' не включая

// let arr2 = arr.slice(1, 2)
// console.log(arr2); // ['ivan']

// // Начиная с предпоследней позиции 'ivan'
// // до последней позиции 'oleg' не включая

// let arr3 = arr.slice(-2, -1)
// console.log(arr3); // ['ivan']

// // копируем весь массив

// let newArray = arr.slice()
// console.log(newArray); // ['alex', 'ivan', 'oleg']




// Метод concat 
// Создаёт новый массив, в котором копирует данные из других массивов
// и дополнительные значения (в конец массива)
// Синтаксис arr.concat(arg1, arg2...)


// let arr1 = ['alex', 'ivan', 'oleg']
// let arr2 = arr1.concat('Maks', 'Valera')
// console.log(arr2); // ['alex', 'ivan', 'oleg', 'Maks', 'Valera']




// Поиск в массиве

// Методы indexOf/LastIndexOf и includes
// аналоги строковым методам*

// 1) arr.indexOf(item,from) ищет item начиная с индекса from,
// и возвращает индекс, на котором был найдем искомый итем, иначе -1
// 2) arr.lastIndexOf(item,from) тоже самое, только справа налево
// 3) arr.includes(item, from) - ищет item, начиная с индекса from,
// и возвращает true, если поиск успешен, иначе false.



// let arr = ['alex', 'ivan', 'oleg']

// // indexOf
// console.log(arr.indexOf('alex'));    // 0
// console.log(arr.indexOf('ira'));     // -1
// console.log(arr.indexOf('ivan', 2)); // -1
// console.log(arr.indexOf('ivan'));    // 1

// // includes
// console.log(arr.includes('alex'));   // true
// console.log(arr.includes('ira'));    // false
// console.log(arr.includes('ivan', 2));// false



// find и findIndex
// поиск в массиве объектов с определённым условием

// Синтаксис
// let result = arr.find(function(item, index, array){
// если true - возвращается текущий элемент и перебор прерывается
// если все итерации оказались ложными, возвращается undefined
//});

// let arr = [
//     {name:'ivan', age:25},
//     {name:'alex', age:36},
//     {name:'oleg', age:41},
// ]

// // let result1 = arr.find(function(item, index, array){
// //     return item.age === 36
// // })

// let result1 = arr.find(item => item.age === 36)

// console.log(result1); // {name: 'alex', age: 36}

// let result2 = arr.findIndex(item => item.age === 36)

// console.log(result2); // 1



// Метод filter
// Ищет все элементы, на которых функция-колбэк вернёт true.

// let results = arr.filter(function (item, index, array){
// если true - элемент добавляется к результату и перебор продолжается.
// возвращается пустой массив в случае, если ничего не найдено
//})


// let arr = [
//     {name:'ivan', age:25},
//     {name:'alex', age:36},
//     {name:'oleg', age:41},
// ]

// // let result = arr.filter(function (item, index, array){
// //     return item.age > 25
// // })

// let result = arr.filter(item => item.age > 25)

// console.log(result); // [ { name: 'alex', age: 36 }, { name: 'oleg', age: 41 } ]




// Сортировка массивов

// Метод sort(fn)
// сортирует массив на месте, меняя в нём порядок элементов

// Сортировка слов

// let arr = [  'oleg','ivan','alex']
// console.log(arr.sort()); // ['alex', 'ivan', 'oleg']

// Сортировка чисел

// let arr = [8, 22 , 1]
// console.log(arr.sort()); // [1, 22, 8]

// // По умолчанию элементы сортируются как строки.
// // Для строк применяется лексикографический порядок
// // "8" > "22"
// console.log('8' > '22'); // true


// Функция сортировки

// let arr = [8, 22 , 1]


// function compareNumeric(a,b){
//     console.log(`Сравниваем ${a} и ${b}`);
//     // if(a > b) return 1;
//     // if(a == b) return 0;
//     // if(a < b) return -1;

//     return a - b
// }



// console.log(arr.sort((a, b) => a - b)) // [1, 8, 22]






// Метод reverse
// меняет порядок элементов в массиве на обратный


// let arr = [8, 22 , 1, 11, 23]

// console.log(arr.reverse()); // [23, 11, 1, 22, 8]





// Преобразование массивов

// Метод map.
// вызывает функцию для каждого элемента массива
// и возвращает массив результатов выполнения этой функции

// let result = arr.map(function (item, index, array){
// возвращается новое значение вместо элемента
//})

// let arr = ['alex', 'ivan', 'oleg'];

// // let result = arr.map(function (item, index, array){
// //     return item[0]
// // })

// let result = arr.map(item => item[0])

// console.log(result); // ['a', 'i', 'o']

// console.log(arr);





// Методы split и join
// split преобразовывет строку в массив по заданному разделителю
// Синтаксис: str.split(delim)


// let str = 'Ваня,Игорь,Олег'

// let arr = str.split(',')
// console.log(arr); // ['Ваня', 'Игорь', 'Олег']

// // Можно ограничить кол-во элементов, которые попадут в массив

// let arr2 = str.split(',', 2)
// console.log(arr2); // ['Ваня', 'Игорь']


// Метод join преобразовывет массив в строку с заданным разделителем


// let arr = ['Ваня', 'Игорь', 'Олег'];
// let str = arr.join(',')
// let str2 = arr.join(', ')
// console.log(str); // Ваня,Игорь,Олег
// console.log(str2); // Ваня, Игорь, Олег

// // Получение строки из массива

// let arr2 = ['Ваня', 'Игорь', 'Олег'];
// console.log(String(arr2)); // Ваня,Игорь,Олег






// Проверка Array.isArray

// Массивы не являются отдельным типом данных.
// Они основаны на объектах


// let obj = {};
// let arr = [];

// console.log(typeof obj); // object
// console.log(typeof arr); // object


// Как узнать где массив, а где нет?

// if (Array.isArray(arr)) {
//     console.log('Это массив!!1');
// } else {
//     console.log('Это не массив!!1');
// };




// Перебор элементов

// let arr = ['Ваня', 'Игорь', 'Олег'];
// console.log(arr.length);

// // Цикл for 
// for (let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }


// Цикл for...of
// Можно использовать для вывода значений

// let arr = ['Ваня', 'Игорь', 'Олег'];

// for (let name of arr){
//     console.log(name);
// };



// Метод перебора forEach
// Выполняет функцию для каждого элемента массива
// arr.forEach(function (item, index, array){
// ...делать что-то с item
//});

// let arr = ['Ваня', 'Игорь', 'Олег'];

// // arr.forEach(function (item, index, array){
// //     console.log(`${item} находится на ${index} позиции`);
// // })

// arr.forEach((item, index, array) => {
//     console.log(`${item} находится на ${index} позиции`);
// })






// или так

// let arr = ['Ваня', 'Игорь', 'Олег'];

// arr.forEach(show);

// function show(item){
//     console.log(item);
// }






// Методы reduce/reduceRight
// Если нужно перебрать массив - for, for of, forEach
// Если нужно перебрать массив и вернуть данные для каждого элемента - map


// Методы arr.reduce/arr.reduceRight похожи на эти модели,
// но они намного сложнее и используются для вычисления какого-нибудь
// единого значения на основе всего массива.

// Синтаксис 
// let value = arr.reduce(function (previousValue, item, index, array){
// ...
//}, [initial]);

// К привычным аргументам item, index, array добавляется previousValue

// previousValue - результат предыдущего вызова этой функции,
// равен initial при первом вызове(если передан initial)
// item - очередной элемент массива,
// index - его индекс,
// array - сам массив.


// Функция применяется по очереди ко всем элементам массива и "переносит"
// свой результат на следующий вызов.


// let arr = [1, 2, 3, 4];
// let reduceValueOne = arr.reduce(function (previousValue, item, index, array){
//     return item + previousValue
// }, 0);

// console.log(reduceValueOne);

// Шаг 1
// previousValue = 0
// item = 1
// их сумма = 1

// Шаг 2
// previousValue = 1
// item = 2
// их сумма = 3

// Шаг 3
// previousValue = 3
// item = 3
// их сумма = 6

// Шаг 4
// previousValue = 6
// item = 4
// их сумма = 10



// let arr = ['alex', 'ivan', 'maks']

// // Если не указать начальное значение, то оно будет равно первому элементу
// // массива(previousValue='alex'), а работа метода начнётся со второго элемента
// // item='ivan'

// let reduceValueTwo = arr.reduce(function (previousValue, item, index, array){
//     console.log(previousValue);
//     console.log(item);
//     return `${item}, ${previousValue}`
// });
// console.log(`Пользователи ${reduceValueTwo}`);


