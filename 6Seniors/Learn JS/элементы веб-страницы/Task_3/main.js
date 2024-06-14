// Эта программа выводит в документ список достижений в Javascript. Ваша задача изменить способ вывода, используя встроенные функции создания, стилизации и настройки HTML-элементов. 
// document.write() в итоговой реализации быть не должно.

// Напомню, что функции - удобный инструмент сокращения кода. Используйте функции, аргументы функций и return для оптимизации кода. Найдите повторяющиеся фрагменты кода в программе и используйте функции для сокращения кода.



let i = 0 // Счетчик


let container = document.createElement("div");
container.classList.add("container")

let title = document.createElement("h1");
title.textContent = `Достижения в изучении JavaScript`;
title.classList.add("main-title")

let list= document.createElement("ul");
list.classList.add("list")


function getItemCard(index, text) {
  let item = document.createElement("li");
  item.classList.add("list__item"); // Добавление класса к элементу списка

  let itemIndex = document.createElement("span");
  itemIndex.textContent = `${index}`;
  itemIndex.classList.add("list__index"); // Добавление класса к счетчику

  let itemDesc = document.createElement("p");
  itemDesc.textContent = text;
  itemDesc.classList.add("list__desc"); // Добавление класса к описанию

  item.append(itemIndex, itemDesc); // Объединение счетчика и описания в один элемент списка
  return item;
}



// Карточка 1
i++
let item1 = getItemCard(i, "Знаю, что такое вывод и ввод информации")

// Карточка 2
i++
let item2 = getItemCard(i, "Знаю о способах вывода информации")

// Карточка 3
i++
let item3 = getItemCard(i, "Знаю, что такое числа, строки, и переменные")
                    
// Карточка 4
i++
let item4 = getItemCard(i, "Умею создавать функции и пользоваться ими")
                    
// Карточка 5
i++
let item5 = getItemCard(i, "Учусь создавать HTML - элементы с помощью встроенных функций")
                    
// document.body.classList.add("body")

list.append(item1, item2, item3, item4, item5)
container.append(title, list)
document.body.append(container)                