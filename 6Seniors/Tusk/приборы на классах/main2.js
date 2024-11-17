// тостер

class Toaster{
    _incluse = false; // состояние работы
    #power = 0; // температура

    // инструкция
    getInfo(){
        return `                
            Режимы:
            1. Низкая температура(Low)
            2. Средняя температура (Medium)
            3. Высокая температура (High)
            4. Размораживание (Defrost)
            5. Разогрев (Reheat)`
    }

    startToasting(power, message) {
        this._incluse = true;
        this.#power = power;
        console.log(message);
        setTimeout(() => {
            console.log(`Тост готов!`);
            this._incluse = false; // автовыкл
        }, 5000);
    }

    inclusion(pow) {
        switch (pow) {
            case 1:
                this.startToasting(150, "Тост готовится при температуре 150 градусов.");
                break;
            case 2:
                this.startToasting(180, "Тост готовится при температуре 180 градусов.");
                break;
            case 3:
                this.startToasting(220, "Тост готовится при температуре 220 градусов.");
                break;
            case 4:
                this.startToasting(50, "Тост размораживается при температуре 50 градусов.");
                break;
            case 5:
                this.startToasting(75, "Тост разогревается при температуре 75 градусов.");
                break;
            default:
                console.log("Укажите режим от 1 до 5");
                break;
        }
    }
};

const toaster = new Toaster();
// console.log(toaster.getInfo());
// toaster.inclusion(3)










