// 1)  Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут. Временная зона – местная.

let d = new Date('2012-02-20 03:12')
// console.log(d);

// 2) Напишите функцию getWeekDay(date), показывающую день недели в коротком формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».

// Например:
// let date = new Date(2012, 0, 3);  // 3 января 2012 года
// alert( getWeekDay(date) );        // нужно вывести "ВТ"

function getWeekDay(date){
    let days = ['ВС','ПН','ВТ','СР','ЧТ','ПТ','СБ'];
    
    return days[date.getDay()];
}

// let date = new Date(2012, 0, 3);
// console.log(getWeekDay(date)); // ВТ

// 3) В Европейских странах неделя начинается с понедельника (день номер 1), затем идёт вторник (номер 2) и так до воскресенья (номер 7). Напишите функцию getLocalDay(date), которая возвращает «европейский» день недели для даты date.
// let date = new Date(2012, 0, 3);  // 3 января 2012 года
// alert( getLocalDay(date) );       // вторник, нужно показать 2

function getLocalDay(date){
    let day = date.getDay();

  if (day == 0) { // день недели 0 (воскресенье) в европейской нумерации будет 7
    day = 7;
  }

  return day;

}

// let date = new Date(2012, 0, 3);

// console.log(getLocalDay(date));



// 4) Создайте функцию getDateAgo(date, days), возвращающую число, которое было days дней назад от даты date.
// К примеру, если сегодня двадцатое число, то getDateAgo(new Date(), 1) вернёт девятнадцатое и getDateAgo(new Date(), 2) – восемнадцатое.
// Функция должна надёжно работать при значении days=365 и больших значениях:

// let date = new Date(2015, 0, 2);

function getDateAgo(date, days){
  let day = days * 24 * 3600 * 1000 // кол-во дней в миллисекундах
  currenDate = date.getTime() // кол-во миллисекунд в date
  return new Date(date - day)
  
}

// console.log( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
// console.log( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
// console.log( getDateAgo(date, 365) ); // 2, (2 Jan 2014)


// 5) Напишите функцию getLastDayOfMonth(year, month), возвращающую последнее число месяца. Иногда это 30, 31 или даже февральские 28/29.
// Параметры:
// year – год из четырёх цифр, например, 2012.
// month – месяц от 0 до 11.

function getLastDayOfMonth(year, month){
  let date = new Date(year, month + 1, 0)
  return date.getDate()
}

// console.log(getLastDayOfMonth(2012, 1)); // 29


// 6) Напишите функцию getSecondsToday(), возвращающую количество секунд с начала сегодняшнего дня.
// Например, если сейчас 10:00, и не было перехода на зимнее/летнее время, то:
// getSecondsToday() == 36000 // (3600 * 10)

function getSecondsToday(){
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  return (now - today) / 1000;
  
}


// console.log(getSecondsToday());


// 7) Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до завтрашней даты.
// Например, если сейчас 23:00, то:
// getSecondsToTomorrow() == 3600

function getSecondsToTomorrow(){
  const now = new Date();
  const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
  return (tomorrow - now) / 1000;
}

// console.log(getSecondsToTomorrow());

// 8) Напишите простую функцию, которая принимает в качестве параметра объект даты и возвращает логическое значение, указывающее, является ли дата сегодняшней или нет.
// Убедитесь, что ваша функция не возвращает ложное срабатывание, проверяя только день.

function isToday(date) {
  let now = new Date()

  if(date.getFullYear() == now.getFullYear() && date.getMonth() == now.getMonth() && date.getDate() == now.getDate()){
    return true;
  } 

  return false;
}

let date = new Date(2024, 7, 25);
// console.log(isToday(date));


























