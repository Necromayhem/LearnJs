// 1) У нас есть объект:

// let user = {
//     name: "John",
//     years: 30
//   };


// Напишите деструктурирующее присваивание, которое:

// свойство name присвоит в переменную name.
// свойство years присвоит в переменную age.
// свойство isAdmin присвоит в переменную isAdmin (false, если нет такого свойства)
// Пример переменных после вашего присваивания:


let user = {
    name: "John",
    years: 30 
    };

let {name, years: age, isAdmin = false} = user

// alert( name ); // John
// alert( age ); // 30
// alert( isAdmin ); // false

// 2) У нас есть объект salaries с зарплатами:

// Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.

// Если объект salaries пустой, то нужно вернуть null.
// Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
// P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение.
  
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };  

function topSalary(obj){
    let maxSalary = 0;
    let topWorkerName = null;

    for(let [name, money] of Object.entries(obj)){
        if(money > maxSalary){
            maxSalary = money;
            topWorkerName = name;
        }
    }
    return topWorkerName;
}

console.log(topSalary(salaries)); // Pete 


