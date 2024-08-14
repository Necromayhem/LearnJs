// // Деструктурирующее присваивание

// let arr = ['alex', 'ivanov']

// // let [firstName, surName, qwe] = arr;

// // console.log(firstName); // alex
// // console.log(surName); // ivanov
// // console.log(qwe); // undefined


// let [firstName, surName] = "alex ivanov".split(' ')
// console.log(firstName); // alex
// console.log(surName); // ivanov

// // Нежелательные элементы массива также могут быть отброшены с помощью дополнительной запятой:

// let [first, , titled] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

// console.log(titled); // Consul

// // мы можем использовать любой перебираемый объект, не только массивы:

// let [a, b, c] = 'abc'
// console.log(c); // c

// let [one, two, three] = new Set([1, 2, 3]);
// console.log(two); // 2



// let user = {};
// [user.name, user.surName] = 'Ivan Ivanov'.split(' ')
// console.log(user.name); // Ivan
// console.log(user.surName); // Ivanov




// // Цикл с .entries()
// // мы можем использовать его с деструктуризацией для цикличного перебора ключей и значений объекта:

// let user1 = {
//     name: 'John',
//     age: 30
// };

// // цикл по ключам и значениям
// for(let [key, value] of Object.entries(user1)){
//     console.log(`${key}:${value}`);
// }



// // то же самое для map

// let user2 = new Map();

// user2.set("name", "John");
// user2.set("age", "30");

// for(let [key, value] of user2){
//     console.log(`${key}:${value}`);
// }



// // Трюк обмена переменных
// // Существует хорошо известный трюк для обмена значений двух переменных с использованием деструктурирующего присваивания:


// let guest = "Jane";
// let admin = "Pete";

// // Давайте поменяем местами значения: сделаем guest = "Pete", а admin = "Jane"

// [guest, admin] = [admin, guest]

// console.log(`${guest} ${admin}`); // Pete Jane
// //Здесь мы создаём временный массив из двух переменных и немедленно деструктурируем его в порядке замены.
// //Таким образом, мы можем поменять местами даже более двух переменных.



// // Остаточные параметры «…»
// //Обычно, если массив длиннее, чем список слева, «лишние» элементы опускаются.

// let [name1, name2] = ['alex', 'ivan', 'oleg', 'danil']
// console.log(name1); // alex
// console.log(name2); // ivan


// // Если мы хотим не просто получить первые значения, но и собрать все остальные, то мы можем добавить ещё один параметр, который получает остальные значения, используя оператор «остаточные параметры» – троеточие ("..."):

// let [surname1, surname2, ...rest] = ['ivanov', 'petrov', 'olegov', 'danilov']

// console.log(rest[0]); // olegov
// console.log(rest[1]); // danilov
// console.log(rest.length); // 2
// console.log(rest); // ['olegov', 'danilov']




// //Значения по умолчанию

// let [named = "Guest", surnamed = "Anonymous"] = [,"Julius"];
// console.log(named); // Guest
// console.log(surnamed); // Julius

// //======================================================================


// // Деструктуризация объекта

// // let {var1, var2} = {var1:…, var2:…}

// // let options = {
// //     title: "Menu",
// //     width: 100,
// //     height: 200
// // };

// // let {title, width, height} = options;

// // console.log(title);
// // console.log(width);
// // console.log(height);

// // Свойства options.title, options.width и options.height присваиваются соответствующим переменным.

// // let {height, width, title} = { title: "Menu", height: 200, width: 100 }


// // Если мы хотим присвоить свойство объекта переменной с другим названием, например, свойство options.width присвоить переменной w, то мы можем использовать двоеточие:

// // let {width: w, height: h, title} = options;

// // width -> w
// // height -> h
// // title -> title

// // alert(title);  // Menu
// // alert(w);      // 100
// // alert(h);      // 200


// // Для потенциально отсутствующих свойств мы можем установить значения по умолчанию, используя "="

// // let {width = 100, height = 200, title} = options;

// // alert(title);  // Menu
// // alert(width);  // 100
// // alert(height); // 200




// // Остаток объекта «…»
// // Что если в объекте больше свойств, чем у нас переменных? Можем ли мы взять необходимые нам, а остальные присвоить куда-нибудь?
// // Можно использовать троеточие, как и для массивов. В некоторых старых браузерах (IE) это не поддерживается, используйте Babel для полифила.


// let optioned = {
//     title: "Menu",
//     height: 200,
//     width: 100
//   };

// let {title, ...rest2} = optioned

// console.log(rest2.height); // 200
// console.log(rest2.width); // 100
// console.log(title); // Menu



// Вложенная деструктурризация


// let options = {
//     size: {
//         width: 100,
//         height: 200
//     },
//     items : ["Cake", "Donut"],
//     extra: true
// };

// // деструктуризация разбита на несколько строк для ясности

// let {
//     size: { // положим size сюда
//         width,
//         height
//     },
//     items: [item1, item2],
//     title = 'Menu'
// } = options

// console.log(title); // Menu
// console.log(width); // 100
// console.log(height); // 200
// console.log(item1); // Cake
// console.log(item2); // Donut



// Умные параметры функций

// мы передаём объект в функцию
// let options = {
//     title: "My menu",
//     items: ["Item1", "Item2"]
//   };
  
//   // ...и она немедленно извлекает свойства в переменные
//   function showMenu({title = "Untitled", width = 200, height = 100, items = []}) {
//     // title, items – взято из options,
//     // width, height – используются значения по умолчанию
//     alert( `${title} ${width} ${height}` ); // My Menu 200 100
//     alert( items ); // Item1, Item2
//   }
  
//   showMenu(options);

























