"use strict"

// let arr = [];
// let arr = new Array();

// let arrOne = [
//     'Ваня',
//     'Петя',
//     'Оля',
// ];

// console.log(arrOne[1]); // Петя
// console.log(arrOne[5]); // undefined


// let arrTwo = [
//     "Коля",
//     {
//         type: "JS",
//         age: 36
//     },
//     true,
//     function(){
//         console.log('Привет, Я Коля');
//     }
// ];

// console.log(arrTwo);
// console.log(arrTwo[0]);
// console.log(arrTwo[1].type);
// console.log(arrTwo[2]);
// arrTwo[3]();


// let matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
// ];

// console.log(matrix[1][1]);



// let arrOne = ['a', 'b', 'c'];
// console.log(arrOne.length);



// let arrOne = ['a', 'b', 'c'];
// console.log(arrOne);

// let newArr = arrOne;

// newArr.length = 2;

// console.log(arrOne);



// let arrOne = ['a', 'b', 'c'];

// arrOne.push('d')
// console.log(arrOne); // [ 'a', 'b', 'c', 'd' ]


// let arrOne = ['a', 'b', 'c'];

// arrOne.shift();
// console.log(arrOne);  // [ 'b', 'c' ]


// let arrOne = ['a', 'b', 'c'];

// arrOne.pop();
// console.log(arrOne); // [ 'a', 'b' ]



// let arrOne = ['a', 'b', 'c'];

// arrOne.unshift(1, 2);
// console.log(arrOne); // [ 1, 2, 'a', 'b', 'c' ]


// let arr = ['a', 'b', 'c', 'd', 'e'];

// delete arr[1];

// console.log(arr); // [ 'a', <1 empty item>, 'c', 'd', 'e' ]
// console.log(arr[1]); // undefined
// console.log(arr.length); // 5



// Метод splice. Позволяет добавлять, удалять и заменять элементы.
// Синтаксис arr.splice(index[, deleteCount, elem1, ..., elemN])

// Удаляет элемент
// let arr = ['a', 'b', 'c', 'd', 'e'];
// // Начиная с первой позиции (b), удаляем один элемент
// arr.splice(1, 1);
// console.log(arr); // [ 'a', 'c', 'd', 'e' ]


// Удаляем элемент и возвращаем его в переменную
// let arr2 = ['a', 'b', 'c', 'd', 'e'];
// let removed = arr2.splice(1, 1);
// console.log(removed); // [ 'b' ]

// Заменяем элементы
// let arr3 = ['a', 'b', 'c', 'd', 'e'];
// // Начиная с 0 позиции (a), заменяем один элемент
// arr3.splice(0, 1, 'Z')
// console.log(arr3); // [ 'Z', 'b', 'c', 'd', 'e' ]


// Добавляем элементы
// let arr4 = ['a', 'b', 'c'];
// // Начиная с первой позиции (перед b) добавляем 3 элемента
// arr4.splice(1, 0, '1', '2', '3')
// console.log(arr4); // [ 'a', '1', '2', '3', 'b', 'c' ]

// Удаляем элемент
// let arr5 = ['a', 'b', 'c', 'd', 'e'];
// arr5.splice(0, 1)
// console.log(arr5);// [ 'b', 'c', 'd', 'e' ]
// arr5.splice(-1, 1)
// console.log(arr5);// [ 'b', 'c', 'd' ]


// Метод slice.
// Создаёт новый массив, в который копирует часть либо весь массив
// Синтаксис arr.slice([start], [end]) не включая [end]

// Копируем часть массива 
// let arr1 = ['Moscow', 'London', 'Azov', 'Rostov'];

// // Начиная с первой позиции London 
// // до 2й позиции Azov(не включая) 
// let arr2 = arr1.slice(1, 2);
// console.log(arr2); // [ 'London' ]

// // Начиная с предпоследней позиции Azov 
// // до последней Rostov(не включая)
// let arr3 = arr1.slice(2, 3);
// console.log(arr3); // [ 'Azov' ]

// // Копируем весь массив 
// let arr4 = arr1.slice();
// console.log(arr4);


// arr4.push('new', 'newnew');
// console.log(arr4);
// console.log(arr1);


// Метод concat
// Создаёт новый массив, в котором копирует данные из других массивов 
// и дополнительные значения (в конец массива)
// Синтаксис arr.contact(arg1, arg2...)

// let arrOne = ['Dan', 'John', 'Alex', 'Ben'];
// let arrTwo = arrOne.concat('Kris', 'Jay');
// console.log(arrTwo); // [ 'Dan', 'John', 'Alex', 'Ben', 'Kris', 'Jay' ]


// Поиск в массиве

// Методы indexOf/lastIndexOf и includes
// аналоги строковым методам


