// Планирование: setTimeout и setInterval 

// const printHello = (text) => {
//     console.log(text);
// };

// let timerId = setTimeout(printHello, 2000, 'Наш текст')
// // функция, тайминг в мс, что передаём

// clearTimeout(timerId)




const printHello = (text) => {
    console.log(text);
};

let timerId = setInterval(printHello, 2000, 'Наш текст')
// функция, тайминг в мс, что передаём

clearTimeout(timerId)


const customSetInterval = (func, interval, ...params) =>{
    setTimeout(() =>{
        func(...params)
        customSetInterval(func, interval, ...params)
    }, interval)
}

customSetInterval(printHello, 1000, 'hello')







 















