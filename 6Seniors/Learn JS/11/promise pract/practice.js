// promise practice v1

// Задача 1: Простой промис

// Создайте функцию simplePromise, которая возвращает промис, который резолвится через 2 секунды со строкой "Промис выполнен!".

function simplePromise(){
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('Process...');
            resolve('Промис выполнен')
        }, 2000)
    })
}

// simplePromise().then((result) => {
//     console.log(result);
// })

// Задача 2: Промис с ошибкой

// Дополните предыдущую задачу так, чтобы промис отклонялся через 5 секунд с сообщением "Ошибка!" в случае, если условие не выполнено (например, если аргумент не равен true).

function conditionalPromise(condition){
   return new Promise((resolve, reject) => {
    if(condition === true){
        setTimeout(() => {
           resolve('Ошибки нет')
        }, 2000)
    } else if(condition === false){
        setTimeout(() => {
            reject('Ошибка!')
        }, 5000)
    }
   })
}

// conditionalPromise(true).then(result => {
//     console.log(result);
// }).catch(err => {
//     console.error(err);
// })

// conditionalPromise(false).then(result => {
//     console.log(result);
// }).catch(err => {
//     console.error(err);
// })


// Задача 3: Промис с таймером

// Создайте функцию delay которая принимает время в миллисекундах и возвращает промис, который резолвится через указанное время. Используйте этот промис для создания задержки в 3 секунды перед выводом сообщения "Готово!".

function delay(ms){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, ms)
    })
}

// delay(3000).then(() => console.log("Готово!"))



// Задача 4: Цепочка промисов

// Создайте цепочку промисов, в которой первый промис будет резолвиться через 1 секунду, второй — через 2 секунды, а третий — через 3 секунды. Каждый промис должен возвращать сообщение о завершении.

function firstPromise(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("first Promise")
        }, 1000)
    })
}

function secondPromise(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("second Promise")
        }, 2000)
    })
}

function thirdPromise(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("third Promise")
        }, 3000)
    })
}

// firstPromise()
// .then(result => {
//     console.log(result);
//     return secondPromise();
// })
// .then(result => {
//     console.log(result);
//     return thirdPromise();
// })
// .then(result => {
//     console.log(result);
// })



// Задача 5: Промисы и массив

// Создайте функцию fetchData которая принимает массив URL и возвращает массив с данными (например, промисы, которые возвращают данные из API). Используйте Promise.all для обработки массива промисов.

let urls = ["https://jsonplaceholder.typicode.com/posts/1", "https://jsonplaceholder.typicode.com/posts/2"]

function fetchData(url){
    return fetch(url)
    .then(response => response.json())
}

let promises = urls.map(url => fetchData(url));
Promise.all(promises)

// Promise.all(promises)
// .then((responses) => {
//     responses.forEach(resp => {
//         console.log(resp["id"])
//         console.log(resp["title"])
//     })
// })



// Задача 6: Промисы и обработка ошибок

// Дополните предыдущую задачу обработкой ошибок. Если хотя бы один из запросов не проходит, промис должен быть отклонен с ошибкой.

// javascript

//  Копировать код
// function fetchDataWithErrorHandling(urls) {
//     // Ваш код здесь
// }

// // Пример использования
// fetchDataWithErrorHandling(["https://jsonplaceholder.typicode.com/posts/1", "invalid-url"])
//     .then(results => console.log(results))
//     .catch(error => console.error(error)); // Вывод ошибки
// Задача 7: Использование async/await

// Попробуйте переписать последнюю задачу с использованием async/await. Создайте асинхронную функцию, которая использует await для получения данных.

// javascript

//  Копировать код
// async function fetchDataAsync(urls) {
//     // Ваш код здесь
// }

// // Пример использования
// fetchDataAsync(["https://jsonplaceholder.typicode.com/posts/1", "https://jsonplaceholder.typicode.com/posts/2"])
//     .then(results => console.log(results))
//     .catch(error => console.error(error));
// Задача 8: Задержка между вызовами

// Создайте функцию delayedFetch которая будет принимать массив URL и задержку. Каждый запрос должен выполняться с заданной задержкой.

// javascript

//  Копировать код
// function delayedFetch(urls, delayTime) {
//     // Ваш код здесь
// }

// // Пример использования
// delayedFetch(["https://jsonplaceholder.typicode.com/posts/1", "https://jsonplaceholder.typicode.com/posts/2"], 2000)
//     .then(results => console.log(results))
//     .catch(error => console.error(error));
// Задача 9: Объединение результатов

// Создайте функцию mergeData которая объединяет результаты двух массивов данных (например, результаты двух запросов) и возвращает один массив.

// javascript

//  Копировать код
// function mergeData(data1, data2) {
//     // Ваш код здесь
// }

// // Пример использования
// const data1 = [1, 2, 3];
// const data2 = [4, 5, 6];
// const mergedData = mergeData(data1, data2);
// console.log(mergedData); // [1, 2, 3, 4, 5, 6]
// Задача 10: Создание вашего промиса

// Реализуйте свой собственный промис (простую версию), который способен резолвиться или отклоняться в зависимости от заданного условия.

// javascript

//  Копировать код
// class MyPromise {
//     constructor(executor) {
//         // Ваш код здесь
//     }

//     then(onFulfilled, onRejected) {
//         // Ваш код здесь
//     }

//     catch(onRejected) {
//         // Ваш код здесь
//     }
// }

// // Пример использования
// const myPromise = new MyPromise((resolve, reject) => {
//     // Ваш код здесь
// });
// myPromise
//     .then(result => console.log(result))
//     .catch(error => console.error(error));
















