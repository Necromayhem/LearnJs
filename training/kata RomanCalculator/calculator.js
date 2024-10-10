
function calculator(string){
    let parts = string.split(' '); // делю строку по пробелу

    if(parts.length != 3){
        throw new Error("Строка должна содержать ровно три элемента, разделенные пробелами.")
    };

    // Проверка на целые числа

    if (!(Number.isInteger(parseInt(parts[0])) && Number.isInteger(parseInt(parts[2])))) {
        throw new Error("Введите корректные целые числа.");
    }

    let num1 = parts[0]; 
    let operand = parts[1];
    let num2 = parts[2];

    

    // Результат в зависимости от оператора:

    switch(operand){
        case '+':
            return parseInt(num1) + parseInt(num2);    
        case '-':
            return parseInt(num1) - parseInt(num2);
        case '*':
            return parseInt(num1) * parseInt(num2);    
       case '/':
            return parseInt(num1) / parseInt(num2);
        default:
            throw new Error("Некорректный оператор.");    
    }

}

console.log(calculator("1 + 5"));
console.log(calculator("1 + 1"));




