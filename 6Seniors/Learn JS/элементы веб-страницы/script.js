"use strict"

// document.write("<h1>Привет, я - заголовок</h1>")
// document.write("<p>Привет, я - параграф</p>")
// document.write("<ul><li>первый элемент списка</li> <li>второй элемент списка</li> <li>третий элемент списка</li></ul>")
// document.write("<button>Кнопка</button>")


// Заголовок
let title = document.createElement("h1")
title.classList.add("title-h1")
title.textContent = 'Привет, я - заголовок'

// Описание
let desc = document.createElement("p")
desc.classList.add("desc-p", "text")
desc.classList.remove("text")
desc.textContent = 'Параграф'


// Список
let counter = 0;
let list = document.createElement("ul");

// counter++;
// let listItem1 = document.createElement("li")
// listItem1.textContent = `Элемент ${counter}`

// counter++;
// let listItem2 = document.createElement("li")
// listItem2.textContent = `Элемент ${counter}`

// counter++;
// let listItem3 = document.createElement("li")
// listItem3.textContent = `Элемент ${counter}`


// list.append(listItem1, listItem2, listItem3)


// Текстовое поле

let textInp = document.createElement("input");
textInp.placeholder = "Введите имя";
textInp.type = "text";
// textInp.classList.add("textInp-")



// Кнопка
let action = document.createElement("button")
action.textContent = 'Кнопка'

action.onclick = function() {
    counter++;

    let inpText = textInp.value

    title.textContent = 'клик по кнопке'
    desc.classList.add("text")

    let listItem = document.createElement("li")

    listItem.textContent = `${counter}) ${inpText} `
    list.append(listItem)
    textInp.value = ""
}




document.body.append(title, desc, list, textInp, action)









