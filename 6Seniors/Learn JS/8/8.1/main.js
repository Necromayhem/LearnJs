// Прототипное наследование

// Например, у нас есть объект user со своими свойствами и методами, и мы хотим создать объекты admin и guest как его слегка изменённые варианты. Мы хотели бы повторно использовать то, что есть у объекта user, не копировать/переопределять его методы, а просто создать новый объект на его основе.Прототипное наследование - это возмложность языка, которая помогает нам в этом.

// [[Prototype]]

// В JS объекты имеют специальное скрытое свойство [[Prototype]](так оно называется в спецификации), которое либо равно null, либо ссылается на другой объект. Этот объект называется "прототип".

let animal = {
    eats: true
};

let rabbit = {
    jumps: true
};

rabbit.__proto__ = animal; // устанавливает animal как прототип для rabbit

// console.log(rabbit.eats); // true
// console.log(rabbit);

// animal является прототипом rabbit или rabbit прототипно наследуется от animal.

// Так что если у animal много полезных свойств и методов, то они автоматически становятся доуступными у rabbit. Такие свойства называются "унаследованными"

// Если у нас есть метод в animal, он может быть вызван на rabbit:

let animal2 = {
    eats: true,
    walk(){
        console.log("Animal walk");
    }
};

let rabbit2 = {
    jumps: true,
    __proto__: animal2
};

// walk взят из прототипа
// rabbit2.walk() // Animal walk


// Цепочка прототипов может быть длиннее:

let animals = {
    eats: true,
    walk(){
        console.log("Animal walk");
    }
};

let rabbits = {
    jumps: true,
    __proto__: animals
};

let longEar = {
    earLength: 10,
    __proto__: rabbits
};

// console.log(longEar.jumps); // true , взят из rabbits
// console.log(longEar.walk()); // Animal walk
// console.log(longEar.eats); // true


// Цикл for...in проходит не только по собственным, но и по унаследованным свойствам объекта:

let user = {
    isAdmin: false,
    isGuest: true,
    onLine: true,
};

let person = {
    __proto__: user,
    name: "Alex",
    age: 27,
    city: "Krasnodar",
    job: "Support",
};

// console.log(Object.keys(person)); // ['name', 'age', 'city', 'job']
// for(let prop in person) console.log(prop); // вывел также свойства user

for (let [key, value] of Object.entries(person)) {
    console.log([key, value]);
};

let proto = Object.getPrototypeOf(person);
while(proto){
    for(let [key, value] of Object.entries(proto)) 
    console.log([key, value]);
        
    
    proto = Object.getPrototypeOf(proto); // переход к следующему прототипу, ссли длинная цепочка(в данном случае нет)
}

// Можно отфильтровать свойства при помощи метода obj.hasOwnProperty(key);он возвращает true, если у obj есть собственное, не унаследованное свойство, с именем key.

for(let prop in person){
    let isOwn = person.hasOwnProperty(prop);

    if(isOwn){
        console.log(`Свойство собственное: ${prop}`);
    } else{
        console.log(`Свойство прототипа: ${prop}`);
    }
}



let head = {
    glasses: 1
  };
  
  let table = {
    pen: 3
  };
  
  let bed = {
    sheet: 1,
    pillow: 2
  };
  
  let pockets = {
    money: 2000
  };

pockets.__proto__ = bed;
bed.__proto__ =  table;
table.__proto__ = head;

console.log(pockets.pen);
console.log(bed.glasses);




let hamster = {
    stomach: [],
  
    eat(food) {
      this.stomach = [food];
    }
  };
  
  let speedy = {
    __proto__: hamster
  };
  
  let lazy = {
    __proto__: hamster
  };
  
  // Этот хомяк нашёл еду
  speedy.eat("apple");
  alert( speedy.stomach ); // apple
  
  // У этого хомяка тоже есть еда. Почему? Исправьте
  alert( lazy.stomach ); // apple









