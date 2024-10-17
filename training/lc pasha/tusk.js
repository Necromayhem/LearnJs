// =============== 1 ЗАДАНИЕ  ===============
// Дан массив:

// [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
// ]

// Слейте элементы этого массива в один одномерный массив:

// [1, 2, 3, 4, 5, 6, 7, 8, 9]

function merger(arr){
    return arr.reduce((acc, current) => acc.concat(current), []);
}

// console.log(merger([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));


//  =============== 2 ЗАДАНИЕ  ===============
// Дан многомерный объект произвольного уровня вложенности:

// {
//     a: {
//         b: {
//             c: '+++'
//         }
//     },
// }

// Сделайте функцию, которая будет возвращать элементы объекта, параметром получая строку с ключами объекта, разделенными точками:
// func('a.b.c'); // вернет '+++'

let obj1 = {
         a: {
             b: {
                 c: '+++'
             }
         },
    }


function deeper(obj, string){
    const keys = string.split(".");
    return keys.reduce((acc, key) => {
        return acc && acc[key]; // Проходим по объекту, используя ключи
    }, obj); 
}

// console.log(deeper(obj1, 'a.b.c')); // +++



//  =============== 3 ЗАДАНИЕ  ===============
//  Чат-бот с таймерами и обработкой запросов
// Создай чат-бота, который принимает сообщения и отвечает на них через определенное время (например, с задержкой 2 секунды). 
// У бота есть список заготовленных ответов. 
// После получения сообщения он отвечает одним из случайных ответов из списка.

// Условия:
// Бот принимает сообщение через метод sendMessage(message).
// Бот отвечает через 2 секунды случайной фразой из списка ответов.
// У бота есть массив заранее подготовленных ответов, который можно расширить через метод addResponse(response).

// Пример:
// const bot = new ChatBot();
// bot.sendMessage('Привет, бот!');  // Через 2 секунды бот ответит случайной фразой
// bot.addResponse('Рад тебя видеть!');
// bot.sendMessage('Как дела?');  //  Бот ответит одной из 

let chatBot = {
  answers: ['Рад тебя видеть!', 'Что делаешь?', 'Как тебя зовут?', 'Как прошёл день?'],

  sendMessage: function(){
    return setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * this.answers.length);
      const randomAnswer = this.answers[randomIndex];
      console.log(randomAnswer);
    }, 2000)
  },

  addResponse: function(string){
    let newPhrase = string;
    if(typeof newPhrase === 'string'){
      this.answers.push(newPhrase);
    }
  }
};

chatBot.addResponse("Тест")
chatBot.addResponse("прив чё дел")
chatBot.addResponse("абоба")
chatBot.addResponse("расскажи о себе")
chatBot.addResponse("чего хочешь???")
console.log(chatBot.answers);

chatBot.sendMessage()
chatBot.sendMessage()
chatBot.sendMessage()
chatBot.sendMessage()
chatBot.sendMessage()
chatBot.sendMessage()
chatBot.sendMessage()
chatBot.sendMessage()
chatBot.sendMessage()
chatBot.sendMessage()
chatBot.sendMessage()
chatBot.sendMessage()





//  =============== 4 ЗАДАНИЕ  ===============
// Напиши функцию для вычисления факториала числа с использованием рекурсии. Факториал числа 
// 𝑛
// n определяется как произведение всех чисел от 1 до 
// 𝑛
// n. Факториал числа 0 считается равным 1.

// Условия:
// Используй рекурсию для вычисления факториала.
// Если число меньше 0 — возвращай null.
// Проверяй входные данные на то, что это число.
// Пример:
// console.log(factorial(5)); // 120
// console.log(factorial(0)); // 1
// console.log(factorial(-1)); // null

function factorial(n){
    if(typeof n !== "number"){
        return "Введите число!"
    } 
    if(n < 0) return null;
    if(n === 0) return 1;

    return n*factorial(n - 1)
};

