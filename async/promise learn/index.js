// === Основы промисов ===
// 1. Создание промиса
// Напишите функцию createPromise, которая возвращает промис, резолвящийся через 2 секунды со строкой "Успешно!".

const createPromise = () => {
    return new Promise((resolve) => {
        resolve('промис выполнен мгновенно')
    })
};

createPromise()
    .then(message => {
        console.log(message)
        return message;
    })
    .then(() => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve()
                console.log('промис выполнен через 2 сек после предыдущего');
            }, 2e3)
        })
    })
    .then(() => {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log('промис выполнен через 2 сек после предыдущего');
            }, 2e3)
        })
    })
    




// 2. Обработка успеха и ошибки
// Напишите функцию loadData, которая возвращает промис, реджектящийся с ошибкой "Ошибка загрузки" через 1 секунду. Добавьте обработчики .then и .catch.

const loadData = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            rej()
        }, 1e3)
    })
}

loadData()
    .then(() => console.log('промис успешен'))
    .catch(() => console.log("Ошибка загрузки"))

// 3. Цепочка промисов
// Создайте цепочку из трех промисов, где каждый последующий зависит от результата предыдущего:

// Первый промис возвращает число 5.

// Второй умножает его на 2.

// Третий вычитает 3 и выводит результат.

const promise = () => {
    return new Promise((resolve) => {
        resolve(5)
    })
}

promise()
    .then(result => {
        return result * 2
    })
    .then(result => console.log(`${result - 3}`))


// === Методы промисов ===

// 4. Promise.all
// Даны три промиса:

const p1 = Promise.resolve(3);
const p2 = 42;
const p3 = new Promise((resolve) => setTimeout(resolve, 100, "foo"));
// // Используйте Promise.all, чтобы получить их результаты в массиве.

Promise.all([p1, p2, p3])
    .then(result => console.log(result));


// 5. Promise.race
// Создайте два промиса:

// Первый резолвится через 500 мс со значением "Быстрый".

// Второй резолвится через 1000 мс со значением "Медленный".
// Используйте Promise.race и выведите результат.

const p1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve('быстрый')
    }, 500)
})

const p2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve('медленный')
    }, 1000)
})

Promise.race([p1, p2])
    .then(result => console.log(result));



