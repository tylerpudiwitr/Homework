const pizzaPlace = "Tyler's Pi";
let numberOfToppings = 3;

console.log(pizzaPlace);
console.log(typeof pizzaPlace);
console.log(numberOfToppings);
console.log(typeof numberOfToppings);

console.log("At " + pizzaPlace + " we have " + numberOfToppings + " toppings.");
if (numberOfToppings < 10) {
    console.log("Quality, not quantity.");
} else {
    console.log("A whole lot of pizza.");
}

//Bonus 
for (let i = 0; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}