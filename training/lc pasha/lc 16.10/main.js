// * Дан массив билетов:
//    [
//         {from: 'Спб', to: 'Минск'},
//         {from: 'Киев', to: 'Новосибирск'},
//         {from: 'Череповец', to: 'Москва'},
//         {from: 'Минск', to: 'Киев'},
//         {from: 'Москва', to: 'Спб'},
//     ]
 
//    Нужно расположить их один за другим чтобы получился непрерывный маршрут:
//   [
//   { from: 'Череповец', to: 'Москва' },
//   { from: 'Москва', to: 'Спб' },
//   { from: 'Спб', to: 'Минск' },
//   { from: 'Минск', to: 'Киев' },
//   { from: 'Киев', to: 'Новосибирск' }
// ]
//  */
// const getRoute = (tickets) => {
//   // реализуй функцию getRoute
//   // сначала найти точку отправления, from у точки отправления не будет встречаться нигде в to у остальных эллементов 
// }

// console.log(
//   getRoute([
//         {from: 'Спб', to: 'Минск'},
//         {from: 'Киев', to: 'Новосибирск'},
//         {from: 'Череповец', to: 'Москва'},
//         {from: 'Минск', to: 'Киев'},
//         {from: 'Москва', to: 'Спб'},
//     ])
// );


function getRoute(tickets) {
    // Сначала находим все пункты отправления и назначения
    const fromCities = new Set(tickets.map(ticket => ticket.from));
    const toCities = new Set(tickets.map(ticket => ticket.to));
    
    // Находим точку отправления - это город, который есть в fromCities, но нет в toCities
    const startCity = [...fromCities].find(city => !toCities.has(city));
    
    // Строим маршрут начиная с точки отправления
    const route = [];
    let currentCity = startCity;

    while (currentCity) {
        const nextTicket = tickets.find(ticket => ticket.from === currentCity);
        if (nextTicket) {
            route.push(nextTicket);
            currentCity = nextTicket.to;
        } else {
            currentCity = null; // Если нет следующего направления, завершаем цикл
        }
    }

    return route;
};

console.log(
    getRoute([
        {from: 'Спб', to: 'Минск'},
        {from: 'Киев', to: 'Новосибирск'},
        {from: 'Череповец', to: 'Москва'},
        {from: 'Минск', to: 'Киев'},
        {from: 'Москва', to: 'Спб'},
    ])
);