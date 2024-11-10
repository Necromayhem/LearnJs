// Приватные и защищённые методы и свойства

// создание кофеварки:

class CoffeeMachine {
    waterAmount = 0; // количество воды внутри

    constructor(power){
        this.power = power;
        // console.log(`Создана кофеварка, мощность ${power}`);
    }
}

// создаём кофеваркуэ
let coffeeMachine = new CoffeeMachine(100);

// добавляем воды
coffeeMachine.waterAmount = 200;

// Прямо сейчас свойства waterAmount и power публичные. Мы можем лекго получать и устанавливать им любое значение извне.
// Давайте изменим свойство waterAmount на защищённое, чтобы иметь больше контроля над ним. Например, мы не хотим, чтобы кто-то устанавливал его ниже нуля.

// Защищённые свойства обычно начинаются с префикса _.
// Это не синтаксис языка: есть хорошо известное соглашение между программистами, что такие свойства и методы не должны быть доступны извне. Большинство программистов следует этому соглашению.

// Так что нашё свойство будет называться _waterAmount:

{
    class CoffeeMachine {
        _waterAmount = 0;

        set waterAmount(value){
            if(value < 0) throw new Error("Отрицательное значение воды");
            this._waterAmount = value;
        }

        get waterAmount(){
            return this._waterAmount
        }

        constructor(power){
            this._power = power;
        }
    }

    // создаём новую кофеварку
    let coffeeMachine = new CoffeeMachine(100);

    // устанавливаем количество воды
    // coffeeMachine.waterAmount = -10; // Error: Отрицательное значение воды
}


// Свойство только для чтения
// Давайте сделаем свойство power доступным только для чтения. Иногда нужно, чтобы свойство устанавливалось только при создании объекта и после этого никогда не изменялось.
// Это как раз требуется для кофеварки: мощность никогда не меняется.

// Для этого нужно создать только геттер, но не сеттер:

{
    class CoffeeMachine {
        //...

        constructor(power) {
            this._power = power;
        }

        get power(){
            return this._power;
        }
    }

    // создаём кофеварку
    let coffeeMachine = new CoffeeMachine(100);
    // console.log(`Мощность: ${coffeeMachine.power}W`); // Мощность: 100W
    coffeeMachine.power = 25; // // Error (no setter)
    // console.log(`Мощность: ${coffeeMachine.power}W`); // Мощность: 100W

}



// Приватное свойство #


{
    class CoffeeMachine {
        #waterLimit = 200;

        #checkWater(value){
            if(value < 0) throw new Error("Отрицательный уровень воды");
            if(value > this.#waterLimit) throw new Error("Слишком много воды");
        }
    }

    let coffeeMachine = new CoffeeMachine();

    // снаружи нет доступа к приватным методам класса
    // coffeeMachine.#checkWater(); // Error
    // coffeeMachine.#waterLimit = 1000; // Error    
}

// На уровне языка # является специальным символом, который означает, что поле приватное. Мы не можем получить к нему доступ извне или из наследуемых классов.

// Приватные поля не конфликтуют с публичными. У нас может быть два поля одновременно - приватное #waterAmount и публичное waterAmount.

// Например, давайте сделаем аксессор waterAmount для #waterAmount:

{
    class CoffeeMachine {
        #waterAmount = 0;

        get waterAmount(){
            return this.#waterAmount;
        }
        
        set waterAmount(value){
            if(value < 0) throw new Error("Отрицательный уровень воды");
            this.#waterAmount = value;
        }
    }

    let machine = new CoffeeMachine();

    machine.waterAmount = 100;
    // alert(machine.#waterAmount); // Error

    
}









