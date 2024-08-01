// Iterators
//----------------





let ages = {

    alex: 26,
    boris: 32,
    ivan: 21,
    oleg: 44,
    anna: 53,
    egor: 19,
    irina: 29,
    maria: 27,
    anton: 38,
    sveta: 35,
    alla: 25,
    nikita: 14,
    misha: 18,
};

ages[Symbol.iterator] = function(){
    let entries = Object.entries(this);
    let index = 0;
    return {
        next() {
            while (index < entries.length) {
                let [name, age] = entries[index++];
                if (age >= 20) {
                    return {
                        done: false,
                        value: { name, age }
                    };
                }
            }
            return {
                done: true
            };
        }
    };
}



let filteredAges = []; // пушу в массив

for(let person of ages){
    // console.log(person);
    filteredAges.push(person);
}

console.log(filteredAges); // массив из объектов

let people = filteredAges.map(person => [person.name, person.age]);
console.log(people); // массив массивов




// 2) вариант без итератора


let filteredEntries = Object.entries(ages).filter(([name, age]) => age >= 20)

console.log(filteredEntries); // массив из массивов










