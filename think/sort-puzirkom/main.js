// let arr = [5,6,3,5,2,1,3,4,5]

// // console.log(arr.sort());

// // function customSort(arr){
// //     let sortArr = [];

// //     for(let i = 0; i < arr.length; i++){
// //         if(arr[i] > arr[i + 1]){
// //             sortArr.push(arr[i])
// //         }
// //     }

// //     return sortArr
// // }

// // console.log(customSort(arr));

// let A = 5
// let B = 3

// console.log('ДО', A, B);

// if(A>B){
//     //меняем местами
//     let temp = A
//     A = B
//     B = temp
// }

// console.log('После', A, B);


// let arr = [3, 5, 1, 4, 2, 6, 7, 3,2 ,1 ,11, 23,6];

// let count = 0;

// for(j = 0; j < arr.length; j++){
//     for(i = 0; i < arr.length - 1; i++){
//         let A = arr[i]
//         let B = arr[i + 1]
//         // console.log(A, B);
//         if(A>B){
//         //меняем местами
//         let temp = A
//         A = B
//         B = temp
//     }
//         arr[i] = A
//         arr[i + 1] = B
    
//         count++
//     };
// }





// for(j = 0; j < arr.length; j++){
//     for(i = 0; i < arr.length - 1; i++){
//         if(arr[i] < arr[i + 1]){
//         //меняем местами
//         let temp = arr[i]
//         arr[i] = arr[i + 1]
//         arr[i + 1] = temp
//     }
     
//  }
// }

// console.log(arr);


// function sorting(arr){
//     for(j = 0; j < arr.length; j++){
//         for(i = 0; i < arr.length - 1; i++){
//             if(arr[i] > arr[i + 1]){
//             //меняем местами
//             let temp = arr[i]
//             arr[i] = arr[i + 1]
//             arr[i + 1] = temp
//         }
         
//      }
//     }

//     return arr
// }

// console.log(sorting(arr));
// console.log(arr);







let arr = [3, 2, 4, 6, 8, 0, 11, 15, 9, 8, 2 , 3];

function sorting(arr, func){
    let result = [...arr]

    for(j = 0; j < result.length; j++){
        for(i = 0; i < result.length - 1; i++){
            if(func(result[i], result[i + 1])){
                let boofer = result[i]
                result[i] = result[i + 1]
                result[i + 1] = boofer
            }
        }
    }
    
    return result
}

console.log(arr);
console.log(sorting(arr, function(a, b){
    return a < b
}));


