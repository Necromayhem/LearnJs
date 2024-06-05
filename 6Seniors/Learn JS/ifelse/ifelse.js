"use strict"


// let age = Number(prompt("Введите возраст", ""));
// let height = Number(prompt("Введите рост", ""));
// document.write(`Возраст пользователя: ${age}<br>`);
// document.write(`Рост пользователя: ${height}<br>`);

// if (age === 18) {
//     document.write(`Пользователю 18 лет`)
// } else if (age > 18) {
//     document.write(`Пользователю больше 18 лет`)
// } else if (age < 18) {
//     document.write(`Пользователю нет 18 лет`)
// } else {
//     document.write(`Введите возраст`)
// }


// if (age >= 6) {
//     if( age <= 18) {
//         document.write(`Пользователь школьник`)
//     } else {
//         document.write(`Пользователь слишком большой`)
//     }
// } else {
//     document.write(`Пользователь слишком маленький`)
// }



// if (age >= 6 && age < 18) {
//     document.write(`Пользователь школьник`)
// } else {
//     document.write(`Пользователь не школьник`)
// }


// if (age >= 16 || height >= 180) {
//     document.write(`Пользователь может записаться`)
// } else {
//     document.write(`Пользователь должен подрасти`)
// }

//Получить возраст
function getAge(year) {
    let result = 2024 - year

    if ( result >= 18) {
        return `${result} (совершеннолетний)`
    }

    return result
}

//Создать список
function getStudentListUl() {
    let ul = document.createElement("ul") 
    return ul
}

//Создать элемент студента
function getStudentLi (index, name, year, height) {
    let li = document.createElement("li")
    let textSpan = document.createElement("span")


    textSpan.textContent = `${index}) ${name}, год рождения: ${year}, возраст: ${getAge(year)}, рост: ${height}`

    let removeBtn = document.createElement("button")
    removeBtn.textContent = "Удалить"


    let checkHeightBtn = document.createElement("button")
    checkHeightBtn.textContent = "Проверить"

    removeBtn.onclick = function() {
        li.remove()
    }

    checkHeightBtn.onclick = function() {
       if(year >= 2001 && height >= 175) {
        textSpan.classList.add("success")
        textSpan.textContent = `${textSpan.textContent} (отбор пройден)`
       }
    }

    

    li.append(textSpan, checkHeightBtn, removeBtn);
    


    return li
}

//Создать блок добавления
function getAddStudentBlock() {
    let counter = 0;

    let box = document.createElement("div")

    let nameInp = document.createElement("input")
    nameInp.placeholder = "Имя"
    nameInp.type = 'text'

    let yearInp = document.createElement("input")
    yearInp.placeholder = "Год рождения"
    yearInp.type = 'number'

    let heightInp = document.createElement("input")
    heightInp.placeholder = "Рост"
    heightInp.type = 'number'

    let addBtn = document.createElement("button")
    addBtn.textContent = "Добавить"

    addBtn.onclick = function() {
        counter++;
        let nameValue = nameInp.value
        let yearValue = Number(yearInp.value)
        let heightValue = Number(heightInp.value)

        let newStudent = getStudentLi(counter, nameValue, yearValue, heightValue);
        studentListUl.append(newStudent);

        nameInp.value = "";
        yearInp.value = "";
        heightInp.value = "";

    }
   

    box.append(nameInp, yearInp, heightInp, addBtn)

    return box
}

let AddStudentBlock = getAddStudentBlock();

let studentListUl = getStudentListUl();
console.log(studentListUl);








document.body.append(AddStudentBlock, studentListUl);
