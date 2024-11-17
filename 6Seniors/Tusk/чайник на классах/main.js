// чайник



class Kettle{
    _waterAmount = 0; // текущий уровень воды
    #waterLimit = 2000; // макс. уровень воды
    _incluse = false; // состояние работы

    // добавить воды
    set waterAmount(value){ 
        if(value <= 0) throw new Error (`Отрицательный уровень воды`);
        if(value > this.#waterLimit) throw new Error (`Слишком много воды`);
        this._waterAmount = value;
    };

    // узнать текущий уровень воды
    get waterAmount() {
        return this._waterAmount;
      }

    // вкл/выкл
    inclusion(){
        if(this._waterAmount === 0) throw new Error (`Нет воды`);

        this._incluse = !this._incluse;
        
        if(this._incluse === true){
            setTimeout(() => {
                this._incluse = false; // выключение после кипения
                console.log(`Чайник закипел`)
            }, 5000);
        };

        if(this._incluse === true) return `Чайник нагревается` // Возвращаем текущее состояние
    }
};

const kettle = new Kettle();
kettle.waterAmount = 1000;
console.log(kettle.inclusion());


    