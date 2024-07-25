// 1)Создайте функцию для перевода всех строк в массиве в нижний регистр. Элементы, не являющиеся строками, должны оставаться неизменными.


//Пример
//arrayLowerCase(['Red', 'Green']) == ['red', 'green']
// arrayLowerCase([1, 'Green']) == [1, 'green']


// function arrayLowerCase(arr){
//    let lowerCase = arr.map((word) => {
//     if(typeof word === 'string'){
//         return word.toLowerCase()
//     }
//     return word
//    })

//    return lowerCase
// }


// console.log(arrayLowerCase([1, 'Green']));

//=============================================


// 2) Я новичок в программировании и теперь хочу получить сумму двух массивов... На самом деле сумму всех их элементов. Буду признателен за помощь.

// P.S. Каждый массив содержит только целые числа. Вывод — тоже число.

// function arrayPlusArray(arr1, arr2){
//     let sum1 = 0;
//     let sum2 = 0;

//     for(let i = 0; i < arr1.length; i++){
//         sum1 += arr1[i]
//     }

//     for(let i = 0; i < arr2.length; i++){
//         sum2 += arr2[i]
//     }

//     return sum1 + sum2
// }

// console.log(arrayPlusArray([1, 2, 3], [4, 5, 6])); // 21

// ============================================================

// 3) В этом простом упражнении вы создадите программу, которая принимает значение , integer и возвращает список его кратных вплоть до другого значения . limit Если limit является кратным integer, его также следует включить. В функцию будут передаваться только положительные целые числа, не состоящие из 0. Предел всегда будет выше основания.

// Например, если переданы параметры (2, 6), функция должна вернуть [2, 4, 6]значения, поскольку 2, 4 и 6 являются кратными 2 до 6.


// function findMultiples(integer, limit){
//     let int = integer;
//     let lim = limit;
//     let count = lim / int
//     let arr = []


//     if(count){
        
//         for(let i = 1; i <= count; i++){
//             arr.push(int * i)
//         }
        
//     }
//     return arr
// }

// console.log(findMultiples(5, 25));
// console.log(findMultiples(11, 54));
// console.log(findMultiples(4, 27));

// ================================================================




// 4) Вам даны два отсортированных массива, которые оба содержат только целые числа. Ваша задача — найти способ объединить их в один, отсортированный в порядке возрастания. Завершите функцию mergeArrays(arr1, arr2), где arr1 и arr2 — исходные отсортированные массивы.

// Вам не нужно беспокоиться о проверке, так как arr1 и arr2 должны быть массивами с 0 или более целыми числами. Если оба arr1 и arr2 пусты, то просто верните пустой массив.

// Примечание: arr1 и arr2 могут быть отсортированы в разных порядках. Также arr1 и arr2 могут иметь одинаковые целые числа. Удалите дубликаты в возвращаемом результате.



// function mergeArrays(arr1, arr2){
//     // let merge = arr1.concat(arr2)
//     // let sorted = merge.sort((a, b) => a - b)
//     // let uniqItem = [...new Set(sorted)]
//     // return uniqItem


//     return [...new Set(arr1.concat(arr2).sort((a, b) => a - b))]
// }

// console.log(mergeArrays([1,3,5,7,9,11,12], [1,2,3,4,5,10,12]));

//====================================================================


// 5) Сортировать массив по индексам в другом массиве.
// Гарантируется, что оба массива имеют одинаковый размер, и что сортировочный массив имеет все требуемые индексы.

//sort(['x', 'y', 'z'], [1, 2, 0]) => ['z', 'x', 'y']
// sort(['z', 'x', 'y'], [0, 2, 1]) => ['z', 'y', 'x']


// function sort(initialArray, sortingArray) {
//     // return sortingArray.map(index => initialArray[index]) переииндексация не работает, нужно отсортировать!!!

//     let sortedArray = new Array(initialArray.length);

//     for(let i = 0; i < sortedArray.length; i++){
//         sortedArray[sortingArray[i]] = initialArray[i]
//     }
//     return sortedArray;
// }

// console.log(sort(['x', 'y', 'z'], [1, 2, 0])); // ['y', 'z', 'x']
// console.log(sort(['apple', 'banana', 'cherry'], [2, 1, 0]))
// console.log(sort([1, 2, 3, 4], [3, 0, 1, 2]))




