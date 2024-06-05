"use strict"


// if (4 == 9) {
//     console.log("ok!")
// } else {
//     console.log("Error")
// }


// const num = 49;

// if (num < 49) {
//     console.log("Error!");
// } else if (num > 100) {
//     console.log("Слишком много")
// } else {
//     console.log("Ок")
// } 


// (num === 50) ? console.log("Ок") : console.log("Error!");


const num = 50;

switch (num) {
    case 49:
        console.log('Error');
        break;
    case 100:
        console.log('Error');
        break;  
    case 54:
        console.log('Ok');
        break;
    default:
        console.log('не в этот раз');     
       break;
}