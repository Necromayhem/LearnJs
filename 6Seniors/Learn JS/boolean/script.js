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
// Создать блок фамилии
let surnameInpWrap = document.createElement("div");
surnameInpWrap.classList.add("field-wrap");
let surnameInp = getInput("Фамилия", "text", "text-field");
let surnameErrorLabel = document.createElement("label");
surnameErrorLabel.classList.add("error");
surnameInpWrap.append(surnameInp,surnameErrorLabel)


//Создать блок имени
let nameInp = getInput("Имя", "text", "text-field");
let nameInpWrap = document.createElement("div");
nameInpWrap.classList.add("field-wrap");
let nameErrorLabel = document.createElement("label");
nameErrorLabel.classList.add("error");
nameInpWrap.append(nameInp,nameErrorLabel)

// Создать блок возраста
let ageInp = getInput("Возраст", "number", "text-field");
let ageInpWrap = document.createElement("div");
ageInpWrap.classList.add("field-wrap");
let ageErrorLabel = document.createElement("label");
ageErrorLabel.classList.add("error");
ageInpWrap.append(ageInp,ageErrorLabel)




// Создать блок почты
let emailInp = getInput("Почта", "email", "text-field");
let emailInpWrap = document.createElement("div");
emailInpWrap.classList.add("field-wrap");
let emailErrorLabel = document.createElement("label");
emailErrorLabel.classList.add("error");
emailInpWrap.append(emailInp,emailErrorLabel)


// Создать блок пароля
let passwordInp = getInput("Пароль", "password", "text-field");
let passwordInpWrap = document.createElement("div");
passwordInpWrap.classList.add("field-wrap");
let passwordErrorLabel = document.createElement("label");
passwordErrorLabel.classList.add("error");
passwordInpWrap.append(passwordInp,passwordErrorLabel)





// Создание согласия с условием
let conditionLabelWrap = document.createElement("div");
conditionLabelWrap.classList.add("field-wrap");
let conditionLabel = document.createElement("label");
conditionLabel.classList.add("condition");
let conditionInp = document.createElement("input");
conditionInp.type = "checkbox";
let conditionSpan = document.createElement("span");
conditionSpan.textContent = "Согласны с условиями?";
conditionLabel.append(conditionInp, conditionSpan);
let conditionErrorLabel = document.createElement("label");
conditionErrorLabel.classList.add("error");
conditionLabelWrap.append(conditionLabel, conditionErrorLabel);









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



    let validationResult = false;


    // Проверка фамилии
    surnameErrorLabel.textContent = ""
    if(surnameValue.length <= 1) {
        surnameErrorLabel.textContent = "Введите правильную фамилию"
        validationResult = true;
    }

    if(surnameValue === "") {
        surnameErrorLabel.textContent = "Введите фамилию"
        validationResult = true;
    }

   
    // Проверка имени
    nameErrorLabel.textContent = ""
    if(nameValue.length <= 1) {
        nameErrorLabel.textContent = "Введите правильное имя"
        validationResult = true;
    }

    if(nameValue === "") {
        nameErrorLabel.textContent = "Введите имя"
        validationResult = true;
    }

   
    // Проверка возраста
    ageErrorLabel.textContent = ""
    if(ageValue < 14) {
        ageErrorLabel.textContent = "Вы ещё слишком молоды!"
        validationResult = true;
    }

    if(ageValue === 0) {
        ageErrorLabel.textContent = "Введите возраст"
        validationResult = true;
    }

   
    // Проверка почты
    emailErrorLabel.textContent = ""
    if(emailValue.length < 6) {
        emailErrorLabel.textContent = "Введите правильную почту!"
        validationResult = true;
    }

    if(emailValue === "") {
        emailErrorLabel.textContent = "Введите почту!"
        validationResult = true;
    }

    

   
    // Проверка пароля
    passwordErrorLabel.textContent = ""
    if(passwordValue.length < 6 || passwordValue.includes("_") === false) {
        passwordErrorLabel.textContent = "Небезопасный пароль!"
        validationResult = true;
    }

    if(passwordValue === "") {
        passwordErrorLabel.textContent = "Введите пароль!"
        validationResult = true;
    }

    


    // Проверка согласия
    conditionErrorLabel.textContent = ""
    if(conditionValue === false) {
        conditionErrorLabel.textContent = "Вы не согласны с условиями!"
        validationResult = true;
    }

    if(validationResult === true){
        return
    }


    
    alert(`${nameValue} ${surnameValue}, поздравляем с регистрацией!!!`);
}







box.append(
    title, 
    surnameInpWrap, 
    nameInpWrap, 
    ageInpWrap, 
    emailInpWrap, 
    passwordInpWrap,
    conditionLabelWrap,
    regBtn,
);




document.body.append(box);






