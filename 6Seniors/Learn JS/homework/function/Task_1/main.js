// Исправьте код так, что бы в консоле не было ошибок и в документ браузера выводился верный результат. А именно список товаров с нумерацией, весом и общим весом всех товаров.

document.write("<h1>Список товаров</h1>")

document.write("<ul>")

let index = 1
let totalWeight = 0

// Товар 1
function printWeight(weight) {
  index++
  totalWeight = totalWeight + parseInt(weight);
  
  document.write(`<li>
                    Товар ${index}, вес: <strong>${weight}</strong> кг
                  </li>`)
}




printWeight(prompt(`Введите вес товара ${index}`))
printWeight(prompt(`Введите вес товара ${index}`))
printWeight(prompt(`Введите вес товара ${index}`))

document.write("</ul>")

document.write('<hr>')
document.write(`<p>Общий вес товаров: ${totalWeight} кг</p>`)