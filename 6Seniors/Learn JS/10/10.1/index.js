// Обработка ошибок, "try..catch"

// try {

//     // код...
  
//   } catch (err) {
  
//     // обработка ошибки
  
//   }


let json = '{"name":"John", "age": 30}'; // данные с сервера
let user = JSON.parse(json); // преобразование текстового представления в js-объект

// теперь user - объект со свойствами из строки
// console.log(user); // {name: 'John', age: 30}
// console.log(user.name); // John
// console.log(user.age); // 30

{
    let json = "{ некорректный JSON }";


    try {
        let user = JSON.parse(json) // тут возникает ошибка!
        console.log(user.name); // не сработает
    } catch (err){
        //...выполнение прыгает сюда
        // console.log("Извините, в данных ошибка, мы попробуем получить их ещё раз");
        // console.log(err.name); // SyntaxError
        // console.log(err.message); // Expected property name or '}' in JSON at position 2 (line 1 column 3)
    }
}


let error =  new Error("чел ты")
// console.log(error);


// try {
//     JSON.parse("{ некорректный json o_O }");
// } catch(e) {
//     console.log(e.name); // SyntaxError
//     console.log(e.message); // Expected property name or '}' in JSON at position 2 (line 1 column 3)
// }

{
    let json = '{ "age": 30}'; // данные неполны

    try {

        let user = JSON.parse(json);// выполнится без ошибок

        if(!user.name){
            throw new SyntaxError("Данные неполны: нет имени");
        }

        console.log( user.name );
    } catch(e){
        console.log("JSON Error: " + e.message); // JSON Error: Данные неполны: нет имени
    }
}


{
    let json = '{ "age": 30 }'; // данные неполны
try {

  let user = JSON.parse(json);

  if (!user.name) {
    throw new SyntaxError("Данные неполны: нет имени");
  }

  blabla(); // неожиданная ошибка
  console.log( user.name );

} catch(e){
    if(e.name == "SyntaxError"){
        console.log("JSON Error: " + e.message);
    } else {
        throw e; // проброс!!!
    }
}
}












