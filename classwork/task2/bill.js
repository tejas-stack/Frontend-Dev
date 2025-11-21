// Task 2 : E-Commerce Order Processing (JS):
// Build a mini order-processing system in JavaScript that:
// Takes user input for product price, quantity, and delivery day number (1–7).
// Converts all inputs to numbers (type conversion).
// Uses a switch to convert the delivery number into a day name.
// Uses a for loop to compute the total price for the given quantity.
// Applies discounts:
// 2000 → 15%
// 1000–2000 → 10%
// else → 0%
// Displays the final bill.
// Uses try–catch for errors:
// Throw error if price/quantity is not a number.
// Throw error if delivery day is not 1–7.
// Include a debugger statement to inspect calculations.
document.getElementById("formdata").addEventListener("click", function(e) {
    e.preventDefault();
    const priceInput = document.getElementById("price").value;
    const quantityInput = document.getElementById("quantity").value;
    const deliveryDayInput = document.getElementById("deliveryDay").value;

})
function processOrder(priceInput, quantityInput, deliveryDayInput) {
    try {
        const price = Number(priceInput);
        const quantity = Number(quantityInput);
        const deliveryDay = Number(deliveryDayInput);
    } catch (error) {
        console.error("Error during type conversion:", error.message);
        return;
    }
    switch (deliveryDay) {
        case 1:
            dayName = "Monday";
            break;
        case 2:
            dayName = "Tuesday";
            break;
        case 3:
            dayName = "Wednesday";
            break;
        case 4:
            dayName = "Thursday";
            break;
        case 5:
            dayName = "Friday";
            break;
        case 6:
            dayName = "Saturday";
            break;
        case 7:
            dayName = "Sunday";
            break;
        default:
            throw new Error("Delivery day must be between 1 and 7.");
    }
    calculateTotal(price, quantity);
}

function calculateTotal(price, quantity) {
    let totalPrice = 0;
    for (let i = 0; i < quantity; i++) {
        totalPrice += price;
    }

    debugger;
    let discount = 0;
    if (totalPrice > 2000) {
        discount = 0.15;
    } else if (totalPrice >= 1000 && totalPrice <= 2000) {
        discount = 0.10;
    }
    const finalPrice = totalPrice - (totalPrice * discount);
    displayBill(finalPrice);
}

function displayBill(finalPrice) {
    console.log(`The final bill amount is: $${finalPrice.toFixed(2)}`);
}