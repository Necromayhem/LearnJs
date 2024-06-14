"use strict"

let counter = 0;


let divElements = document.createElement("div");

let nameInp = document.createElement("input");
nameInp.placeholder = 'Введите имя';
nameInp.type = "text";

let yearInp = document.createElement("input");
yearInp.placeholder = 'Введите год рождения';
yearInp.type = "number";


// Кнопка
let addBtn = document.createElement("button");
addBtn.textContent = "Добавить пользователя";

// Список
let listUsers = document.createElement("ul");

function getAge(year) {
    return 2024 - year
}

function createNewUserItem(index, userName, userYear) {
    
    let item = document.createElement("li");
    item.textContent = `${index}) ${userName}, год рождения: ${userYear}, возраст: ${getAge(userYear)}`;

    return item;

}

addBtn.onclick = function() {
    counter++;
    let userName = nameInp.value
    let userYear = Number(yearInp.value)
 


    let newItem = createNewUserItem(counter, userName, userYear)
    nameInp.value = ""
    yearInp.value = ""


    listUsers.append(newItem)
}











divElements.append(nameInp, yearInp, addBtn); 
document.body.append(divElements, listUsers);