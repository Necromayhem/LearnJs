// Сделайте программу вывода рецепта приготовления пельменей короче:

// Используйте более короткий способ вывода, объединив несколько команд document.write() в одну

// Определите повторяющийся фрагмент кода и создайте для этого фрагмента отдельную функцию с параметрами (аргументами). Вызывайте функцию с параметрами в нужной части программы.

document.write('<div class="container">')
document.write('<h1 class="main-title">Приготовление пельменей</h1>')

let index = 0 // Счетчик этапов

document.write('<ul class="list">')

// Этап 1

let text = "Налейте в кастрюлю воду"
let className = ""

function printCook(className, text) {
    index++;
    document.write(`<li class="list__item ${className}">` +
    `<span class="list__index">${index}</span>` +
    `<p class="list__text">${text}</p>` +
    `</li>`);
}

printCook(className, text)

// Этап 2

text = "Достаньте из холодильника пельмени"
className = ""

printCook(className, text)

// Этап 3

text = "Забросьте пельмени в горячую воду. ОСТОРОЖНО, НЕ ОБОЖГИТЕСЬ!"
className = "list__item_warning"
printCook(className, text)

// Этап 4

text = "Посолите и поперчите по вкусу"
className = ""
printCook(className, text)

// Этап 5

text = "Ждите готовности"
className = ""
printCook(className, text)

// Этап 6

text = "Приятного аппетита!"
className = "list__item_finish"
printCook(className, text)

document.write('</ul>')
document.write('</div>')