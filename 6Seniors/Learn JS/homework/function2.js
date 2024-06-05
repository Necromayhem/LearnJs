"use strict"

let currentYear = 2024;
let index = 0;
let middleAge = 0;
let middleHeight = 0;

document.write("<h1>Список студентов</h1>")


// function printStudent() {
//     let studentName = "Вася";
//     let studentYear = 1998;
//     let age = currentYear - studentYear;
//     let height = 180;
//     let faculty = "Исторический";
//     index++;

//     document.write(`
//         <p>${index} <strong>Имя студента:</strong>${studentName}<strong>, 
//         Возраст:</strong>${age}<strong>, 
//         Рост:</strong>${height}<strong>, 
//         Факультет:</strong> ${faculty}
//         </p> 
//     `)
// };

// printStudent();




// function printStudent() {
//     let studentName = prompt("Имя студента", "");
//     let studentYear = prompt("Год рождения", "");
//     let age = currentYear - studentYear;
//     let height = Number(prompt("Рост", ""));
//     let faculty = prompt("Факультет", "");;
//     index++;

//     document.write(`
//         <p>${index} <strong>Имя студента:</strong>${studentName}<strong>, 
//         Возраст:</strong>${age}<strong>, 
//         Рост:</strong>${height}<strong>, 
//         Факультет:</strong> ${faculty}
//         </p> 
//     `)
// };

// printStudent();
// printStudent();
// printStudent();




function printStudent(studentName, studentYear, height, faculty) {
    
    let age = currentYear - studentYear;
    middleAge = middleAge + age;
    middleHeight = middleHeight + height;
    index++;

    document.write(`
        <p>${index} <strong>Имя студента:</strong>${studentName}<strong>, 
        Возраст:</strong>${age}<strong>, 
        Рост:</strong>${height}<strong>, 
        Факультет:</strong> ${faculty}
        </p> 
    `)
};



printStudent(prompt("Имя студента", ""), prompt("Год рождения", ""), Number(prompt("Рост", "")), prompt("Факультет", ""));
printStudent(prompt("Имя студента", ""), prompt("Год рождения", ""), Number(prompt("Рост", "")), prompt("Факультет", ""));
printStudent(prompt("Имя студента", ""), prompt("Год рождения", ""), Number(prompt("Рост", "")), prompt("Факультет", ""));

document.write("<hr>")
document.write(`<p>Средний возраст: <strong>${Math.floor(middleAge / index)}</strong></p>`);
document.write(`<p>Средний рост: <strong>${Math.floor(middleHeight / index)}</strong></p>`);

