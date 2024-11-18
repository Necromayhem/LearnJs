// Пользовательские ошибки, расширение Error


class Error{
    constructor(message){
        this.message = message;
        this.name = "Error";
    }
};


// унаследуем от него ValidationError и попробуем новый класс в действии:
class ValidationError extends Error{
    constructor(message){
        super(message);
        this.name = "ValidationError";
    }
}

// вызываем ошибку
// function test(){
//     throw new ValidationError("Упс!");
// }

// try {
//     test();
// } catch(err){
//     console.log(err.message); // Упс!
//     console.log(err.name); // ValidationError
// }


let json = `{ "name": "John", "age": 30 }`;

//  Использование
function readUser(json){
    let user = JSON.parse(json);

    if(!user.age){
        throw new ValidationError("Нет поля: age");
    }
    if(!user.name){
        throw new ValidationError("Нет поля: name");
    }

    return user;
}

// рабочий пример с try...catch
try {
    let user = readUser('{"age": 25}');
} catch(err){
    if(err instanceof ValidationError){
        console.log("Некорректные данные: " + err.message);
    } else if (err instanceof SyntaxError){
        console.log("JSON Ошибка Синтаксиса: " + err.message);
    } else{
        throw err; // неизвестная ошибка, пробросить исключение
    }
};

// Дальнейшее наследование.
// Класс ValidationError является слишком общим. Много что может пойти не так. Свойство может отсутствовать или иметь неверный формат(например, строка как значение возраста age). Поэтому для отсутствующих свойств сделаем более конкретный класс PropertyRequireError. Он будет нести дополнительную информацию о свойстве, которое отсутствует.

{

    class Error{
        constructor(message){
            this.message = message;
            this.name = "Error";
        }
    };
    
    class ValidationError extends Error {
        constructor(message) {
          super(message);
          this.name = "ValidationError";
        }
      }
    
    class PropertyRequireError extends ValidationError{
        constructor(property){
            super("Нет свойства: " + property);
            this.name = "PropertyRequiredError";
            this.property = property;
        }
    }

    // Применение

    function readUser(json){
        let user = JSON.parse(json);

        if(!user.age){
            throw new PropertyRequireError("age");
        }
        if(!user.name){
            throw new PropertyRequireError("name");
        }

        return user;
    }

    // рабочий пример с try...catch
    try{
        let user = readUser('{"age": 25}');
    } catch(err){
        if(err instanceof ValidationError){
            console.log("Неверные данные: " + err.message);
            console.log(err.name); // PropertyRequiredError
            console.log(err.property); // name
        } else if(err instanceof SyntaxError){
            console.log("Ошибка синтаксиса JSON: " + err.message);
        } else{
            throw err; // неизвестная ошибка, повторно выбросит исключение
        }
    }
}










































