// promise practice

// 1) Создание промиса

// Напишите функцию createPromise, которая возвращает промис, разрешающийся через 2 секунды с сообщением "Промис выполнен".

// Обработка успешного результата

// Используйте созданный в предыдущем пункте промис и обработайте его результат с помощью .then, выводя сообщение в консоль.

function createPromise(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Промис выполнен")
        }, 2000)
    })
}

// createPromise().then((message) => {
//     console.log(message);
// })

// 2) Создание промиса с ошибкой

// Напишите функцию createErrorPromise, которая возвращает промис, который отклоняется через 1 секунду с сообщением "Произошла ошибка".

// Обработка ошибки

// Используйте промис из предыдущего пункта и обработайте ошибку с помощью .catch, выводя сообщение в консоль.

function createErrorPromise(){
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject("Произошла ошибка")
        }, 1000)
    })
}

// createErrorPromise()
//     .catch((err) => {
//         console.log(err);
//     })


// 3) Цепочка промисов

// Напишите промис fetchData, который симулирует получение данных с сервера (параметризированный объект). Он должен разрешаться через 1 секунду с массивом данных (например, [1, 2, 3]). Создайте цепочку вызовов, за которой будет следовать логическое значение (параметр) для второго промиса (например, умножающего каждый элемент массива на 2) и возвращающего новый массив.

function fetchData(){
    return new Promise((resolve) => {
        setTimeout(() => {
            // fetch(); - имитация запроса
            const data = [1, 2, 3];
            resolve(data);
        }, 1000)
    })
}

function multiplyData(data){
    return new Promise((resolve) => {
        setTimeout(() => {
            const newData = data.map((elem) => elem * 2 )
            resolve(newData)
        }, 1000)
    })
}

// fetchData()
//     .then((data) => {
//         console.log("Получен массив:", data);
//         return multiplyData(data);
//     })
//     .then((result) => {
//         console.log("Результат умножения:", result);
//     })


// 4) Промисы and delay

// Создайте функцию delay, которая принимает число (количество миллисекунд) и возвращает промис, который разрешается после истечения указанного времени. Используйте его для последовательного ожидания (2 секунды, затем 1 секунда, затем 3 секунды).

function delay(ms){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`промис выполнен через ${ms/1000} секунд`)
        }, ms)
    })
}

// delay(2000)
//     .then((message) => {
//         console.log("Первый", message);
//         return delay(1000)
//     })
//     .then((message) => {
//         console.log("Второй", message);
//         return delay(3000)
//     })
//     .then((message) => {
//         console.log("Третий", message);
//     })


// 5) Обработка нескольких промисов с Promise.all

// Создайте три промиса, каждый из которых разрешается через разное количество времени (например, 1, 2 и 3 секунды). Используйте Promise.all для обработки всех промисов и вывода результата в консоль, когда все они будут выполнены.

function foo(sec){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`промис выполнился через ${sec} секунд`)
        }, sec*1000)
    })
}

// Promise.all([foo(1), foo(2), foo(3)])
//                 .then((message) =>{
//                     console.log(message);
//                 })



















