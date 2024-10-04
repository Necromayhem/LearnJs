// call/apply

// контекст = область видимости + переменная this(ссылка на объект, который вызывает код в данный момент)

// // сделаем worker.slow кеширующим
// let worker = {
//     someMethod() {
//       return 1;
//     },
  
//     slow(x) {
//       // здесь может быть страшно тяжёлая задача для процессора
//       alert("Called with " + x);
//       return x * this.someMethod(); // (*)
//     }
//   };
  
//   // тот же код, что и выше
//   function cachingDecorator(func) {
//     let cache = new Map();
//     return function(x) {
//       if (cache.has(x)) {
//         return cache.get(x);
//       }
//       let result = func.call(this, x); // (**)
//       cache.set(x, result);
//       return result;
//     };
//   }
  
//   alert( worker.slow(1) ); // оригинальный метод работает
  
//   worker.slow = cachingDecorator(worker.slow); // теперь сделаем его кеширующим
  
//   alert( worker.slow(2) );



let worker = {
    slow(min, max){
        console.log(`Called with ${min},${max}`);
        return min + max; // здесь может быть тяжёлая задача
    }
};

function cachingDecorator(func, hash){
    let cache = new Map();
    return function(){
        let key = hash(arguments);
        if(cache.has(key)){
            return cache.get(key)
        }

        let result = func.call(this, ...arguments)

        cache.set(key, result);
        return result;
    };
}

function hash(args){
    return ([].join.call(arguments));
}

// будет кешировать вызовы с одинаковыми аргументами
worker.slow = cachingDecorator(worker.slow, hash);
console.log(worker.slow(3, 5));
console.log("Again " + worker.slow(3, 5));









