// my Promise:

// объект. используется для отложенных и асинхронных вычислений.

// обыйчный класс. В конструктор идёт идёт коллбэк - т.е. функция, которую мы вызываем.
// У промиса свои собственный свойства - это this.state, который сначала 'pending', когда мы только объявили промис. Потом при успешном вызове(resolve) становится 'fulfilled' , либо при ошибке(reject) - 'rejected'.
// промис можно только один раз либо зарезолвить, либо зареджектить.
// Также у промиса есть изначальное состояние result = undefined и оно меняется на value(resolve), либо error(reject).
// потом нужно объявить две функции resolve() и reject()(которые передаются в executor)
// когда мы вызывем resolve или reject, то это будет происходить уже в самих функциях, потому что это коллбэки, которые передаются, то будем получать value и error.
// промис меняет состояние только один раз!!!
// когда мы вызвали метод resolve(), если состояние равно PENDING, то состояние меняется на FULFILLED и this.result становится value.
// когда мы вызвали метод reject(), если состояние равно PENDING, то состояние меняется на REJECTED и this.result становится error.
// т.е. если в нашем текущем промисе снова вызовем resolve или reject, то состояния не изменятся, т.к. они меняются только при PENDING.
// далее нужно вызвать executor с двумя колбэками resolve() и reject(), то есть их туда передать
// а эти колбэки уже вызовутся в реальном экземпляре нашаего класса
// важно не забыть, что если в executor случится какая-то ошибка, то мы должны перехватить её через try...catch, например
// Т.к. promise является конструктором, то коллбэк executor выполняется сразу, т.е. в данном случае мы запускаем конструктор и он выполняется синхронно сразу. Но когда вызываются resolve, reject, то они вызываются асинхронно в setTimeoute или когда данные загрузятся. 
// Метод then. Когда промис зарезолвиться надо перехватить значение. В then передаётся два коллбэка onFulfilled, onRejected. Первая отвечает за успех, вторая за ошибку. При вызове then надо проверить, что у нас есть onFulfilled и состояние this.state === FULFILLED, то мы её вызываем от this.result. Аналогично с onRejected - REJECTED и this.error
// когда промис отклоняется, он должен вызывать второй обработчик в then.
// добавление массива, где будут храниться очередь из вызовов
// Если состояние PENDING, то накапливаем функции
// После того, как промис зарезолвился, нужно пробежаться по этим функциям через forEach и вызвать их
// catch тоже самое, что и then, только у него на вход идёт одна функция onRejected. Можно сказать, что он возвращает then со вторым аргументом, то есть на первый коллбэк идёт null
// чтобы реализовать цепочку промисов, нужно в следующий промис возвращать new MyPromise, потому что у промиса, который мы вызвали, состояние меняется один раз, соотвественно нужно вызвать новый промис и тем самым вновь его разрезолвить. Для этого в новом промисе прописываем колбэки
// 40 минута


const FULFILLED = 'fulfilled';
const PENDING = 'pending';
const REJECTED = 'rejected';

class MyPromise{
    constructor(executor){
        this.state = PENDING;
        this.result = undefined;
        this.onFulfilledFn = [];
        this.onRejectedFn = [];

        const resolve = (value) => {
            if(this.state === PENDING){
                this.state = FULFILLED;
                this.result = value;
                this.onFulfilledFn.forEach(fn => fn(value));
            }
        };

        const reject = (error) => {
            if(this.state === PENDING){
                this.state = REJECTED;
                this.result = error;
                this.onRejectedFn.forEach(fn => fn(error));
            }
        };

        try{
            executor(resolve, reject)
        } catch(error){
            reject(error)
        }

    }

    then(onFulfilled, onRejected){
        return new MyPromise((resolve, reject) => {
            if(this.state === PENDING){
                if(onFulfilled){
                    this.onFulfilledFn.push(() => {
                        onFulfilled})
                }
    
                if(onRejected){
                    this.onRejectedFn.push(() => {
                        onRejected})
                }
                
            }
    
            if(onFulfilled && this.state === FULFILLED){
                onFulfilled(() => {
                    this.result});
                return;
            }
    
            if(onRejected && this.state === REJECTED){
                onRejected(() => {
                    this.error});
                return;
            }
        })
    }
        

    catch(onRejected){
        return this.then(null, onRejected)
    }


}

// 1. конструктор, на вход которого переходит executor, в свойствах которого две функции для успеха и ошибки, которые можно выполнить и изменить состояние.

// const promise = new MyPromise((resolve, reject) => {
//     resolve('success')
// });

// console.log(promise);

// 2.+ Используются для отложенного кода
// const promise = new MyPromise((resolve, reject) => {
//     setTimeout(() => resolve('success'), 2000)
// })


// console.log(promise); // {state: 'pending', result: undefined}
// setTimeout(() => {
//     console.log(promise)
// }, 2000) // {state: 'fulfilled', result: 'success'}


// 3.+ Resolve, reject можно вызвать только один раз
// const promise = new MyPromise((resolve, reject) => {
//     setTimeout(() => reject('error'), 1000)
//     setTimeout(() => resolve('success1'), 2000)
//     resolve('success2')
// })

// console.log(promise);


// 4.+ Чтобы перехватить значение используется метод then
// const promise = new MyPromise((resolve, reject) => {
//     setTimeout(() => resolve('success'), 2000)
// }).then(console.log)

// 5.+ Чтобы перехватить ошибку, также можно использовать метод then
// const promise = new MyPromise((resolve, reject) => {
//     setTimeout(() => reject(('Error 404')), 2000)
// }).then((value) => {console.log(value)}, (err) => {console.error(err)})

// 6.+ Чтобы перехватить ошибку, можно использовать метод catch
// const promise = new MyPromise((resolve, reject) => {
//     setTimeout(() => reject(new Error('Error 404')), 2000)
// }).catch((error) => {
//     console.log(error)
// })

// 7.+ Можно вызывать then сколько угодно раз на одном промисе и получить один и тот же рузультат
// const promise = new MyPromise((resolve, reject) => {
//     setTimeout(() => resolve('success'), 1000)
// })
// promise.then((value) => console.log(value));
// promise.then((value) => console.log(value));
// promise.then((value) => console.log(value));
// promise.then((value) => console.log(value));

// 8.+ Если вызывать then, когда состояние уже было установлено, всё равно получим значение.

// const promise = new MyPromise((resolve, reject) => {
//     setTimeout(() => resolve('success'), 1000)
// })

// setTimeout(() => {
//     promise.then((value) => console.log(value));
//     promise.then((value) => console.log(value));
//     promise.then((value) => console.log(value));
// }, 2000)

// 9. Можно использовать цепочки промисов
const promise = new MyPromise((resolve, reject) => {
    setTimeout(() => resolve('success'), 1000)
}).then((value) => {
    console.log(value + ' first then');
    return value 
}).then((value) => {
    console.log(value + ' second then');
    return value
}).then((value) => {
    console.log(value + ' third then');
    return value
})









































