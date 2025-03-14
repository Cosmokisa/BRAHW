
// 1. Ask the user for their age and determine whether they are a child (0-11), teenager (12-17), adult (18_59), or pensioner (60...), and allow for the possibility of entering incorrect data.

const age = +prompt("What is your age?");

if (age !== age || age <= 0 || age >= 120) {
    console.log("Your input is incorrect.");
} else if (age > 0 && age <= 11) {
    console.log("You are a child!");
} else if (age >= 12 && age <= 17) {
    console.log("You are a teenager!");
} else if (age >= 18 && age <= 59) {
    console.log("You are an adult!");
} else {
    console.log("You are a pensioner!");
}

// 2. Ask the user for a number from 0 to 9 and display the special character that is located on this key (1 !, 2 @, 3 #, etc.).

const number = +prompt("Enter a one-digit number:");

if (number < 0 || number > 9) {
    console.log("Not a valid digit.");
} else {
    let symbol = "";
    for (let i = 0; i <= 9; i++) {
        if (number === i) {
            switch (i) {
                case 0: symbol = ")"; break;
                case 1: symbol = "!"; break;
                case 2: symbol = "@"; break;
                case 3: symbol = "#"; break;
                case 4: symbol = "$"; break;
                case 5: symbol = "%"; break;
                case 6: symbol = "^"; break;
                case 7: symbol = "&"; break;
                case 8: symbol = "*"; break;
                case 9: symbol = "("; break;
            }
        }
    }
    console.log(symbol);
}

// 3.  Game “Guess the number”. Ask the user to guess a number from 0 to 100 and guess it in the following way: each iteration of the loop, divide the range of numbers in half, write the result in N and ask the user “Is your number > N, <N or == N?”. Depending on what the user says, reduce the range. The initial range is from 0 to 100, divide it in half and get 50. If the user has indicated that their number is > 50, then change the range to 50 to 100. And so on until the user selects == N (it will be useful to read about the algorithm: “binary search”).

let min = 0;
let max = 100;
let guessed = false;

while (!guessed) {
    let middlePoint = Math.floor((min + max) / 2);
    const sign = prompt(`Is your number > ${middlePoint}, < ${middlePoint}, or = ${middlePoint}?`);

    switch (sign) {
        case ">":
            min = middlePoint + 1;
            break;
        case "<":
            max = middlePoint - 1;
            break;
        case "=":
            console.log(`Your number is ${middlePoint}!`);
            guessed = true;
            break;
        default:
            console.log("Invalid input! Please enter '>', '<', or '='.");
    }
}