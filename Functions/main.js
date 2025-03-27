// 1. Write all possible variants of creating functions.

// Function declaration, hoisted function
// Checks if number is positive, negative or zero
console.log(check(3)); // Positive
console.log(check(-4)); // Negative
console.log(check(0));  // It's a zero

function check (a) {
    if (a > 0) {
        return "Positive";
    } else if (a < 0) {
        return "Negative";
    } else {
        return " It's a zero";
    }
}

// Function expression
// Checks if the number is even or odd or zero
const checkEvenOrOdd = function(b) {
    if (b === 0) {
        return "Zero";
    } else if (b % 2 === 0) {
        return "Even";
    } else if (b % 2 === 1) {
        return "Odd";
    } else {
        return "Not a number";
    }
}

console.log(checkEvenOrOdd(0)); // Zero
console.log(checkEvenOrOdd(1)); // Odd
console.log(checkEvenOrOdd(2)); // Even

// Arrow function
// Convert Fahrenheit to Celsius
const degreesC = (f) => (f - 32) / 1.8000;

console.log(degreesC(59)); // 15
console.log(degreesC(76)); // 24.444444444444443

// IIFE Immediately Invoked Function Execution
// Print multiples of a number
(function (c){
    for (let n = 0; n <= 10; n++){
        console.log(c * n);
    }
})(3);

//  Prints the numbers from 0 to 20 and tells if it's odd or even
(function() {
    for (let e = 0; e <= 20; e++) {
        if (e === 0 ) {
            console.log("Zero")
        } else if (e % 2 === 0) {
            console.log(`The ${e} number is even.`)
        } else {
            console.log(`The ${e} number is odd.`);
        }
    }
})(2);

// 2. Create a function that will print the number of arguments passed to it.
(function(e) {console.log(e)})(5);

// 3. Write a function that takes 2 numbers and returns:
// -1, if the first number is less than the second;
// 1 - if the first number is greater than the second;
// 0 - if the numbers are equal.

const checksNumbers = function (a, b) {
    if (a === b) {
        return 0;
    } else if (a < b) {
        return -1;
    } else {
        return 1;
    }
}

console.log(checksNumbers(3 , 4)); // -1
console.log(checksNumbers(5, 2));  // 1
console.log(checksNumbers(3, 3));  // 0

// 4. Write a function that takes three separate digits and converts them into one number. For example: the digits 1, 4, 9 will be converted to the number 149.

const threeDigits = function (a, b, c) {
    return `${a}${b}${c}`;
}

console.log(threeDigits(3, 4, 5)); // 345

// 5. Write a function that takes the length and width of a rectangle and calculates its area. If you pass 1 parameter to the function, it calculates the area of the square

const rect = function (a, b) {
    if (b === undefined) {
        return a * a;
    } else {
        return a * b;
    }
}

console.log(rect(5)); // 25
console.log(rect(5, 7)); // 35
console.log(rect(9)) // 81