// Промисы

// Promise - это специальный объект в js, который связывает "создающый" и "потребляющий" коды вместе. "Создающий" код может выполняться сколько потребуется, чтобы получить результат, а промис делает результат доступным для кода, который подписан на него, когда результат будет готов.

let promise = new Promise(function(resolve, reject){
// функця-исполнитель(executor)
});

// Функция, переданная в конструкцию new Promise, называется исполнитель(executor). Когда Promise создаётся, она запускается автоматически. Она должна содержать "создающий" код, который когда-нибудь создаст результат. 
// Её аргументы resolve и reject - это колбэки, которые предоставляет сам JS. Наш код - только внутри исполнителя.
// Когда он получает результат, сейчас или позже - не важно, он должен вызвать один из этих колбэков.
// resolve(value) - если работа завершилась успешно, с результатом value.
// reject(error) - если произошла ошибка, error - объект ошибки.

// Итак, исполнитель запускается автоматически, он должен выполнить работу, а затем вызвать resolve или reject.
// У объекта promise, возвращаемого конструктором new Promise, есть внутренние свойства:
// state("состояние") - вначале "pending"("ожидание"), потом меняется на "fulfilled"("выполнено успешно") при вызове resolve или на "rejected"("выполнено с ощибкой") при вызове reject.
// result("результат") - вначале undefined, далее изменяется на value при вызове resolve(value) или на error при вызове reject(error).

{
    let promise = new Promise(function(resolve, reject){
    // эта функция выполнится автоматически при вызове New Promise

    // через 1 секунду сигнализирвать, что задача выполнена с результатом "done"
    setTimeout(() => resolve("done"), 1000);
    });

    promise.then(
        result => console.log(result),
        error => console.log(error)
    )
}

// Теперь пример с ошибкой:



// {
//     let promise = new Promise(function(resolve, reject) {
//         // спустя одну секунду будет сообщено, что задача выполнена с ошибкой
//         setTimeout(() => reject(new Error("Whoops!")), 1000);
//       });
// }
























