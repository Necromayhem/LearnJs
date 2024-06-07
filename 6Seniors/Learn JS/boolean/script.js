"use strict"


// let result = 12 > 6;
// if(result) {
//     console.log("Условие выполнено");
// }


// let userName = prompt("Введите имя студента", "");
// let userAge = Number(prompt("Введите возраст студента", ""));



// let userStudent = confirm("Является ли пользователь студентом?");


// if(userStudent === true) {
//     console.log(`${userName} - студент`);
// } else {
//     console.log(`${userName} - НЕ студент`);
// }





// Создать текстовое поле
function getInput(placeholder, type, className) {
    let input = document.createElement("input");
    input.placeholder = placeholder;
    input.type = type;
    input.classList.add(className);

    return input;
}

// Создать блок для текстовых полей
let box = document.createElement("div");
box.classList.add("box");

// Создать заголовок
let title = document.createElement("h1");
title.classList.add("title");
title.textContent = "Регистрация";


// Создать текстовые поля
let surnameInpWrap = document.createElement("div");
surnameInpWrap.classList.add("field-wrap");
let surnameInp = getInput("Фамилия", "text", "text-field");
let surnameErrorLabel = document.createElement("label");
surnameErrorLabel.textContent = "Ошибка";
surnameErrorLabel.classList.add("error");
surnameInpWrap.append(surnameInp,surnameErrorLabel)


let nameInp = getInput("Имя", "text", "text-field");
let ageInp = getInput("Возраст", "number", "text-field");
let emailInp = getInput("Почта", "email", "text-field");
let passwordInp = getInput("Пароль", "password", "text-field");


// Создание согласия с условием
let conditionLabel = document.createElement("label");
conditionLabel.classList.add("condition");  
let conditionInp = document.createElement("input");
conditionInp.type = 'checkbox';
let conditionSpan = document.createElement("span");
conditionSpan.textContent = 'Согласны с условием?';




// Создать кнопку
let regBtn = document.createElement('button');
regBtn.classList.add('btn');
regBtn.textContent = 'Зарегистрироваться';


regBtn.onclick = function() {
    // Получение значения

    let surnameValue = surnameInp.value;
    let nameValue = nameInp.value;
    let ageValue = Number(ageInp.value);
    let emailValue = emailInp.value;
    let passwordValue = passwordInp.value;
    let conditionValue = conditionInp.checked;


    // Проверка фамилии
    if(surnameValue === "") {
        alert("Введите фамилию!")
        return
    }

    if(surnameValue.length <= 1) {
        alert("Введите правильную фамилию!")
        return
    }

    // Проверка имени
    if(nameValue === "") {
        alert("Введите имя!")
        return
    }

    if(nameValue.length <= 1) {
        alert("Введите правильное имя!")
        return
    }
    // Проверка возраста
    if(ageValue === 0) {
        alert("Введите возраст!")
        return
    }

    if(ageValue < 14) {
        alert("Вы ещё слишком молоды!")
        return
    }
    // Проверка почты
    if(emailValue === "") {
        alert("Введите почту!")
        return
    }

    if(emailValue.length < 6) {
        alert("Введите правильную почту!")
        return
    }

   
    // Проверка пароля
    if(passwordValue === "") {
        alert("Введите пароль!")
        return
    }

    if(passwordValue.length < 6 || passwordValue.includes("_") === false) {
        alert("Небезопасный пароль!")
        return
    }


    if(conditionValue === false) {
        alert("Вы НЕ согласны с условиями!")
        return
    }


    
    alert(`${nameValue} ${surnameValue}, поздравляем с регистрацией!!!`);
}




conditionLabel.append(
    conditionInp, 
    conditionSpan,
)


box.append(
    title, 
    surnameInpWrap, 
    nameInp, 
    ageInp, 
    emailInp, 
    passwordInp,
    conditionLabel,
    regBtn,
);




document.body.append(box);






