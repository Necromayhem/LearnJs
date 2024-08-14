// Date

// 1) Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут. Временная зона – местная.

let date = new Date(2012, 1, 20, 3, 12);

console.log(date);

// 2) Напишите функцию getWeekDay(date), показывающую день недели в коротком формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».

// Например:
// let date = new Date(2012, 0, 3);  // 3 января 2012 года
// alert( getWeekDay(date) );        // нужно вывести "ВТ"


let date1 = new Date(2012, 0, 3); // 3 января 2012 года
let date2 = new Date(2024, 7, 14);

// через if else

function getWeekDay(date){
    let getDay = date.getDay();

    if(getDay == 0){
        return '«ВС»'
    } else if(getDay == 1){
        return '«ПН»'
    } else if(getDay == 2){
        return '«ВТ»'
    } else if(getDay == 3){
        return '«СР»'
    } else if(getDay == 4){
        return '«ЧТ»'
    } else if(getDay == 5){
        return '«ПТ»'
    } else if(getDay == 6){
        return '«СБ»'
    }
}

console.log(getWeekDay(date1)); // «ВТ»
console.log(getWeekDay(date2)); // «СР»

// через array

function getWeekDayArr(date){
    let days = ['ВС','ПН','ВТ','СР','ЧТ','ПТ','СБ',];

    return days[date2.getDay()]
}

console.log(getWeekDayArr(date2)); // СР




// 3) В Европейских странах неделя начинается с понедельника (день номер 1), затем идёт вторник (номер 2) и так до воскресенья (номер 7). Напишите функцию getLocalDay(date), которая возвращает «европейский» день недели для даты date.

let date3 = new Date(2012, 0, 3);  // 3 января 2012 года
// alert( getLocalDay(date) );       // вторник, нужно показать 2

function getLocalDay(date){
    let day = date.getDay();

    if (day == 0) { 
      day = 7;
    }
  
    return day;
}

console.log(getLocalDay(date3));



// 4) Создайте функцию getDateAgo(date, days), возвращающую число, которое было days дней назад от даты date.

// К примеру, если сегодня двадцатое число, то getDateAgo(new Date(), 1) вернёт девятнадцатое и getDateAgo(new Date(), 2) – восемнадцатое.
// Функция должна надёжно работать при значении days=365 и больших значениях:

let date4 = new Date(2015, 0, 2);

// alert( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
// alert( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
// alert( getDateAgo(date, 365) ); // 2, (2 Jan 2014)


function getDateAgo(date, days){
    let diff = date.getTime() - (days*24*3600*1000)
    return new Date(diff)
     
}

console.log(getDateAgo(date4, 2)); // Dec 31 2014
console.log(getDateAgo(date4, 365)); // Jan 02 2014



// 5) Напишите функцию getLastDayOfMonth(year, month), возвращающую последнее число месяца. Иногда это 30, 31 или даже февральские 28/29.
// Параметры:
// year – год из четырёх цифр, например, 2012.
// month – месяц от 0 до 11.
// К примеру, getLastDayOfMonth(2012, 1) = 29 (високосный год, февраль).

function getLastDayOfMonth(year, month){

    let date = new Date(year, month + 1, 0);
    return date.getDate()
}

console.log(getLastDayOfMonth(2024, 1));


// 6) Напишите функцию getSecondsToday(), возвращающую количество секунд с начала сегодняшнего дня.

// Например, если сейчас 10:00, и не было перехода на зимнее/летнее время, то:

// getSecondsToday() == 36000 // (3600 * 10)


function getSecondsToDay(){
    let now = new Date(2024, 8, 14, 10);
    let startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    let diffMilliseconds = now - startOfDay;
    let diffSeconds = Math.floor(diffMilliseconds / 1000)

    return diffSeconds
}

console.log(getSecondsToDay()); // 36000


// 7) Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до завтрашней даты.

// Например, если сейчас 23:00, то:

// getSecondsToTomorrow() == 3600


function getSecondsToTomorrow(){
    let now = new Date();

    let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);
    
    let diff = tomorrow - now
    return Math.round(diff / 1000);
}


console.log(getSecondsToTomorrow());



// 8) 




