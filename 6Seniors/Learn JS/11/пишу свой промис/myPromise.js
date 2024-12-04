// my Promise:

const FULFILLED = 'fulfilled';
const PENDING = 'pending';
const REJECTED = 'rejected';

class myPromise {
    constructor(executor){
         this.state = PENDING;
         this.result = undefined;
         this.onFulfiledFn = [];
         this.onRejectedFn = [];
        
        const resolve = (value) =>{
            if(this.state === PENDING){
                this.state = FULFILLED;
                this.result = value;
                this.onFulfiledFn.forEach((fn) =>
                    fn(value));
            }
        };

        const reject = (error) => {
            if(this.state === PENDING){
                this.state = REJECTED;
                this.result = error; 
                this.onRejectedFn.forEach((fn) =>
                    fn(error));
            }
        };

        try {
            executor(resolve, reject)
        } catch(error){
            reject(error); 
        }
        
    }

    then = (onFulfiled, onRejected) => {
        if(this.state === PENDING){
            if(onFulfiled){
                this.onFulfiledFn.push(onFulfiled)
            }
            if(onRejected){
                this.onRejectedFn.push(onRejected)
            }
        }

        if(onFulfiled && this.state === FULFILLED){
            onFulfiled(this.result)
            return;
        }

        if(onRejected && this.state === REJECTED){
            onRejected(this.error)
            return;
        }
    }

    catch = (onRejected) => {
        this.then(null, onRejected)
    }
}

// const promise = new myPromise((resolve, reject) => {
//     reject('error')
// })

// console.log(promise);




























































