// Задачи от deepseek

// 1. Браузерное окружение, спецификации
// 🔹 Задачи:

// Выведи в консоль объект window и найди в нём:

// document

// navigator.userAgent (информация о браузере)

// location.href (URL страницы)

// console.log(window)
// console.log(window.document)
// console.log(window.navigator.userAgent)
// console.log(window.location)

// 2. DOM-дерево
// 🔹 Задачи:
//  Создай простой HTML-документ с таким DOM:

// <html>
//   <body>
//     <div id="root" class="main" >Привет, <b>DOM</b>!</div>
//   </body>
// </html>

const body = document.body
const div = document.createElement('div') // создал div
div.classList.add('main') // добавил класс
div.id = 'root' // добавил id
div.innerHTML = 'Привет, <b>DOM</b>!' // поместил контент в формате html
body.append(div) // поместил в body div

// 3. Навигация по DOM-элементам
// 🔹 Задачи:
//  Для элемента <div id="root"> из задачи 3 выведи в консоль:

// Его родителя (parentNode).

// Первый и последний дочерний узлы (firstChild, lastChild).

// Соседа (если есть nextSibling или previousSibling).

// Перебери все дочерние узлы <div id="root"> и выведи их типы (nodeType).

console.log(div.parentNode) // body
console.log(div.firstChild, div.lastChild) // Привет, | !
console.log(div.nextSibling, div.previousSibling) // null | #text(переносы/пробелы до div)
for (const elem of div.childNodes) {
	console.log([elem, elem.nodeType])
} // [text, 3], [b, 1], [text, 3]

// 4. Поиск: getElement, querySelector
// 🔹 Задачи:
// Найди элемент <div id="root"> тремя способами:

// getElementById

// querySelector

// querySelectorAll

// Найди все <b> теги на странице и выведи их количество.

console.log(document.getElementById('root')) // div#root.main
console.log(document.body.querySelector('div')) // div#root.main
console.log(body.querySelectorAll('div')) // NodeList [div#root.main]
console.log(body.querySelectorAll('b').length) // 1

// 5. Свойства узлов: тип, тег и содержимое
// 🔹 Задачи:
// Для <div id="root"> выведи:

// Его тип (nodeType).

// Название тега (tagName).

// Текстовое содержимое (textContent и innerText — в чём разница?).

// Создай текстовый узел (document.createTextNode) и добавь его в <div id="root">.

console.log(div.nodeType) // 1
console.log(div.textContent) // когда нужно получить/установить весь текст без изменений
console.log(div.innerText) // Покажет текст как видит пользователь

const text_node = document.createTextNode('test')
body.append(text_node)

// 6. Атрибуты и свойства
// 🔹 Задачи:
//  Для <div id="root"> сделай:
// - Добавь атрибут data-info="test".
// - Проверь его значение через getAttribute и через свойство dataset.
// - Удали атрибут.

div.setAttribute('data-info', 'test')
console.log(div.getAttribute('data-info')) // test
console.log(div.dataset.info) // test
div.removeAttribute('data-info')
// delete div.dataset.info
console.log(div.dataset.info) // undefined

// 7. Изменение документа
// 🔹 Задачи:
// Создай новый элемент <p> с текстом "Новый элемент" и добавь его в конец <body>.
// Удали элемент <b> из <div id="root">.
// Склонируй <div id="root"> (cloneNode) и вставь копию перед оригиналом.

const p = (document.createElement('p').textContent = 'Новый элемент')
body.append(p)
body.querySelector('b').remove()
const div_clone = div.cloneNode(true)
console.log(div_clone)
div.insertAdjacentElement('beforebegin', div_clone)

// 8. Стили и классы
// 🔹 Задачи:
// Для <div id="root"> сделай:
// Измени цвет текста на красный через style.color.
// Добавь класс .active с жёлтым фоном (CSS) через classList.add.
// Переключи класс (если есть — удали, если нет — добавь).
// Создай элемент <div> с размерами 100x100px и чёрной рамкой (используй style.cssText).

div.style.color = 'red'
div.classList.remove('main')
div.classList.add('active')
div.style.backgroundColor = 'yellow'
document.body
	.querySelectorAll('div')
	.forEach(elem => (elem.style.backgroundColor = 'green'))
div.classList.toggle('active')

const square = document.createElement('div')
square.style.cssText =
	'width: 100px; height: 100px; background-color: red; border: 2px black solid '
body.append(square)
