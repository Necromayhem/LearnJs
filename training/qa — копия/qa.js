


// let arr = [];

// arr.push(1,2,3,4,5)
// console.log(arr); // [1, 2, 3, 4, 5]
// arr.pop()
// console.log(arr); //  [1, 2, 3, 4]
// arr.shift()
// console.log(arr); // [2, 3, 4]
// arr.unshift('прив')
// console.log(arr); // ['прив', 2, 3, 4]

// ====================================================================

// let arr = ["I", "go", "home"];

// delete arr[1]
// console.log(arr); // ['I', empty, 'home']
// console.log(arr.length);

// ====================================================================


// ARR.SPLICE

// let arr = ["Я", "изучаю", "JavaScript"];

// arr.splice(1,1)
// console.log(arr); // ['Я', 'JavaScript']


// let arr = ["Я", "изучаю", "JavaScript", "прямо", "сейчас"];

// arr.splice(0, 3)
// console.log(arr); // ['прямо', 'сейчас']



// let arr = ["Я", "изучаю", "JavaScript", "прямо", "сейчас"];

// let removed = arr.splice(0, 2)
// console.log(removed); // ['Я', 'изучаю']



// let arr = ["Я", "изучаю", "JavaScript"];

// arr.splice(2, 0, "в принципе", "нормально")
// console.log(arr); // ['Я', 'изучаю', 'в принципе', 'нормально', 'JavaScript']



// let arr = [1, 2, 5];

// arr.splice(-1, 0, 3, 4);
// console.log(arr); // [1, 2, 3, 4, 5]



//=========================================================================

// SLICE

// arr.slice([start], [end])

// let arr = ["t", "e", "s", "t"];

// console.log(arr.slice(1, 3)); // ['e', 's']
// console.log(arr.slice(1)); //  ['e', 's', 't']
// console.log(arr.slice(-2)); // ['s', 't']
// console.log(arr.slice(-1)); // ['t']
// console.log(arr.slice(1, 1)); // []

// let newArr = console.log(arr.slice()); // ['t', 'e', 's', 't']


//============================================================================


// CONCAT 

// let arr1 = [1, 2]
// let arr2 = [3, 4]

// let arr3 = console.log(arr1.concat(arr2)); // [1, 2, 3, 4]
// let arr4 = console.log(arr2.concat(arr1)); // [3, 4, 1, 2]
// let arr5 = console.log(arr1.concat(arr2, [5, 6])); // [1, 2, 3, 4, 5, 6]
// let arr6 = console.log(arr1.concat(arr2, 5, 6, 7, 8)); // [1, 2, 3, 4, 5, 6, 7, 8]



// let arr = [1, 2];

// let arrayLike = {
//   0: "что-то",
//   length: 1
// };

// console.log(arr.concat(arrayLike)); // [ 1, 2, { '0': 'что-то', length: 1 } ]




// ============================================================================



// ForEach - функция для каждого элемента массива

// arr.forEach(function(item, index, array) {
//     // ... делать что-то с item
//   });

// let arr = [1, 2, 3]

// arr.forEach((elem) => console.log(elem * 2)) // 2, 4, 6



//=====================================================================

// indexOf/lastIndexOf и includes

// let arr = [1,2,3,4,5,6,7,8,9,5]

// console.log(arr.indexOf(5)); // 4
// console.log(arr.indexOf(5, 6)); // 9
// console.log(arr.lastIndexOf(5)); // 9
// console.log(arr.indexOf(12)); // -1
// console.log(arr.includes(7)); // true
// console.log(arr.includes(45)); // false

//===================================================================

// find и findIndex/findLastIndex
// поиск объекта с определённым условием

// let result = arr.find(function(item, index, array) {
  // если true - возвращается текущий элемент и перебор прерывается
  // если все итерации оказались ложными, возвращается undefined
//});



// let users = [
//     {id: 1, name: "Вася"},
//     {id: 2, name: "Петя"},
//     {id: 3, name: "Маша"}
//   ];
  
// let userId = users.find(item => item.id == 1);
// console.log(userId); // {id: 1, name: 'Вася'}

// let userName = users.find(item => item.name == 'Петя');
// console.log(userName); // {id: 2, name: 'Петя'}

// // Если true - возвращается объект, иначе undefined


//======================================================================

// FILTER

// let results = arr.filter(function(item, index, array) {
//     // если `true` -- элемент добавляется к results и перебор продолжается
//     // возвращается пустой массив в случае, если ничего не найдено
//   });


// let users = [
//     {id: 1, name: "Вася"},
//     {id: 2, name: "Петя"},
//     {id: 3, name: "Маша"}
//   ];


// // возвращает массив, состоящий из двух первых пользователей
// let someUsers = users.filter(item => item.id < 3);
// console.log(someUsers); // [ { id: 1, name: 'Вася' }, { id: 2, name: 'Петя' } ]


//==========================================================================


// MAP

// let result = arr.map(function(item, index, array) {
// возвращается новое значение вместо элемента
//});


// let lengths = [1, 2, 3, 4, 5].map((item) => item ** 2)
// console.log(lengths); // [1, 4, 9, 16, 25]


//==========================================================================


// SORT 

// let arr = [ 1, 2, 15 , 22, 11 ,33, 0, -0 ];
// console.log(arr.sort()); // [0, -0, 1, 11, 15, 2, 22, 33]


// REVERSE

// let arr = [ 1, 2, 15 , 22, 11 ,33, 0, -0 ];
// console.log(arr.reverse()); // [-0, 0, 33, 11, 22, 15, 2, 1]


// SPLIT , JOIN

// let names = 'Вася, Петя, Маша';
// let arr = names.split(', ')
// console.log(arr); // ['Вася', 'Петя', 'Маша']

// let str = arr.join('---')
// console.log(str); // Вася---Петя---Маша























