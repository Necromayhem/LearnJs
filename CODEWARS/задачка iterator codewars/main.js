// Создать счетчик, который каждый раз увеличивается на 1.

let counter = {
    [Symbol.iterator](){
      let cur = 0;
      return{
        next(){
          cur += 1;
          return{done: false, value: cur}
        }
      }
    }
  }

for (let n of counter) {
if (n > 100)
    break;
console.log(n);
}