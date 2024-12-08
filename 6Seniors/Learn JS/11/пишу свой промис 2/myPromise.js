// my Promise:

// объект. используется для отложенных и асинхронных вычислений.

function promise(){
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Промис выполнен')
    }, 2000)
})}

promise().then((message) => {
    console.log(message);
    return message + '!'
}).then(console.log)













































