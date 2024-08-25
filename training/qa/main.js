// Деструктурирующее присваивание

let arr = ['alex', 'ivanov']

let [firstName, surName] = arr;

// console.log(firstName); // alex
// console.log(surName); // ivanov

let user = {
    name: "John",
    years: 30
  };

// let {name,years: age, isAdmin = false} = user

// console.log(name); // John
// console.log(age); // 30
// console.log(isAdmin); // false



let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

function topSalary(salaries){
    let topSalaries = 0;
    let topName =  null;

    for(let [name, salary] of Object.entries(salaries)){
        if(salary > topSalaries){
            topSalaries =  salary;
            topName = name;
        }
    }
    return topName
}

// console.log(topSalary(salaries));


function calcValues(a, b){
    return [
        a + b,
        undefined,
        a * b,
        a / b
    ]
}

const [sum,sub="вычитания нет",mult, ...other]= calcValues(42, 10);
// const sum = result[0]
// const sub = result[1]
// const [sum, sub]= result

// console.log(sum, mult, other, sub);


const person = {
    name: 'Max',
    age: 20,
    address: {
        country: 'Russia',
        city: 'Moscow'
    }
}

// const {name: n, age, car = 'bmw', address:{city: home, country}} = person
// console.log(n, age, car, home, country);

// const {name, ...info} = person
// console.log(name, info);

function logPerson({name, age}){
    console.log(name + ' ' + age);
}

// logPerson(person)