// 1. arr.indexOf(item, from) ищет item, начиная с индекса from
// и возвращает индекс, на котором найден искомый элемент, иначе -1
// 2. arr.lastIndexOf(item, from) - то же самое, но ищет справа налево
// 3. arr.includes(item, from) - ищет item, начиная с from,
// и возвращает true, если поиск успешен, иначе false

// let arr = ['Ваня', 'Илья', 'Олег'];

// // indexOf
// console.log(arr.indexOf('Илья'));
// console.log(arr.indexOf('Вася'));
// console.log(arr.indexOf('Олег', 2));
// console.log(arr.indexOf('Илья', 2));

// // includes
// console.log(arr.includes('Илья'));
// console.log(arr.includes('Вася'));
// console.log(arr.includes('Илья', 2));
// console.log(arr.includes('Олег', 2));



// find и findIndex
// поиск в массиве объектов с определённым условием

// синтаксис
// let result = arr.find(function(item, index, array)){
// если true - возвращает текущий элемент и перебор прерывается
// если все итерации оказались ложными - возвращает undefined}

// let arr = [
//     {name: 'Вася', age: 36, city: 'Moscow'},
//     {name: 'Коля', age: 18, city: 'Azov'},
//     {name: 'Маша', age: 18, city: 'NY'},
//     {name: 'Денис', age: 18, city: 'Omsk'},
//     {name: 'Витя', age: 18, city: 'Novgorod'},
//     {name: 'Оля', age: 'Не скажу', city: 'London'},
// ]

// // let resultOne = arr.find(function (item, index, array){
// //     return item.age === 18;
// // });

// let resultOne = arr.find(item => item.age === 18)

// console.log(resultOne); // { name: 'Коля', age: 18, city: 'Azov' }

// // fiveIndex
// let resulTwo = arr.findIndex(item => item.age === 18)
// console.log(resulTwo); // 1




// filter
// Метод ищет ВСЕ элементы, на которых функция-колбэк вернёт true

// let results = arr.filter(function (item, index, array){
// если true - элемент добавляется к результату, и перебор продолжается.
// возвращается пустой массив в случае, если ничего не найдено})



// let arr = [
//     {name: 'Вася', age: 36, city: 'Moscow'},
//     {name: 'Коля', age: 18, city: 'Azov'},
//     {name: 'Маша', age: 18, city: 'NY'},
//     {name: 'Денис', age: 18, city: 'Omsk'},
//     {name: 'Витя', age: 18, city: 'Novgorod'},
//     {name: 'Оля', age: 'Не скажу', city: 'London'},
// ]

// let resultOne = arr.filter(function(item, index, array){
//     return item.age === 18;
// });

// let resultOne = arr.filter(item => item.age === 18);

// console.log(resultOne); 


// Сорторовка массивов

// Метод sort
// сортирует массив на месте, меняя в нём порядок элементов

// сортировка слов
// let arrOne = ['Иштван', 'Ваня', 'Оля',];
// console.log(arrOne.sort()); // [ 'Ваня', 'Иштван', 'Оля' ]

// // // сортировка чисел
// let arrTwo = [8, 22, 1];
// console.log(arrTwo.sort()); // [ 1, 22, 8 ]

// // По умолчанию элементы сортируются как строки.
// // Для строк применяется лексикографический порядок
// // и выходит, что '8' > '22'
// console.log('8' > '22');


// Сортировка чисел
// let arrTwo = [8, 22 , 11, 87, 1];
// console.log(arrTwo.sort());
// Функция сортировки
// function compareNumeric(a, b){
//     console.log(`Сравниваем ${a} и ${b}`);
//     if (a > b) return 1;
//     if (a == b) return 0;
//     if (a < b) return -1;
// }
// console.log(arrTwo.sort(compareNumeric)); // [ 1, 8, 11, 22, 87 ]

// // Запись короче
// function compareNumeric(a, b){
//     console.log(`Сравниваем ${a} и ${b}`);
//     return a - b
// }
// console.log(arrTwo.sort(compareNumeric)); // [ 1, 8, 11, 22, 87 ]


// Ещё короче
// console.log(arrTwo.sort((a, b) => a - b)); // [ 1, 8, 11, 22, 87 ] 



// Метод reverse
// меняет порядок элементов в массиве на обратный

// let arr = ['1', '2', '3',];
// console.log(arr.reverse()); // [ '3', '2', '1' ]



// Преобразование массивов

// Метод map.
// вызывает функцию для каждого элемента массива 
// и возвращает массив результатов выполнения этой функции.

// let result = arr.map(function(item, index, array){
// возвращается новое значение вместо элемента
// });

// let arr = ['Ваня', 'Илья', 'Оля'];

// let result = arr.map(function(item, index, array){
//     return item + ' в сети'
// });

