// NW for Introduction to JS

/*

// 1st Request a user’s name and display the response “Hello, [name]”.

let name = prompt("What is your name?") ;// Asks the user their name
console.log(name);
alert(`Hello, ${name}!`); // Greets the user

// 2nd Request a user’s year of birth, count his age, and display the result. Store the current year as a constant.

let yearOfBirth = prompt('What year were you born?'); // Asks the year of birth
console.log(yearOfBirth);
const current = 2025; // Define the current year
let age = current - yearOfBirth ; // Math
console.log(age);
alert(`You are ${age} years old!`); // Shows the current age

// 3rd Request a length of a side of a square from a user and display the perimeter of the square.

let oneSide = prompt('What is the length of one side of the square in cm?'); //Asking what is the length of the one side of the square
console.log(oneSide);
let perimeter = oneSide * 4;
console.log(perimeter);
alert(` The perimeter of the square is ${perimeter} cm.`);

// 4th Request a distance in km between the two cities from a user, and the time they want to cover it within. Count the speed needed to be on time.

let distance = prompt('What is the distance between your current and desired location in km?');
console.log(distance);
let time = prompt(' How much time do you want to take to cover that distance?');
console.log(time);
let speed = distance / time ;
console.log(speed);
alert(`You need to maintain a speed of ${speed} km/h to arrive on time.`);

// 5th A user states a flash drive memory in GB. The program has to count how many 820MB files can be stored on this flash drive.

let megaBite; // Creating the MB variable
megaBite = 1;
let gigaBite;  // Creating a GB variable
gigaBite = megaBite * 1000 ; // There are 1000 MB in one BG

let fleshDriveMemory = prompt('What is the storage capacity of your flash drive in GB?'); // Asks about flesh drive memory in GB
let userDriveMemory = fleshDriveMemory * gigaBite;  // Defines that this number need to be * by 1000

let oneFile = megaBite * 820; // one file
let resultQuantity = userDriveMemory / oneFile; // Divide the user GB by 820
let filesQuantity = Math.trunc(resultQuantity); // Eliminate the decimal
alert(`You can save ${filesQuantity} files on this flash drive!`); // Shows us the answer

// 6th A user types in an amount of money in a wallet and the price of one chocolate bar. The program counts how many chocolate bars the user can buy, and how much change will he/she have left.

let cash = prompt('How much money do you have in your wallet?'); // Var for cash
console.log(cash);
let chocolateBar = prompt('What is the price of one chocolate bar?'); // Var for choc bar
console.log(chocolateBar);
let result = cash / chocolateBar; // Divide
console.log(result);
let chocolateBarQuantity = Math.trunc(result); // Whole number
console.log(chocolateBarQuantity);
let cashLeft = result - chocolateBarQuantity; // The decimal
console.log(cashLeft);

alert(`Chocolate Bars: ${chocolateBarQuantity}\nCash Left: ${cashLeft}`);

// 7th The user types in a sum of bank deposits for 2 months with a yearly interest rate of 5%. The program counts the sum of interest

let sum = prompt('What is the sum of your deposits for 2 months?'); // Asks sum of the 2 months deposits
console.log(sum);
let percentage = 5;
let percentageDecimalForm = percentage / 100;  // Convert percentages to decimal form
const month = 1;
const year = 12;
let twoMonthsFraction = (2 * month) / year;  // Defines the year fraction
let interestTwoMonths = percentageDecimalForm * twoMonthsFraction;  // Count the sum of interest for two months
let sumOfInterest = sum * (1 + interestTwoMonths);
console.log(sumOfInterest);
alert(`Your deposit for 2 months at a yearly interest rate of 5% will earn ${interestTwoMonths} in interest. The total amount after interest is ${sumOfInterest}.`);

*/

// HW for Data types and operators. Pt 1

// Request a three-digit number from a user and check whether it has identical digits.
/*
let number = +prompt('Please insert three-digit number.');
console.log(number);
let first = Math.floor(number / 100);
console.log(first);
let second = Math.floor((number / 10) % 10);
console.log(second);
let third = number % 10;
console.log(third);
if (first === second) {
    console.log("First number is the same as the second one!");
} else if ( first === third) {
    console.log("First number is the same as the third one!");
} else if (second === third) {
    console.log("Second and the third numbers are identical!");
} else {
    console.log("The inserted number does not have identical digits!");
}
*/

// Execute a currency converter. A user puts in USD, chooses a currency (EUR, SEK, AUD, etc.) and gets the result.
/*
let USD = +prompt("Please enter the amount in USD.");
console.log(USD);
let desiredCurrency = prompt("Please select the currency (EUR, UAH, GBP) to which you would like to convert your funds and enter its corresponding abbreviation.");
console.log(desiredCurrency);
let EUR = USD * 0.92;
let UAH = USD * 41.3;
let GBP = USD * 0.7;
if (desiredCurrency === "EUR") {
console.log(EUR);
} else if (desiredCurrency === "UAH" ) {
    console.log(UAH);
} else if ( desiredCurrency === "GBP") {
    console.log(GBP);
}
*/

// Request a date (dd:mm:yy) and put out the one that goes after it. Pay attention to the start of a new month, a new year, and also leap years.
/*
let dateMonthYear = prompt("Please, insert date in following format (dd:mm:yy).");
    console.log(dateMonthYear);
let d1 = +dateMonthYear[0];
let d2 = +dateMonthYear[1];
let m1 = +dateMonthYear[3];
let m2 = +dateMonthYear[4];
let y1 = +dateMonthYear[6];
let y2 = +dateMonthYear[7];

// Convert numbers to a date
let day = d1 * 10 + d2;
let month = m1 * 10 + m2;
let year = y1 * 10 + y2 ;

year += 2000;

let isLeap = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

// how many days in the month
let daysInMonth = 31;
if (month === 4 || month === 6 || month === 9 || month === 11) {
    daysInMonth = 30;
} else if (month === 2) {
    daysInMonth = isLeap ? 29 : 28;
}

day++;

if (day > daysInMonth) {
    day = 1;
    month++;
}

if (month > 12) {
    month = 1;
    year++
}

// Convert back to two-digit
year %= 100; //year = year % 100;

// Convert numbers back to string format with leading zeros
let newD1 = Math.floor(day / 10), newD2 = day % 10;
let newM1 = Math.floor(month / 10), newM2 = month % 10;
let newY1 = Math.floor(year / 10), newY2 = year % 10;

// Construct the next date string manually
let nextDate = `${newD1}${newD2}:${newM1}${newM2}:${newY1}${newY2}`;

// Output the result
console.log("Next date:", nextDate);
*/































