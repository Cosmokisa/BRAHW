/*
Create the Array: Start with an array named groceriesList. Each item is an object with properties:
name (string)
amount (number)
bought (boolean, false initially)
Add a few sample items to your list.
*/

const groceriesList = [{
    name: "Apple",
    amount: 6,
    bought: false
}, {
    name: "Banana",
    amount: 3,
    bought: true
}, {
    name: "Eggs",
    amount: 10,
    bought: false
}, {
    name: "Bread",
    amount: 1,
    bought: true
}, ];

// Functions:
// displayGroceries():
// addItem(name, amount):
// purchaseItem(name):


// Prints the list to the console.
const displayGroceries = () => {
        groceriesList.sort( (a, b) => a.bought - b.bought);
        console.log(groceriesList);
        // for (let i = 0; i <= groceriesList.length; i++ ) {
        //     console.log(groceriesList[i]);
        // }
        // for (let item of groceriesList) {
        //     console.log(item.name);
        // }
    }

displayGroceries();

// Adds a new item or increases the quantity if it already exists.
const addItem = (name, amount) => {
    // for (let item of groceriesList) {
    //     if (item.name === name) {
    //         item.amount += amount;
    //         return;
    //     }
    // }
    let existedNameIndex = groceriesList.findIndex(item => item.name === name);
    if (existedNameIndex !== -1) {
        groceriesList[existedNameIndex].amount += amount;
        return;
    }
    groceriesList.push({
        name: name,
        amount: amount,
        bought: false,
    })
}

addItem("Water", 2);
addItem("Apple", 2);
addItem("Beer", 3);

// Marks an item as bought.
// Challenge: Sort so unbought items appear first.
const purchaseItem = (name) => {
    for (let item of groceriesList) {
        if (item.name === name) {
            item.bought = true;
            return
        }
    }
}

purchaseItem("Apple");
purchaseItem("Eggs");


/*
Create the Array: Name it shoppingReceipt. Each item is an object with:
name (string)
amount (number)
pricePerItem (number)
*/

const shoppingReceipt = [{
    name: "Potato",
    amount: 2,
    pricePerItem: 7.50
}, {
    name: "Salad",
    amount: 1,
    pricePerItem: 10.83
}, {
    name: "Coffee",
    amount: 2,
    pricePerItem: 3.27
}, {
    name: "Bread",
    amount: 4,
    pricePerItem: 1.32
}];


// Functions:
// printReceipt():
// calculateTotal():
// findMostExpensiveItem():
// calculateAveragePrice():


// Returns the total cost of the purchase.
const calculateTotal = () => {
    // let total = 0;
    // for (let item of shoppingReceipt) {
    //     total += item.pricePerItem * item.amount;
    // }
    // return total;
    return shoppingReceipt.reduce( (sum, item) => {
            return sum + (item.pricePerItem * item.amount);
        }
        , 0)
}

calculateTotal().toFixed(2);


//Returns the object representing the most expensive item.
const findMostExpensiveItem = () => {
    let highestPrice = 0;
    let highestPriceIndex = 0;
    for (let index in shoppingReceipt) {
        if (highestPrice < shoppingReceipt[index].pricePerItem) {
            highestPrice = shoppingReceipt[index].pricePerItem;
            highestPriceIndex = index;
        }
    }

    return shoppingReceipt[highestPriceIndex].name;
    // return shoppingReceipt.reduce((mostExpensive, item) => {
    //     return item.pricePerItem > mostExpensive.pricePerItem ? item : mostExpensive;
    // })
}

findMostExpensiveItem();

//Returns the average price per item on the receipt.
const calculateAveragePrice = () => {
    // let totalAmount = 0;
    // for (let item of shoppingReceipt) {
    //     totalAmount += item.pricePerItem;
    // }
    // return totalAmount / shoppingReceipt.length;
    let totalAmount = shoppingReceipt.reduce((sum, item) => {
        return sum + item.pricePerItem;
    }, 0);
    return totalAmount / shoppingReceipt.length;

}

calculateAveragePrice();

// Nicely formats and prints the receipt to the console.

const printNicely = () => {
    for (let item of shoppingReceipt) {
        console.log(`Item: ${item.name}, Amount: ${item.amount}, Price: $${item.pricePerItem.toFixed(2)}`);
    }
}

// const printReceipt = () => {
//     console.log("Here is your receipt:");
//     printNicely();
//     console.log(`
//     Total: ${calculateTotal().toFixed(2)},
//     Average: ${calculateAveragePrice().toFixed(2)},
//     Most expensive item: ${findMostExpensiveItem()}`);
// }

const printReceipt = () => {
    console.log("Receipt:");
    printNicely();
    console.log(`
--------------------------
Total: $${calculateTotal().toFixed(2)}
Average item price: $${calculateAveragePrice().toFixed(2)}
Most expensive item: ${findMostExpensiveItem()}
--------------------------`);
};

printReceipt();