// let result = arr.map(item => item[0])
// console.log(arr);
// console.log(result);


// Методы split и join

// метод split преобразовывает строку в массив
// по заданному разделителю
// Синтаксис: str.split(delim)

// let str = 'Ваня,Илья,Оля,Петя,Гриша,Коля';

// let arr = str.split(',');
// console.log(str);// Ваня,Илья,Оля,Петя,Гриша,Коля
// console.log(arr);// [ 'Ваня', 'Илья', 'Оля', 'Петя', 'Гриша', 'Коля' ]

// let arrTwo = str.split(",", 4)
// console.log(arrTwo); // [ 'Ваня', 'Илья', 'Оля', 'Петя' ]



// Метод join

// метод join преобразовывает массив в строку
// с заданным разделителем
// Синтаксис: arr.join(glue)


// let arr = [ 'Ваня', 'Илья', 'Оля', 'Петя', 'Гриша', 'Коля' ];
// let str1 = arr.join('  '); // Ваня  Илья  Оля  Петя  Гриша  Коля
// let str2 = arr.join(','); // Ваня,Илья,Оля,Петя,Гриша,Коля
// let str3 = arr.join(' - '); // Ваня - Илья - Оля - Петя - Гриша - Коля
// let str4 = String(arr); // Ваня,Илья,Оля,Петя,Гриша,Коля
// console.log(str1);
// console.log(str2);
// console.log(str3);
// console.log(str4);




// Проверка Array.isArray
// Массивы - это объекты


// let obj = {};
// let arr = [];

// console.log(typeof obj); // object
// console.log(typeof arr); // object

// if (Array.isArray(arr)){
//     console.log('Это массив!');
// } else {
//     console.log('Это не массив!');
// } 
// // Это массив!


// if (Array.isArray(obj)){
//     console.log('Это массив!');
// } else {
//     console.log('Это не массив!');
// } 
// Это не массив!



// Перебор элементов
// let arr = ['Ваня', 'Игорь','Оля', 'Маша','Витя', 'Дима',];
// console.log(arr.length); // 6

// цикл FOR
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i] + ' в сети');
// };


// цикл FOR... OF
// for (let arrItem of arr){
//     console.log(arrItem);
// }



// Метод перебора forEach
// Выполняет функцию для каждого элемента массива
// arr.forEach(function(item, index, array){
// ... делать что-то с item
// })


// let arr = ['Ваня', 'Игорь','Оля', 'Маша','Витя', 'Дима',];

// arr.forEach(function(item, index, array){
//     console.log(`${item} находится на позиции ${index} в ${array}`);
// })

// стрелочная функция

// arr.forEach((item, index, array) => {
//     console.log(`${item} находится на позиции ${index} в ${array}`);
// })



// let arr = ['Ваня', 'Игорь','Оля', 'Маша','Витя', 'Дима',];

// arr.forEach(show);

// function show(item){
//     console.log(item);
// }





// Методы reduce/reduceRight

// Если нужно перебрать массив, то можно использовать forEach, for, for...of.
// Если нужно перебрать массив и вернуть данные для каждого элемента - используем map.

// Методы arr.reduce и arr.reduceRight похожи на эти методы,
// но они немного сложнее и используются для вычисления 
// какого-нибудь единого значения на основе всего массива.

// Синтаксис
// let value = arr.reduce(function(previousValue, item, index, array){
//     ...
// }, [initial]);

// К привычным аргументам item, index, array добавляется previousValue:

// previousValue - результат предыдущего вызова этой функции,
// равен initial при первом вызове (если передан initial),
// item - очередной элемент массива,
// index - его индекс,
// array - сам массив.

// Функция применяется по очереди ко всем элементам массива
// и "переносит" свой результат на следующий вызов.


    


// let arrOne = [1, 2, 3, 4];
// let reduceValueOne = arrOne.reduce(function(previousValue, item, index, array){
//     return item + previousValue;
// }, 0);
// console.log(reduceValueOne); // 10

// Шаг №1
// previousValue = 0
// item = 1
// их сумма = 1

// Шаг №2
// previousValue = 1
// item = 2
// их сумма = 3

// Шаг №3
// previousValue = 3
// item = 3
// их сумма = 6

// Шаг №4
// previousValue = 6
// item = 4
// их сумма = 10



let arrTwo = ['Ваня', 'Илья', 'Оля'];
// Если не указать начальное значение, то оно будет равно первому элементу массива (previousValue=Ваня)
// А работа метода начнётся со второго элемента (item=Илья)

let reduceValueTwo = arrTwo.reduce(function(previousValue, item, index, array){
    console.log(previousValue);
    console.log(item);
    return `${item}, ${previousValue}`
});

console.log(reduceValueTwo);
















