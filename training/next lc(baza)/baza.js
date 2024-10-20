//  1)
// const array = [1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1,1,1,1,1, 0, 0, 0, 0,];

// function maxChain(arr){
//   let curr = 0; // текущая последовательность
//   let max = 0; // максимальная последовательность

//   for(let i = 0; i < arr.length; i++){
//     if(arr[i] === 1){
//       curr++;
//       if(curr>max){
//         max = curr;
//       }
//     } else{
//       curr = 0;
//     }
//   } return max;
// }

// // console.log(maxChain(array)); 


// 2) Напишите функцию, которая принимает строку и возвращает её вариант, очищенный от цифр, вшитых в каждое слово, и отсортированный на основе этих цифр.

// function order(str){

// }
// console.log(order("is2 Thi1s t4est 3a"));
// // // This is a test
// // console.log(order("javaSc3ript 1I li2ke"));
// // // I like javaScript
// // console.log(order("4like Lot1s panca5kes pe3ople o2f"));
// // // Lots of people like pancakes
// // console.log(order(""));
// // //""



function collatz(n, step = 1){
    if(n <= 0 || !Number.isInteger(n)) return "Только положительное число"
    console.log(`Шаг ${step}: ${n}`);
    if(n === 1) return n;
    if(n % 2 === 0) return collatz(n / 2, step + 1);
    return collatz(n * 3 + 1, step + 1);
};
// console.log(collatz(13));

// const obj = {
//     value: 100,
//     getValue: function() {
//         const innerFunc = () => {
//             return this.value;
//         };
//         return innerFunc();
//     }
// };

// console.log(obj.getValue());












