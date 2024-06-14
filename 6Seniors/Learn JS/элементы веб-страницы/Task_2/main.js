// Реализуйте в документе (в body) следующую структуру HTML-элементов с помощью встроенных функция создания элементов в Javascript:

/*
<h1>Что я узнал в видео</h1>
<ul>
  <li>1) Как создавать HTML-элементы</li>
  <li>2) Узнал, как добавлять текст и HTML-код в элемент</li>
  <li>3) Как добавлять и удалять классы</li>
  <li>4) Узнал, как вложить один элемент в другой</li>
  <li>5) Узнал, что такое событие и обработчик события</li>
  <li>6) Как назначить обработчик события</li>
</ul>
*/

// Для создания элементов необходимо использовать:
// document.createElement()
// textContent
// append()

// document.write() мы уже не используем





let title = document.createElement("h1");
title.textContent = `Что я узнал в видео`;

let list = document.createElement("ul");
let listItem1 = document.createElement("li");
let listItem2 = document.createElement("li");
let listItem3 = document.createElement("li");
let listItem4 = document.createElement("li");
let listItem5 = document.createElement("li");
let listItem6 = document.createElement("li");

listItem1.textContent = "1) Как создавать HTML-элементы"
listItem2.textContent = "2) Узнал, как добавлять текст и HTML-код в элемент"
listItem3.textContent = "3) Как добавлять и удалять классы"
listItem4.textContent = "4) Узнал, как вложить один элемент в другой"
listItem5.textContent = "5) Узнал, что такое событие и обработчик события"
listItem6.textContent = "6) Как назначить обработчик события"



list.append(listItem1, listItem2, listItem3, listItem4, listItem5, listItem6)


document.body.append(title, list);