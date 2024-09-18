// Learn JS

// Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.

// Сделайте два варианта решения.

// Используя setInterval.
// Используя рекурсивный setTimeout.

function printNumbers1(from, to){
    let current = from;

    let timerId = setInterval(function(){
        console.log(current);
        if( current == to){
            clearInterval(timerId)
        }
        current++;
    }, 1000)
}

// printNumbers1(3, 10)

function printNumbers2(from, to){
    let current = from;

    setTimeout(function go(){
        console.log(current);
        if(current < to){
            setTimeout(go, 1000)
        }
        current++
    }, 1000)
}

// printNumbers2(4, 9)


// Chad AI

// Вывод сообщения через 3 секунды Напишите функцию, которая использует setTimeout, чтобы вывести сообщение "Привет, мир!" через 3 секунды.

function showMessage(){
    console.log('Привет, мир!');
}

// setTimeout(showMessage, 3000);

// ======================================================================

// Повторяющийся вывод даты и времени Напишите функцию, которая использует setInterval, чтобы каждую секунду выводить текущую дату и время в формате "HH:MM:SS".

function showDate(){
    console.log(new Date().toLocaleTimeString());
}

// setInterval(showDate, 1000)

// ======================================================================

// Счётчик с задержкой Создайте счётчик, который выводит числа от 1 до 10 с интервалом в 1 секунду между каждым числом.

// let count = 1;

// let showCount = setInterval(function(){
//     console.log(count);
//     count++;

//     if(count > 10){
//         clearInterval(showCount)
//         console.log('Всё');
//     }
// }, 1000)

// Через setTimeout рекурсивно

function showCount(){
    let count = 1

    setTimeout(function counter(){
        console.log(count);

        if(count < 10){
            setTimeout(counter, 1000)
        }
        count++
    }, 1000)
}

// showCount()

// ======================================================================

// Обратный отсчёт Создайте функцию, которая принимает число N и выводит обратный отсчёт от N до 0 с интервалом в 1 секунду.

function showCountDown(n){
    let current = n;

    if(current === 0 || current < 0){
        return console.log("Введите корректное число");
    }

    setTimeout(function counter(){
        console.log(current);

        if(current > 0){
            setTimeout(counter, 1000)
        }
        current--
    }, 1000)
}

// showCountDown(13);
























