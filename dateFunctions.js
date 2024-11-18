// dateFunctions.js

// Challenge 1: Calculate Days Since
// Given an array of objects with `startDate` properties as strings (e.g., "2023-01-01"),
// map through each array index and calculate the number of days since each date. Use `Date` objects, subtraction for
// date difference, and `Math.floor` to round to whole days.
function calculateDaysSince(datesArray) {
    datesArray.map((object) => {
        let start = new Date(object.startDate); // date from array in milliseconds
        let today = new Date(); // today's date in milliseconds
        if (start == false || today == false) {
            return NaN;
        }
        let difference = today - start; // calc difference in milliseconds
        return daysSince = [Math.floor(difference / (1000 * 60 * 60 * 24))];
    });
    return daysSince;
}

// Successful console.log test below!
// let start = new Date("2023-01-01"); // date from array in milliseconds
// let today = Date.now(); // today's date in milliseconds
// let difference = today - start; // calc difference in milliseconds
// console.log(Math.floor(difference / (1000 * 60 * 60 * 24)));

// Challenge 2: Filter Recent Dates
// Given an array of date strings, return only the dates within the past 30 days.
// Use `Date` object and the `filter` array method to find dates between 30 days ago and today.



// Challenge 3: Get Month Names
// Given an array of `Date` objects, return an array of month names for each date.
// Use `getMonth` method to get the month index and map it to a month name array.
function getMonthNames(datesArray) {
    if (!(Array.isArray(datesArray))) {
        return 'Input is not an array.';
    }
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let newArray = [];
    datesArray.map((date, place) => {
        if (Object.prototype.toString.call(date) === '[object Date]') {
            let monthNum = date.getMonth();
            newArray[place] = monthNames[monthNum];
        } else {
            newArray[place] = 'Invalid Date';
        }
    })
    return newArray;
}

// Test helpers below
// const datesArray = [
//     new Date(2024, -2, 12), 
//     new Date(2024, 7, 20)
//   ];
// console.log(getMonthNames(datesArray));

// Challenge 4: Sort Dates in Ascending Order
// Given an array of `Date` objects, return a new array sorted in ascending order.
// Use `sort` method to arrange dates by time.

function sortDatesAscending(datesArray) {
    if (!(Array.isArray(datesArray))) {
        return 'Input is not an array.';
    }
    newArray = [];
    datesArray.map((date, index) => {
        if (Object.prototype.toString.call(date) === '[object Date]') {
            let timestamp = Date.parse(date);
            newArray[index] = timestamp;
        }
    })
    let sortedTimestamps = newArray.sort();
    finalArray = [];
    for (i = 0; i < sortedTimestamps.length; i++) {
        sortedTimestamps[i] = new Date(sortedTimestamps[i]);
        finalArray[i] = sortedTimestamps[i].toString();
    }
    return finalArray;
    
}

// Test helpers below - successful console.log!
// const datesArray = [
//     new Date(2024, 0, 15),  // January 15, 2024
//     new Date(2024, 2, 20),  // March 20, 2024
//     new Date(2024, 4, 10),  // May 10, 2024
//     new Date(2024, 7, 5),
//     'string',
//     'string',  // August 5, 2024
//     new Date(2024, 10, 25),
//   ];
// console.log(datesArray);
// console.log(sortDatesAscending(datesArray));

// Challenge 5: Calculate Age
// Given an array of birthdates as strings (e.g., "2000-05-10"), return an array of ages.
// Use `getFullYear` and `getMonth` to compare current date with birthdate, accounting for past birthdays.

function calculateAges(array) {
    if (!(Array.isArray(array))) {
        return 'Input is not an array.';
    }
    let today = new Date();
    let todayYear = today.getFullYear();
    let todayMonth = today.getMonth();
    let todayDate = today.getDate();
    let adjustYear;
    return ageArr = array.map((birthdate) => {
        if (typeof(birthdate) != 'string' || isNaN(new Date(birthdate))) {
            return 'Invalid Date';
        }
        let birthYear = (new Date(birthdate)).getFullYear();
        let birthMonth = (new Date(birthdate)).getMonth();
        if (todayMonth > birthMonth) {
            adjustYear = 0;
        } else if (todayMonth < birthMonth) {
            adjustYear = -1;
        } else {
            let birthDate = (new Date(birthdate)).getDate();
            if (todayDate >= birthDate) {
                adjustYear = 0;
            } else {
                adjustYear = -1;
            }}
        return (todayYear - birthYear + adjustYear);
    })
}

// Test helpers below - successful console.log!
// const array = [
//     "1990-01-15",  // January 15, 1990
//     "1985-03-20",  // March 20, 1985
//     "2000-05-10",  // May 10, 2000
//     "1995-08-05",  // August 5, 1995
//     "1992-11-25",   // November 25, 1992
//     "1997-06-20"
//   ];

