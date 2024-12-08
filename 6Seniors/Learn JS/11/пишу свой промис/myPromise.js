// my Promise:

const FULFILLED = 'fulfilled';
const PENDING = 'pending';
const REJECTED = 'rejected';

class MyPromise {
      constructor(executor){
        this.state = PENDING;
        this.result = undefined;
        this.onFulfilledFn = [];
        this.onRejectedFn = [];

       const resolve = (value) => {
            if(this.state === PENDING){
                this.state = FULFILLED;
                this.result = value;
                this.onFulfilledFn.forEach((fn) => fn(value));

            }
        }
    
       const reject = (error) => {
            if(this.state === PENDING){
                this.state = REJECTED;
                this.result = error;
                this.onRejectedFn.forEach((fn) => fn(error));
            }
        }

        try{
            executor(resolve, reject)
        } catch(error){
            reject(error)
        }
    }

    then = (onFulfilled, onRejected) => {
        if(this.state === PENDING){
            if(onFulfilled){
                this.onFulfilledFn.push(onFulfilled)
            }

            if(onRejected){
                this.onRejectedFn.push(onRejected)
            }
            
        }

        if(onFulfilled && this.state === FULFILLED){
            onFulfilled(this.result)
            return;
        }

        if(onRejected && this.state === REJECTED){
            onRejected(this.result)
            return;
        }
    }

}

// 1.+ Конструктор на вход которого переходит executor в свойствах которого две функции для успеха и ошибки, которые можно выполнить и изменить состояние

// const promise = new MyPromise((resolve, reject) => {
    
//     resolve('success')
// })

// console.log(promise);

// 2.+ Используется для отложенного кода
// const promise = new MyPromise((resolve, reject) => {
//     setTimeout(() => resolve('success'), 2000)
// })

// setTimeout(() => {
//     console.log(promise);
// }, 2000)


// 3.+ Resolve, reject можно вызвать только один раз
// const promise = new MyPromise((resolve, reject) => {
//     setTimeout(() => reject('error'), 1000);
//     setTimeout(() => resolve('success1'), 2000);
//     resolve('success2')
// })

// console.log(promise); // success2

// 4.+ Чтобы перехватить значение используется метод then 
// const promise = new MyPromise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('success')
//     }, 1000)
// }).then((value) => {
//     console.log(value);
// })

// 29:45



























































