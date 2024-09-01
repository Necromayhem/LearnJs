// Рекурсия. повтор.

let count = 0;

function recurse(){
    if(count === 10) return count

    count++
    return recurse();
}

// console.log(recurse());


//Math.pow(5, 3)
function pow(x, y){
    if(y === 0) return 1

    return x * pow(x, y-1)
}

// console.log(pow(5, 3));



function sumOfDigits(number){
    if (number === 0) return 0

    return 1 + sumOfDigits(Math.floor(number/10))
}

// console.log(sumOfDigits(12));















