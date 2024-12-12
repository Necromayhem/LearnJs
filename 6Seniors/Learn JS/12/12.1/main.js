// Генераторы

// function* generateSequence(){
//     yield 1;
//     yield 2;
//     return 3;
// }

// let generator = generateSequence();

// let one = generator.next();
// console.log(JSON.stringify(one)); // {"value":1,"done":false}

// let two = generator.next()
// console.log(JSON.stringify(two)); // {"value":2,"done":false}

// let three = generator.next();
// console.log(JSON.stringify(three)); // {"value":3,"done":true}

// let four = generator.next();
// console.log(JSON.stringify(four)); // {"done":true}


// {
//     function* generateSequence() {
//         yield 1;
//         yield 2;
//         yield 3;
//       }
      
//       let generator = generateSequence();
      
//       for(let value of generator) {
//         console.log(value); // 1, 2, 3
//       }
// }


// // Генератор - перебираемый объект

// {
//     function* generateSequence(){
//         yield 1;
//         yield 2;
//         yield 3;
//     }

//     let sequence = [0, ...generateSequence()];
//     console.log(sequence); // [0, 1, 2, 3]
// }



// function* strGenerator(){
//     yield 'H';
//     yield 'e';
//     yield 'l';
//     yield 'l';
//     yield 'o';
// };

// const str = strGenerator();

// console.log(str.next().value);
// console.log(str.next().value);
// console.log(str.next().value);
// console.log(str.next().value);
// console.log(str.next().value);


// function* numberGen(n = 10){
//     for(let i = 0; i < n; ){
//         yield console.log(i);
//         ++i;
//     }
// }

// const num = numberGen(7)
// num.next()
// num.next()
// num.next()
// num.next()
// num.next()


// const iterator = {
//     [Symbol.iterator](n = 10){
//         let i = 0

//         return {
//             next(){
//                 if(i < n){
//                     return{
//                         value: ++i,
//                         done: false
//                     }
//                 } return {
//                     value: undefined,
//                     done: true
//                 }
//             }
//         }
//     }
// }



// for(let k of iterator){
//     console.log(k);
// }



function* iter(n = 10){
    for(let i = 0; i <= n; i++){
        yield i;
    }
}

for(let k of iter(6)){
    console.log(k);
}

