// console.log(calculateAges(array));

// Challenge 6: Group Dates by Year
// Given an array of `Date` objects, return an object where each year is a key, and the value is an array of dates from that year.
// Use `reduce` to build an object with years as keys and `push` to add dates to the corresponding arrays.

function groupDatesByYear(datesArray) {
    if (!(Array.isArray(datesArray))) {
        return 'Input is not an array.';
    }
    return datesArray.reduce((ourObj, currentYear) => {
        if (!(Object.prototype.toString.call(currentYear) === '[object Date]')) {
            return 'Invalid Date';
        }
        let year = currentYear.getFullYear();
        let date = currentYear.getDate();
        if (!(ourObj[year])) {
            ourObj[year] = [];
        }
        ourObj[year].push(date);
        return ourObj;
        // newObj.year = []; This works to add to array
        // newObj.year.push(date);
    }, {}) // Optional initial value for reduce function);
}

// Test helper below - console.log successful!
// const datesArray = [
//     new Date(2024, 4, 12), 
//     new Date(2024, 7, 20),
//     new Date(2023, 2, 28),
//     new Date(2024, 5, 28),
//     new Date(1997, 6, 20),
//     new Date(1870, 4, 22),
//     new Date(1997, 1, 21),
//   ];

//   console.log(groupDatesByYear(datesArray));

// Challenge 7: Find First Monday of Month
// Given a year and a month, find the date of the first Monday of that month.
// Use a `while` loop and `getDay` to increment the date until it reaches Monday (1).
function findFirstMonday(year, month) {
    if (!(year) || !(month)) {
        return 'Missing year or month.';
    }
    if (isNaN(year) || isNaN(month)) {
        return 'Invalid year or month.';
    }
    const fullDate = new Date();
    fullDate.setFullYear(year);
    fullDate.setMonth(month);
    day = 1;
    fullDate.setDate(day);
    while (fullDate.getDay() != 1) {
        day += 1;
        fullDate.setDate(day);
    }
    return fullDate.getDate();
}

// Test helper below - successful console.log!
// console.log(findFirstMonday(2024));


// Challenge 8: Check Leap Year
// Given an array of years, return an array of booleans indicating if each year is a leap year.
// Use modulus to check divisibility rules for leap years.
function checkLeapYears(yearsArray) {
    if (!(Array.isArray(yearsArray))) {
        return 'Input is not an array.';
    }
    return yearsArray.map((year) => {
        if (isNaN(year)) {
            return 'Invalid Date';
        } else if (!(year % 100) && year % 400) {
            return false;
        } else if (!(year % 4)) {
            return true;
        } else {
            return false;
        }
    })
}

// Test helper below - successful console.log!
// console.log(checkLeapYears([1900, 2024, 1777, 2000, 100]));

// Challenge 9: Add Days to Dates
// Given an array of `Date` objects and a number of days, return a new array with each date incremented by the given number of days.
// Use `setDate` to add days to each date.
function addDaysToDates(datesArray, numDays) {
    if (!(Array.isArray(datesArray))) {
        return 'Input is not an array.';
    }
    if (isNaN(numDays)) {
        return 'Invalid number of days.';
    }
    return datesArray.map((date) => {
        newDate = date.getDate() + numDays;
        console.log(new Date(date.setDate(newDate)).toDateString());
        return (new Date(date.setDate(newDate))).toDateString();
    })
}

// Test helper below - successful console.log!
// const datesArray = [
//     new Date(2024, 4, 12), 
//     new Date(2024, 7, 20),
//     new Date(2023, 2, 28),
//     new Date(2024, 5, 28),
//     new Date(1997, 6, 20),
//     new Date(1870, 4, 22),
//     new Date(1997, 1, 21),
//   ];
// console.log(addDaysToDates(datesArray, 2));


// Challenge 10: Get Day of Week for Dates
// Given an array of `Date` objects, return an array of the day of the week for each date.
// Use `getDay` and map each day index to a day name array.
function getDayOfWeekForDates(datesArray) {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    if (!(Array.isArray(datesArray))) {
        return 'Input is not an array.';
    }
    return datesArray.map((date) => {
        if (!(Object.prototype.toString.call(date) === '[object Date]')) {
            return 'Invalid Date';
        } else {
            console.log(date);
            let index = date.getDay();
            return daysOfWeek[index];
    }});
};

// Test helper below - successful console.log!
// const datesArray = [
//     new Date(2024, 4, 12), 
//     new Date(2024, 7, 20),
//     new Date(2023, 2, 28),
//     new Date(2024, 5, 28),
//     new Date(1997, 6, 20),
//     new Date(1870, 4, 22),
//     new Date(1997, 1, 21),
// ];
// console.log(getDayOfWeekForDates(datesArray));

