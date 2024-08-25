// 1) Завершите решение так, чтобы оно разделило строку на пары из двух символов. Если строка содержит нечетное количество символов, то следует заменить отсутствующий второй символ последней пары подчеркиванием ('_').

// Примеры:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

// function solution(str){
//     let myString = str;
//     let newArray = [];
  
//     if (myString.length % 2 !== 0) {
//       myString += "_";
//     }
  
//     let mySplit = myString.split('');
  
//     for (let i = 0; i < mySplit.length; i += 2) {
//       newArray.push([mySplit[i], mySplit[i + 1]]);
//     }
  
//     return newArray;
    
    
// }

function solution(str){
    if (str.length === 0) {
      return [];
    }
    let pair = str.slice(0, 2);
    if (pair.length === 1) {
      pair += '_';
    }
    return [pair, ...solution(str.slice(2))];
  }


// console.log(solution("abcdefg"));


// 2) Вам необходимо разработать рекурсивную функцию с именем , replicate которая будет получать аргументы times и number.

// Функция должна возвращать массив, содержащий повторения аргумента number. Например, replicate(3, 5)должна возвращать [5,5,5]. Если timesаргумент отрицательный, возвращать пустой массив.

// Как бы заманчиво это ни казалось, не используйте циклы для решения этой проблемы.



function replicate(times, number) {
    if (times <= 0) {
     return [];
   }
   
   
   return [number, ...replicate(times - 1, number)];
 }



// console.log(replicate(3, 5));


// 3) Напишите функцию lenR, которая возвращает длину заданного списка. Попробуйте не жульничать и предоставить рекурсивное решение.

function lenR(x) {
    if(x.toString() === '') return 0
    // хотелось проверить на пустой массив не через .length, а иначе

    return 1 + lenR(x.slice(1))
  }

// console.log(lenR([1, 2, 3]));


// 4) Ваша задача — создать функцию, recurrence(base, formula, term)где base— базовый случай или первый член последовательности, formula— рекуррентная формула, заданная как функция/метод, а term— номер члена ряда, который должна вычислить ваша функция/метод. Например:

// recurrence(1, n => n + 3, 4) === 10
// recurrence(3, n => 2 * n, 5) === 48

function recurrence(base, formula, term) {
    
    if (term <= 1) {
        return base;
      }
      
      
      return recurrence(formula(base), formula, term - 1);
}

// console.log(recurrence(3, n => 2 * n, 5));
// console.log(recurrence(1, n => n + 3, 4));


// 5) Ниндзя часто должны подавать друг другу кодовые сигналы, часто используя естественные звуки в качестве прикрытия. Мы собираемся дать нашему ниндзя возможность стрекотать как сверчок, с количеством стрекотаний, кодирующих различные сообщения.

// Реализуйте «рекурсивную функцию», которая принимает один параметр (n) и выводит строку, т.е.

// chirp(4);
// //output would be chirp-chirp-chirp-chirp.
// javascript/coffescript: не используйте метод String .repeat(), напишите рекурсивную функцию, помните, что вы ниндзя!


function chirp(n) {
   
   if(n === 1) return 'chirp'
    
    return 'chirp-' + chirp(n - 1)
  }

// console.log(chirp(3)); // chirp-chirp-chirp


// 6) число Фибоначчи
// В математических терминах последовательность f(n)чисел Фибоначчи определяется рекуррентным соотношением

// f(n) = f(n-1) + f(n-2)

// с исходными значениями

// f(1) = 1 и f(2) = 1

// #Ваша задача

// Вам нужно создать функцию fibonacci, которая получает n и возвращает f(n). Вам нужно использовать рекурсию.


function fibonacci(n){
    if(n < 2) return n
    
    return fibonacci(n-1) + fibonacci(n-2)
}

console.log(fibonacci(10)); // 55











