// 1) Есть объект salaries с произвольным количеством свойств, содержащих заработные платы.
// Напишите функцию sumSalaries(salaries), которая возвращает сумму всех зарплат с помощью метода Object.values и цикла for..of.
// Если объект salaries пуст, то результат должен быть 0.

//Например:
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };
  
//   alert( sumSalaries(salaries) ); // 650

function sumSalaries(salaries){
    return Object.entries(salaries).reduce((acc, [_, value]) => acc + value, 0)
}// объект в массив и метод reduce

console.log(sumSalaries(salaries)); // 650

let sum = 0

function sumSalaries2(){
for(let value of Object.values(salaries)){
    sum += value
}
    return sum
}

console.log(sumSalaries2(salaries)); // 650

//=======================================================================


// 2) 