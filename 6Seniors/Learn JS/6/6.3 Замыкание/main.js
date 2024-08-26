// Область видимости переменных, замыкание

{
    let message = 'Hello'

    // console.log(message); // Hello
}

// console.log(message); // ReferenceError: message is not defined

{
    // показать другое сообщение
    let message = "Goodbye";
    // console.log(message); // Goodbye
}


function sayHiBye(firstName, lastName) {

// функция-помощник, которую мы используем ниже
function getFullName() {
return firstName + " " + lastName;
}

console.log( "Hello, " + getFullName() );
console.log( "Bye, " + getFullName() );

}

// sayHiBye('Alex', 'Kuklev')