// Challenge 11: Find Most Recent Date
// Given an array of `Date` objects, return the most recent date.
// Use `Math.max` to find the largest date in milliseconds, then convert back to a `Date`.
function findMostRecentDate(datesArray) {
    if (!(Array.isArray(datesArray))) {
        return 'Input is not an array.';
    };
    let timestampArr = datesArray.map((date) => {
            return Date.parse(date);
        }
    );
    let mostRecent = Math.max(...timestampArr); // Spread syntax - "expands" an array into its elements
    console.log('Most Recent', mostRecent);
    return (new Date(mostRecent).toString());
}

// Test helper below - successful console.log!
// const datesArray = [
//     new Date(2024, 4, 12), 
//     new Date(2024, 7, 20),
//     new Date(2023, 2, 28),
//     new Date(2024, 5, 28),
//     new Date(1997, 6, 20),
//     new Date(1870, 4, 22),
//     new Date(1997, 1, 21),
// ];
// console.log(findMostRecentDate(datesArray));



// Challenge 12: Get Last Day of Month
// Given a year and month, return the last day of the month.
// Use `new Date(year, month + 1, 0)` to get the last day of the previous month.
function getLastDayOfMonth(year, month) {
    if (isNaN(year) || isNaN(month)) {
        return 'Invalid year or month.';
    }
    return (new Date(year, month + 1, 0)).toString();
}

// console.log(getLastDayOfMonth(2024, 3));


// Challenge 13: Calculate Duration Between Two Dates
// Given two dates, return the duration between them in days, hours, and minutes.
// Use subtraction and division to calculate differences in days, hours, and minutes.
function calculateDuration(date1, date2) {
    if (!date1 || !date2) {
        return 'Make sure you input 2 dates.';
    }
    date1 = (new Date(date1)).valueOf();
    date2 = (new Date(date2)).valueOf();
    difference = Math.abs(date2 - date1);
    days = Math.floor(difference / (1000 * 60 * 60 * 24));
    hours = Math.floor(difference / (1000 * 60 * 60));
    minutes = Math.floor(difference / (1000 * 60));
    return `Days between: ${days}, Hours between: ${hours}, Minutes between: ${minutes}`;
}

// console.log(calculateDuration('2024-11-2', '2024-11-18'));

// Challenge 14: List Dates of Specific Weekday in a Month
// Given a year, a month, and a weekday, return an array of all dates that fall on that weekday in that month.
// Use a loop with `getDay` to check each date until the end of the month.
function listDatesOfWeekdayInMonth(year, month, weekday) {
    if (isNaN(year) || isNaN(month) || isNaN(weekday)) {
        return 'Invalid Date';
    }
    let date = new Date(year, month, 1);
    let lastDay = (new Date(year, month + 1, 0)).getDate();
    let newArr = [];
    for (i = 0; i < lastDay; i++) {
        let checkDay = date.getDay();
        if (checkDay == weekday) {
            newArr.push(new Date(date).toString());
        }
        date.setDate(i + 1);
    }
    return newArr;
}

// console.log(listDatesOfWeekdayInMonth(2024, 10, 3));



// Challenge 15: Get Date Differences for Object Properties
// Given an object with properties containing date strings, return a new object with the difference in days for each date property relative to today.
// Use `Object.entries`, `map`, and `Math.floor` to calculate days for each date.
function getDateDifferences(dates) {
    if (typeof(dates) != 'object') {
        return 'Please input an object.';
    }
    const today = new Date().setUTCHours(0, 0, 0);
    // let newMap = new Map(Object.entries(dates));
    let newObj = {};
    for (let [name, date] of Object.entries(dates)) {
        let newDate = new Date(date).setUTCHours(0, 0, 0);
        if (isNaN(newDate)) {
            newObj[name] = 'Invalid Date';
        } else {
        let difference = Math.floor(((Math.abs(today - newDate))) / (1000 * 60 * 60 * 24));
        newObj[name] = difference;
    }}
    return newObj;
}

// const dates = {
//     date1: "2024-11-01",
//     date2: "2024-10-15",
//     date3: "2024-11-10",
//     date4: "2023-12-01",
//     date5: "2024-11-05"
//   };
// console.log(getDateDifferences(dates));


module.exports = {
    calculateDaysSince,
    // filterRecentDates,
    getMonthNames,
    sortDatesAscending,
    calculateAges,
    groupDatesByYear,
    findFirstMonday,
    checkLeapYears,
    addDaysToDates,
    getDayOfWeekForDates,
    findMostRecentDate,
    getLastDayOfMonth,
    calculateDuration,
    listDatesOfWeekdayInMonth,
    getDateDifferences
}


  
 
  
  
  







