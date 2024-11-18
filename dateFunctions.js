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
function filterRecentDates(datesArray) {
    if (!(Array.isArray(datesArray))) {
        return 'This is not an array.';
    }
    return result = datesArray.filter(check30);
    function check30(date) {
        let dateDate = new Date(date);
        let dateInms = Date.parse(dateDate);
        let today = new Date();
        let thirtyDays = 30 * (1000 * 60 * 60 * 24);
        let thirtyDaysAgo = today - thirtyDays;
        return (dateInms <= today && dateInms >= thirtyDaysAgo);
    }
}

//Test helpers below - successful console.log!
const datesArray = [
    "2024-11-11",
    "2024-10-31"   // Within the past 30 days
  ];

console.log('Function result', filterRecentDates(datesArray));

// Challenge 3: Get Month Names
// Given an array of `Date` objects, return an array of month names for each date.
// Use `getMonth` method to get the month index and map it to a month name array.
function getMonthNames(datesArray) {
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
}

// Challenge 4: Sort Dates in Ascending Order
// Given an array of `Date` objects, return a new array sorted in ascending order.
// Use `sort` method to arrange dates by time.


// Challenge 5: Calculate Age
// Given an array of birthdates as strings (e.g., "2000-05-10"), return an array of ages.
// Use `getFullYear` and `getMonth` to compare current date with birthdate, accounting for past birthdays.



// Challenge 6: Group Dates by Year
// Given an array of `Date` objects, return an object where each year is a key, and the value is an array of dates from that year.
// Use `reduce` to build an object with years as keys and `push` to add dates to the corresponding arrays.


// Challenge 7: Find First Monday of Month
// Given a year and a month, find the date of the first Monday of that month.
// Use a `while` loop and `getDay` to increment the date until it reaches Monday (1).


// Challenge 8: Check Leap Year
// Given an array of years, return an array of booleans indicating if each year is a leap year.
// Use modulus to check divisibility rules for leap years.


// Challenge 9: Add Days to Dates
// Given an array of `Date` objects and a number of days, return a new array with each date incremented by the given number of days.
// Use `setDate` to add days to each date.


// Challenge 10: Get Day of Week for Dates
// Given an array of `Date` objects, return an array of the day of the week for each date.
// Use `getDay` and map each day index to a day name array.
function getDayOfWeekForDates(datesArray) {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
   
}

// Challenge 11: Find Most Recent Date
// Given an array of `Date` objects, return the most recent date.
// Use `Math.max` to find the largest date in milliseconds, then convert back to a `Date`.


// Challenge 12: Get Last Day of Month
// Given a year and month, return the last day of the month.
// Use `new Date(year, month + 1, 0)` to get the last day of the previous month.


// Challenge 13: Calculate Duration Between Two Dates
// Given two dates, return the duration between them in days, hours, and minutes.
// Use subtraction and division to calculate differences in days, hours, and minutes.


// Challenge 14: List Dates of Specific Weekday in a Month
// Given a year, a month, and a weekday, return an array of all dates that fall on that weekday in that month.
// Use a loop with `getDay` to check each date until the end of the month.


// Challenge 15: Get Date Differences for Object Properties
// Given an object with properties containing date strings, return a new object with the difference in days for each date property relative to today.
// Use `Object.entries`, `map`, and `Math.floor` to calculate days for each date.


module.exports = {
    calculateDaysSince,
    filterRecentDates,
    // getMonthNames,
    // sortDatesAscending,
    // calculateAges,
    // groupDatesByYear,
    // findFirstMonday,
    // checkLeapYears,
    // addDaysToDates,
    // getDayOfWeekForDates,
    // findMostRecentDate,
    // getLastDayOfMonth,
    // calculateDuration,
    // listDatesOfWeekdayInMonth,
    // getDateDifferences
}


  
 
  
  
  







