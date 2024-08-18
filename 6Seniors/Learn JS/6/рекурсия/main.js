// Рекурсия и стек

// итеративный способ: цикл for

function pow1(x, n){
    let result = 1;

    // умножаем result на x n раз в цикле
    for(let i = 0; i < n; i++){
        result *= x;
    }
    return result;
}

// console.log(pow1(2,3)); // 8


// рекурсивный способ

function pow2(x, n){
    if(n == 1){
        return x
    } else{
        return x * pow2(x, n - 1); // умножаем x на результат выполнения вызова pow2 
    }
}

// console.log(pow2(2, 3));


let count = 0;

function recurse(){
    if(count === 5) return 'done';

    count++;
    return recurse(); // написать return
}

// console.log(recurse());
// console.log('count =', count);
// На уровне, где count становится равен 5, функция возвращает 'done', но это значение возвращается только в предыдущий уровень вызова функции, а не в самый наружный


// Math.pow(5, 3)
function pow(x, y){
    if(y === 0) return 1;

    return x * pow(x, y - 1)
}

result = pow(5, 3);
// console.log(result); // 125





sumOfDigits(100) // 3
sumOfDigits(1000) // 4

// Рекурсивные обходы

let company = { 
    sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600 }],
    development: {
      sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
      internals: [{name: 'Jack', salary: 1300}]
    }
  };

function sumSalaries(department) {
    if (Array.isArray(department)) { // 1. Проверяем, является ли аргумент массивом сотрудников
      return department.reduce((prev, current) => prev + current.salary, 0); // 2. Если это массив, суммируем их зарплаты
    } else { // 3. Если это не массив, предполагаем, что это объект с подразделениями
      let sum = 0; 
      for (let subdep of Object.values(department)) { // 4. Перебираем все подразделения объекта
        sum += sumSalaries(subdep); // 5. Рекурсивно вызываем sumSalaries для каждого подразделения
      }
      return sum; // 6. Возвращаем суммарную зарплату всех сотрудников во всех подразделениях
    }
  }

console.log(sumSalaries(company)); // 6700




// Связанный список

let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };

//   Альтернативный код для создания:

//   let list = { value: 1 };
//   list.next = { value: 2 };
//   list.next.next = { value: 3 };
//   list.next.next.next = { value: 4 };
//   list.next.next.next.next = null;


list = { value: "new item", next: list };
console.log(list);








