"use strict"


// let billion = 1000000000;

// let billion = 1_000_000_000;

// let billion = 1e9;
// console.log(billion);


// let mcs = 0.000001

// let ms = 1e-6;

// console.log(mcs, ms);


// alert( 0xdf );


// let a = 0b11111111;
// let b = 0o377;
// alert( a === b );


// let num = 12345;
// alert( num.toString(16));
// alert( num.toString(2));
// alert( num.toString(36));


// alert( 12345..toString(36) )  // 9ix


// let str = "232323qwewqe"

// alert(Number.isNaN(str))   



// console.log(Number(25 + "привет"));
// console.log(isNaN(25 + "привет"));


// console.log(isFinite("25"));
// console.log(isFinite("Привет!"));
// console.log(isFinite("10 / 0"));



// let value1 = parseInt("216.34px")
// console.log(value1);

// let value2 = parseFloat("216.34px")
// console.log(value2);




// let num1 = +prompt("Введите число 1", "")
// let num2 = +prompt("Введите число 2", "");
// let sumNum = num1 + num2
// alert(sumNum)


let roadNumber = function(){
    let num;
    do {
        num = prompt("Введите число", "")
        if(num === null || num === "" || isFinite(num)){
            alert("Это не число. Отмена")
            return;
        }
        
    } while(isNaN(num)){
        alert("Это число. Ура!")
        return num  
    }
    
}
    

roadNumber();















