
//     const item = {
//         title: "Phone",
//         fullPrice: 100,
//         calculatePrice(discountPercent = 0) {
//             console.log(this.fullPrice - discountPercent/100 * this.fullPrice);
//         }
//     }

// item.calculatePrice(10)


function calcDiscount(age) {
    if(age > 65) {
        console.log(this.price / 2);
    } else {
        console.log(this);
    }
}

const item = {title: "phone", price: 1000}

calcDiscount.call(item, 15);