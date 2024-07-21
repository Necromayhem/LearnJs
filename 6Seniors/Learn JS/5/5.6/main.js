'use strict'

// как перебрать массив? 
// for of или forEach

// let arr = [1, 2, 3]

// for (let value of arr){
//     console.log(value);
// }

// arr.forEach(item => {
//     console.log(item);
// })


// А если объект?





// function* strGenerator(){
//    yield 'H'
//    yield 'e'
//    yield 'l'
//    yield 'l'
//    yield 'o'
// }

// const str = strGenerator()





// function* numberGen(n = 10){
//     for (let i = 0; i < n; i++){
//         yield i
//     }
// }

// const num = numberGen(7)




// const iterator = {
//     [Symbol.iterator](n = 10){
//        let i = 0
//        return{
//         next(){
//          if(i < n){
//             return{value: ++i, done: false}
//          } 
//           return{value: undefined, done: true} 
//         }
//        }
//     }
// }


// function* iter(n = 10){
//    for(let i = 0; i < n; i++){
//     yield i
//    } 
// }



// for(let k of iter(6)){
//     console.log(k);
// }






let range = {
    from: 1,
    to: 5
  };


// 1. вызов for..of сначала вызывает эту функцию
range[Symbol.iterator] = function() {

    // ...она возвращает объект итератора:
    // 2. Далее, for..of работает только с этим итератором,
    // запрашивая у него новые значения
    return {
      current: this.from,
      last: this.to,
  
      // 3. next() вызывается на каждой итерации цикла for..of
      next() {
        // 4. он должен вернуть значение в виде объекта {done:.., value :...}
        if (this.current <= this.last) {
          return { done: false, value: this.current++ };
        } else {
          return { done: true };
        }
      }
    };
  };


for(let num of range){
    console.log(num);
}










