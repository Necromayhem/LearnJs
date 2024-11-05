// написать свои методы для Array (push, map, forEach)
// customArray

// 1) push

Array.prototype.customArrayPush = function(...args){
    // проверка, явялется ли Array массивом
    if(!Array.isArray(this)){
        throw new TypeError("customArrayPush можно вызывать только для массивов");
    }

    // указать текущую длину массива
    let currLength = this.length;

    // добавить элементы в массив
    for(let i = 0; i < args.length; i++){
        this[currLength + i] = args[i];
    }

    // обновить длину массива
    this.length = currLength + args.length;

    // верннуть новую длину массива
    return this.length;
};

const arr = [1, 2, 3];
arr.customArrayPush(4, 5);
// console.log(arr); // [1, 2, 3, 4, 5]


// 2) map

Array.prototype.customArrayMap = function(func){
    // проверка, явялется ли Array массивом
    if(!Array.isArray(this)){
        throw new TypeError("customArrayMap можно вызывать только для массивов");
    }

    // создать новый массив на основе текущего
    const newArr = this;


    for(let i = 0; i < newArr.length; i++){
        newArr[i] = func(this[i]) // передать текущий элемент в функцию!!!
    }   // тут долго не понимал, что надо указать this

    return newArr;
  
};

const arr2 = [1, 2, 3];
// console.log(arr2.customArrayMap((num) => num * 2));


// 3) forEach

Array.prototype.customArrayForEach = function(func){
    // проверка, явялется ли Array массивом
    if(!Array.isArray(this)){
        throw new TypeError("customArrayForEach можно вызывать только для массивов");
    }

    const currArr = this;

    for(let i = 0; i < currArr.length; i++){
        currArr[i] = func(this[i]) // передать текущий элемент в функцию!!!
    } 

    // нет необходимости передавать что-то через return
  
};

const arr3 = [1, 2, 3];
arr3.customArrayForEach((num) => {
    console.log(num * 10); // 10, 20, 30
});





