const num_one = +prompt("Please, enter a number");
const num_two = +prompt("Please enter a number");
if (isNaN(num_one) || isNaN(num_two)){
    alert("Please enter a number");
} else {
    const operation = prompt("Please, choose an operation (+, -, *, /).");
    switch (operation) {
        case
            "+"
        :
            console.log(`The answer is ${num_one + num_two}`);
            break;
        case
            "*"
        :
            console.log(`The answer is ${num_one * num_two}`);
            break;
        case
            "/"
        :
            if (num_two === 0) {
                alert("Division by zero is not allowed!");
                break;
            }
            console.log(`The answer is ${num_one / num_two}`);
            break;
        case
            "-"
        :
            console.log(`The answer is ${num_one - num_two}`);
            break;
        default:
            console.log("You didn't provide a valid number!");
        }
}