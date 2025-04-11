// 1. Create an object that describes a car (manufacturer, model, year of release, average speed) and the following methods for working with this object:

// A method that displays the car info
// A method for counting a time frame necessary to cover a given distance with the average speed. Note that every 4 hours the driver has to take a 1-hour break.
const car = {
    manufacturer: "Chevrolet",
    model: "Impala",
    yearOfRelease: 1967,
    averageSpeed: 110,
    displayInfo() {
        Object.entries(this).forEach(([key, value]) => {
            if (typeof value !== "function") {
                console.log(`${key}: ${value}`);
            }
        })
    },
    timeNeeded (distance) {
        let timeToBeThere = distance / this.averageSpeed;
        let breakNeeded = Math.floor(timeToBeThere /4);
        let totalTime = timeToBeThere + breakNeeded;
        if (breakNeeded >= 1) {
            console.log(`It will take you ${totalTime.toFixed(2)} hours and ${breakNeeded} breaks to get there!`);
        } else {
            console.log(`It will take you ${timeToBeThere.toFixed(2)} hours to get there!`);
        }


    }
}

car.displayInfo();
car.timeNeeded(500);
car.timeNeeded(1000);
car.timeNeeded(400);


// 2.Create an object that describes time (hours, minutes, seconds), and the following methods for working with this object:

// A method for displaying the time.
// A method for changing the time by a given amount of seconds.
// A method for changing the time by a given amount of minutes.
// A method for changing the time by a given amount of hours.

// Note that in the last three methods changing one part may influence another. For example, if we add 30 seconds to «20:30:45», we should get «20:31:15», not «20:30:75».

const clock = {
    _hours: "10",
    _minutes: "22",
    _seconds: "10",
    get time () {
        return `It is ${this._hours}:${this._minutes}:${this._seconds}.`;
    },
    seconds (item) {
        // let numSeconds = +this._seconds;  //convert the seconds to number
        // let numMinutes = +this._minutes;  // convert minutes to a number
        //
        // let totalSeconds = numSeconds + item;
        //
        // if (totalSeconds > 59) {
        //     let minutesToAdd = Math.floor(totalSeconds / 60);  // counts how much minutes it will need to add
        //     let secondsToAdd = totalSeconds % 60;  // counts how much seconds it will need to add
        //
        //     this._seconds = secondsToAdd.toString().padStart(2, "0");   // convert the seconds to string
        //     this._minutes = (numMinutes + minutesToAdd).toString().padStart(2, "0"); // convert the minutes to string
        // } else {
        //     this._seconds = totalSeconds.toString().padStart(2, "0");  // convert the seconds to string
        // }

        let totalSeconds =  (this._hours * 3600) + (+this._minutes * 60) + (+this._seconds) + item; // convert (hall time + item) to seconds

        let newHours = +this._hours;  // hours stays the same
        let newMinutes =  Math.floor((totalSeconds - (newHours * 3600 )) / 60);  // calculates minutes
        if (newMinutes > 59) {   // if minutes > 59 = hours++
            newHours++;
            newMinutes = Math.floor(newMinutes % 60); // adds remaining min to time
        }
        let newSeconds = (totalSeconds - (newHours * 3600 ) - (newMinutes * 60));  //calculate seconds
        if (newSeconds > 59) {
            newMinutes++;
        }

        this._hours = newHours.toString().padStart(2, '0');   // convert hours to string
        this._minutes = newMinutes.toString().padStart(2, '0');  // convert minutes to string
        this._seconds = newSeconds.toString().padStart(2, '0');  // convert seconds to string
    },
    minutes (item) {
        let totalMinutes = (+this._hours * 60) + (+this._minutes) + item;

        let newHours = Math.floor(totalMinutes / 60);
        let newMinutes = totalMinutes - (newHours * 60);
        if (newMinutes > 59) {
            newHours++;
            newMinutes = newMinutes % 60;
        }

        this._hours = newHours.toString().padStart(2, '0');
        this._minutes = newMinutes.toString().padStart(2, '0');
    },
    hours (item) {
        let hoursMoreThan24 = (+this._hours + item) % 24;
        let hoursLessThan24 = +this._hours + item;

        if ((+this._hours + item) <= 24) {
            this._hours = hoursLessThan24.toString().padStart(2, '0');
        } else {
            this._hours = hoursMoreThan24.toString().padStart(2, '0');
        }
    }
}

// A method for changing the time by a given amount of seconds.
// console.log(clock.time);
// clock.seconds(40); // 10:22:50
// console.log(clock.time);
// clock.seconds(108);  // 10:23:58
// console.log(clock.time);
// clock.seconds(250);  // 10:26:20
// console.log(clock.time);
// clock.seconds(5076); // 11:46:46
// console.log(clock.time);

// A method for changing the time by a given amount of minutes.
// console.log(clock.time);
// clock.minutes(47);  // 11:09:10
// console.log(clock.time);
// clock.minutes(398);   //17:00:00
// console.log(clock.time);

// A method for changing the time by a given amount of hours.
console.log(clock.time);
// clock.hours(14);  //24:22:10
// console.log(clock.time);
// clock.hours(28); // 14:22:10
// console.log(clock.time);
clock.hours(8);
console.log(clock.time);  //18:22:10
