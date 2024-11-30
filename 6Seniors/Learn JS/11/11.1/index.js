// Введение: колбэки


// function twoSquared(){
//     return 2 * 2
// }

// twoSquared()

// function threeSquared(){
//     return 3 * 3
// }

// function numSquared(num){
//     return num * num
// }

// function copyArrayAndSquareNums(arr){
//     const output = [];

//     for(let i = 0; i<arr.length; i++){
//         output.push(arr[i] * arr[i])
//         // output.push(arr[i] ** 2)
//     }

//     return output
// }

// // console.log(copyArrayAndSquareNums([2,3,4]));


// function copyArrayAndSquareNumsMap(arr){
//     const newArr = arr;
//     return newArr.map((num) => num ** 2)
// };

// let arr = [5, 5, 7];

// // console.log(copyArrayAndSquareNumsMap(arr));
// // console.log(arr);


// function copyArrayAndDivideByTwo(arr){
//     const output = [];

//     for(let i = 0; i<arr.length; i++){
//         output.push(arr[i] / 2)
//     }

//     return output
// }


// function copyArrayAndDoSmth(arr, instructions){
//     const output = [];

//     for(let i = 0; i < arr.length; i++){
//         output.push(instructions(arr[i]))
//     }

//     return output
// }


// let arr = [2, 3, 4, 5]

// // console.log(copyArrayAndDoSmth(arr, num => num**3)); // [8, 27, 64, 125]

// function numSquared(num){
//     return num * num
// }

// const result = copyArrayAndDoSmth(arr, numSquared)
// console.log(result); // [4, 9, 16, 25]

















