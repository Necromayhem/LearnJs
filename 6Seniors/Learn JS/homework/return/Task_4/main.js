// Сделайте код программы компактнее, используя известные вам приемы.

document.write("<h1>Ваш заказ</h1>")

// Функция расчета стоимости со скидкой в процентах. Возвращает стоимость товара с примененной скидкой.
// price - цена
// percent - скидка в процентах
function getPercentDiscount(price, percent = 0) {
  let result = price - (price / 100 * percent)
  return result
}

// Функция, возвращающая <strong> с текстом
function getStrong(text) {
  let result = `<strong>${text}</strong>`
  return result
}

// Функция, создающая <p> с текстом
function printParagraph(text) {
  document.write("<p>")
  document.write(text)
  document.write("</p>")
}

// Товар 1
{
  let product = "Футболка" // Название
  let price = 800 // Стоимость
  let discount = 15

  let finalPrice = getPercentDiscount(price, discount) // Стоимость со скидкой

  printParagraph(`${product}, стоимость: ${price} руб - ${discount}% = ${getStrong(finalPrice)} руб`)
}

// Товар 2
{
  let product = "Носки" // Название
  let price = 200 // Стоимость
  let discount = 10

  let finalPrice = getPercentDiscount(price, discount) // Стоимость со скидкой

  printParagraph(`${product}, стоимость: ${price} руб - ${discount}% = ${getStrong(finalPrice)} руб`)
}

// Товар 3
{
  let product = "Штаны" // Название
  let price = 1000 // Стоимость
  let discount = 5

  let finalPrice = getPercentDiscount(price, discount) // Стоимость со скидкой

  printParagraph(`${product}, стоимость: ${price} руб - ${discount}% = ${getStrong(finalPrice)} руб`)
}

