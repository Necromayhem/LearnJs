'use strict'

const arr = ['a', 'b', 'c'];
const arrObj = {
    0: 'a',
    1: 'b',
    2: 'c'
}
const b = 'b';
arrObj[b] = '111'

// arrObj.b = '1234';    // 1й способ добавления свойства
arrObj['c'] = '0000'; // 2й

console.log(arrObj['b']); //1й способ вызова
console.log(arrObj.b);    //2й

console.log(arrObj.c);


console.log(b)

// console.log(arr[2]);
// console.log(arrObj[2]);

// const obj = {a: 1, b: 2};
// const obj = {
//     'Anna': 500,
//     'Alice': 800
// };









