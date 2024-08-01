
// arr2 = []

// // console.log(arr1 === arr2);
// // console.log(arr1 == arr2);

//     arr1 = [1,2,3,4]

// // console.log(arr1.reduce((acc, item) => acc + item));
// arr1.forEach((item) => console.log(item + 1));



// const arr = [1, 2, 3, 4];
// const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

// console.log(sum);




const myMap = new WeakMap();

let obj = {
    name: 'alex'
}

myMap.set(obj, 123)
obj = null;

console.log(myMap);





