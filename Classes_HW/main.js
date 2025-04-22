/*
1) Implement a class that describes a circle. It must have the following components:

a field that stores the radius of the circle;
get-property that returns the radius of the circle;
set-property that sets the radius of the circle;
get-property that returns the diameter of the circle;
a method that calculates the area of a circle;
a method that calculates the length of the circle
Demonstrate the work of properties and methods.
*/


class Circle {
    constructor(radius) {
        this._radius = radius;
    }

    get radius() {
        return this._radius;
    }

    set radius(radius) {
        this._radius = radius;
    }

    get diameterOfTheCircle() {
        return this._radius * 2;
    }

    area() {
        const areaOfACircle = Math.PI * (this._radius ** 2);
        return areaOfACircle.toFixed(2);
    }

    length() {
        const lengthOfACircle = Math.PI * (this._radius * 2);
        return lengthOfACircle.toFixed(2);
    }
}

const circle25 = new Circle(25);

console.log(circle25.radius); //25
console.log(circle25.diameterOfTheCircle);  //50
console.log(circle25.area()); //1963.50
console.log(circle25.length()); //157.08

const circle100 = new Circle(100);

console.log(circle100.radius); //100
console.log(circle100.diameterOfTheCircle); //200
console.log(circle100.area());  //31415.93
console.log(circle100.length()); //628.32

/*
2) Implement a class that describes a stationery marker. It must have the following components:

a field that stores the color of the marker;
a field that stores the amount of ink in the marker (in percent);
an input method (accepts a string and prints the text in the corresponding color; the text is displayed as long as there is ink in the marker; one non-whitespace character is 0.5% of the ink in the marker).
Implement a class that describes a refillable marker. Inherit this class from a simple marker and add a method for refilling.
*/

const allowedColors = { //my marker has 3 options for colors
    red: "\x1b[31m",
    green: "\x1b[32m",
    blue: "\x1b[34m",
    reset: "\x1b[0m"
}

const StationaryMarker = class {
    constructor(color, amountOfInk = 100) {
        this.color = color;
        if (allowedColors[color]) {  // if (Object.keys(this.allowedColors).includes(color))  // I'm using bracket notation to check if there is the same color
            this.color = color;
        } else {
            console.log(`${color} is not allowed! Defaulting to red.`);
            this.color = "red";
        }
        this.amountOfInk = amountOfInk;
    }

    printColoredText(text) {
        const inkPerCharacter = 0.5;
        let printedText = "";
        for (let character of text) { // loop through the text

            if (character !== " ") {  //if characters are letters
                if (this.amountOfInk > inkPerCharacter) {
                    this.amountOfInk -= inkPerCharacter; // -0,5 ink for each letter
                    printedText += character; //print letters
                } else {
                    console.log("The marker is out of ink!");
                    break;
                }
            } else {
                printedText += character;
            }
        }
        const colorCode = allowedColors[this.color]; //variable for color
        const resetCode = allowedColors.reset;  // variable for resetting the color
        console.log(colorCode + printedText + resetCode); //string concatenation
    }
}

const redMarker = new StationaryMarker("yellow", 10);
redMarker.printColoredText("Hello World!");

const greenMarker = new StationaryMarker("green", 30);
greenMarker.printColoredText("The output color of the console can be modified via JavaScript using ANSI escape codes."); // The marker is out of ink! and The output color of the console can be modified via JavaScript using AN

class RefillableMarker extends StationaryMarker {
    constructor(color, amountOfInk) {
        super(color, amountOfInk);
    }

    refill(amount) {
        if (amount > 0) {
            this.amountOfInk = Math.min(100, this.amountOfInk + amount);
            console.log(`Marker refilled! New ink level: ${this.amountOfInk}%`);
        } else {
            console.log("Cannot refill with non-positive value.");
        }
    }
}


const refiller = new RefillableMarker("green", 20);
refiller.printColoredText("Test");
refiller.refill(50); // Adds ink
refiller.printColoredText("Again!");

/*
3) Implement the Employee class that describes the employee and create an array of bank employees.

Implement the EmpTable class to generate HTML code for a table with a list of bank employees. The array of employees must be passed through the constructor and get the HTML code using the getHtml () method.

Create an object of class EmpTable and display the result of the getHtml () method.
*/

function Employee(name, position, email) {
    this.name = name;
    this.position = position;
    this.email = email;
}

const employeeA = new Employee("Galq", "Banker", "GalqDaiKartu@gmail.com");
const employeeB = new Employee("Masha", "Mortgage consultant", "Mortgageonsultant@gmail.com");
const employeeC = new Employee("Vasq", "Credit analyst", "HelpingBroke@gmail.com");

const bankEmployees = [employeeA, employeeB, employeeC];

function EmpTable (bankEmployees) {
    this.bankEmployees = bankEmployees;
    this.getHTML = () => {
        const table = document.createElement("table");
        const headersRow = document.createElement("tr");

        for ( let key of Object.keys(bankEmployees[0])) {
            const tableHead = document.createElement("th");
            tableHead.textContent = key;
            headersRow.appendChild(tableHead);
        }
        // const nameHeader = document.createElement("th");
        // nameHeader.textContent = "name";
        // const positionHeader = document.createElement("th");
        // positionHeader.textContent = "position";
        // const emailHeader = document.createElement("th");
        // emailHeader.textContent = "email";

        // headersRow.appendChild(nameHeader);
        // headersRow.appendChild(positionHeader);
        // headersRow.appendChild(emailHeader);
        table.appendChild(headersRow);

        for (let item of bankEmployees) {
            const employeeRow = document.createElement("tr");
            for (let key of Object.keys(bankEmployees[0])) {
                const dataCell = document.createElement("td");
                dataCell.textContent = item[key];
                employeeRow.appendChild(dataCell);
            }

            // const nameDataCell = document.createElement("td");
            // nameDataCell.textContent = item.name;
            // const positionDataCell = document.createElement("td");
            // positionDataCell.textContent = item.position;
            // const emailDataCell = document.createElement("td");
            // emailDataCell.textContent = item.email;
            //
            // employeeRow.appendChild(nameDataCell);
            // employeeRow.appendChild(positionDataCell);
            // employeeRow.appendChild(emailDataCell);

            table.appendChild(employeeRow);

        }
        document.body.append(table);
    }
}

const employeeTable = new EmpTable(bankEmployees);
employeeTable.getHTML();