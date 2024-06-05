"use strict"


document.write('<h1 class="main-title">Калькулятор калорийности блюда</h1>');

let index = 0;
let totalCalories = 0;

function isValidNumber(input) {
  return !isNaN(input) && input.trim() !== "";
}

function getEat(index) {
    
  let eat = prompt("Что за еда?", "");
  let calories = prompt("Калорийность (на 100г)?", "");
  while (!isValidNumber(calories)) {
    alert("Пожалуйста, введите число для калорийности.");
    calories = prompt("Калорийность (на 100г)?", "");
  }

  let weight = prompt("Вес (граммы)?", "");
  while (!isValidNumber(weight)) {
    alert("Пожалуйста, введите число для веса.");
    weight = prompt("Вес (граммы)?", "");
  }

  index++;
  let totalcalories = (calories * weight) / 100;
  totalCalories += totalcalories;

  document.write(`<li>
    ${index}, еда: ${eat}, калорийность: <strong>${calories}</strong> ккал,
    вес: <strong>${weight}</strong> г, всего: <strong>${totalcalories.toFixed(2)}</strong> ккал
  </li>`);
}

document.write('<ul>');
getEat(index);
getEat(index);
getEat(index);
document.write('</ul>');
document.write(`<p><strong>Общая калорийность всех блюд:</strong> ${totalCalories.toFixed(2)} ккал</p>`);