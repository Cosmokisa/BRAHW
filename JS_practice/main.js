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