// console.log(factorial(5)); // 120
// console.log(factorial(-1)); // null
// console.log(factorial('qqq')); // Введите число




//  =============== 5 ЗАДАНИЕ  ===============
// Тебе дана информация о пользователях, представленная в 2 вариантах: в виде массива объектов и в виде объекта с объектами.

const usersArray = [
  { id: "34rdca3eeb7f6fgeed471198", name: "Andrew", age: 25 },
  { id: "76rdca3eeb7f6fgeed471100", name: "Alexey", age: 15 },
  { id: "12rdca3eeb7f6fgeed4711012", name: "Egor", age: 13 },
  { id: "32rdca3eeb7f6fgeed471101", name: "Kate", age: 31 },
  { id: "98rdca3eeb7f6fgeed471102", name: "Elena", age: 18 }
];

const usersObject = {
  "34rdca3eeb7f6fgeed471198": {
    id: "34rdca3eeb7f6fgeed471198",
    name: "Andrew",
    age: 25
  },
  "76rdca3eeb7f6fgeed471100": {
    id: "76rdca3eeb7f6fgeed471100",
    name: "Alexey",
    age: 15
  },
  "12rdca3eeb7f6fgeed4711012": {
    id: "12rdca3eeb7f6fgeed4711012",
    name: "Egor",
    age: 13
  },
  "32rdca3eeb7f6fgeed471101": {
    id: "32rdca3eeb7f6fgeed471101",
    name: "Kate",
    age: 31
  },
  "98rdca3eeb7f6fgeed471102": {
    id: "98rdca3eeb7f6fgeed471102",
    name: "Elena",
    age: 18
  }
};

// // Тебе  необходимо написать универсальную функцию getAdultUsers(), которая будет:
// // Принимать на вход массив или объект с пользователями
// // Выбирать из него только те элементы, у которых поле age больше или равно 18
// // Возвращать массив или объект со взрослыми пользователями. Если изначально был передан массив, то вернуть необходимо также массив. Если объект, то объект.
// // Примечание: в работе рекомендуем использовать Object.keys()

// // Пример работы функции:

function getAdultUsers(users) {
  let obj = users;
  
  if(Array.isArray(obj)){
    return obj.filter(user => user.age >= 18)
  } else if(typeof obj === "object"){
    console.log("проверка на вход");
    return Object.values(obj).filter(user => user.age >= 18).reduce((acc, user) => {
        acc[user.id] = user;
        return acc;
    }, {  })
  }
}

// console.log(getAdultUsers(usersArray));
// console.log(getAdultUsers(usersObject));

[
    { id: '34rdca3eeb7f6fgeed471198', name: 'Andrew', age: 25 },
    { id: '32rdca3eeb7f6fgeed471101', name: 'Kate', age: 31 },
    { id: '98rdca3eeb7f6fgeed471102', name: 'Elena', age: 18 }
]


// // console.log(getAdultUsers(usersObject));
// // /*
// // {
// //     '34rdca3eeb7f6fgeed471198': { 
// //         id: '34rdca3eeb7f6fgeed471198', 
// //         name: 'Andrew', 
// //         age: 25 
// //     },
// //     '32rdca3eeb7f6fgeed471101': { 
// //         id: '32rdca3eeb7f6fgeed471101', 
// //         name: 'Kate', 
// //         age: 31 
// //     },
// //     '98rdca3eeb7f6fgeed471102': { 
// //         id: '98rdca3eeb7f6fgeed471102', 
// //         name: 'Elena', 
// //         age: 18 
// //     }
// // }


const array = [1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1,1,1,1,1, 0, 0, 0, 0,];

function maxChain(arr){
  let curr = 0; // текущая последовательность
  let max = 0; // максимальная последовательность

  for(let i = 0; i < arr.length; i++){
    if(arr[i] === 1){
      curr++;
      if(curr>max){
        max = curr;
      }
    } else{
      curr = 0;
    }
  } return max;
}

// console.log(maxChain(array)); 









