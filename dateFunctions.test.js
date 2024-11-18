// dateFunctions.test.js

const {
    calculateDaysSince,
    // filterRecentDates,
    getMonthNames,
    sortDatesAscending,
    calculateAges,
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
} = require('./dateFunctions');

// Mock Date for testing
const RealDate = Date;
global.Date = class extends RealDate {
    constructor(...args) {
        if (args.length) return new RealDate(...args);
        return new RealDate('2023-10-15T00:00:00Z'); // Fixed current date for testing
    }
};

describe('JavaScript Date Coding Challenges', () => {
    test('calculateDaysSince', () => { // Challenge 1
        const startDate = "2023-01-01";
        const daysSince = Math.floor((new Date() - new Date(startDate)) / (1000 * 60 * 60 * 24));
        expect(calculateDaysSince([{ startDate }])).toEqual([daysSince]);
        expect(calculateDaysSince([{ startDate: "Invalid Date" }])).toEqual([NaN]);
        expect(calculateDaysSince([{ startDate: 0 }])).toEqual[NaN];
        expect(calculateDaysSince([{ startDate: null }])).toEqual[NaN];
    });



    test('getMonthNames', () => { // Challenge 3
        const datesArray = [
            new Date(2024, 0, 15),  // January 15, 2024
            new Date(2024, 2, 20),  // March 20, 2024
            new Date(2024, 4, 10),  // May 10, 2024
            new Date(2024, 7, 5),   // August 5, 2024
            new Date(2024, 10, 25)  // November 25, 2024
          ];
        expect(getMonthNames(datesArray)).toEqual(['January', 'March', 'May', 'August', 'November']);
        expect(getMonthNames('string')).toBe('Input is not an array.');
        expect(getMonthNames([
            new Date(2024, 13, 12), 
            new Date(2024, 7, 20)
            ])).toEqual(['February', 'August']); // Numbers larger or smaller than indices of months
        expect(getMonthNames([
            new Date(2024, 7, 20),
            'hello'
        ])).toEqual(['August', 'Invalid Date']); // Not a date object
    });

    test('sortDatesAscending', () => { // Challenge 4
        const datesArray = [
            new Date(2024, 0, 15),  // January 15, 2024
            new Date(2024, 2, 20),  // March 20, 2024
            new Date(2024, 4, 10),  // May 10, 2024
            new Date(2024, 7, 5),   // August 5, 2024
            new Date(2024, 10, 25)
          ];
        const invalidDatesArray = [
            new Date(2024, 0, 15),  // January 15, 2024
            new Date(2024, 2, 20),  // March 20, 2024
            new Date(2024, 4, 10),  // May 10, 2024
            new Date(2024, 7, 5),   // August 5, 2024
            'string',
            'string',
            new Date(2024, 10, 25),
        ];
        expect(sortDatesAscending(datesArray)).toEqual(['Mon Jan 15 2024 00:00:00 GMT-0700 (Mountain Standard Time)', 'Wed Mar 20 2024 00:00:00 GMT-0600 (Mountain Daylight Time)', 'Fri May 10 2024 00:00:00 GMT-0600 (Mountain Daylight Time)', 'Mon Aug 05 2024 00:00:00 GMT-0600 (Mountain Daylight Time)', 'Mon Nov 25 2024 00:00:00 GMT-0700 (Mountain Standard Time)']); // All valid dates
        expect(sortDatesAscending('string')).toEqual('Input is not an array.');
        expect(sortDatesAscending(invalidDatesArray)).toEqual(['Mon Jan 15 2024 00:00:00 GMT-0700 (Mountain Standard Time)', 'Wed Mar 20 2024 00:00:00 GMT-0600 (Mountain Daylight Time)', 'Fri May 10 2024 00:00:00 GMT-0600 (Mountain Daylight Time)', 'Mon Aug 05 2024 00:00:00 GMT-0600 (Mountain Daylight Time)', 'Mon Nov 25 2024 00:00:00 GMT-0700 (Mountain Standard Time)', 'Invalid Date', 'Invalid Date']);
    });

    test('calculateAges', () => {
        const array = [
            "1990-01-15",  // January 15, 1990
            "1985-03-20",  // March 20, 1985
            "2000-05-10",  // May 10, 2000
            "1995-08-05",  // August 5, 1995
            "1992-11-25",   // November 25, 1992
            "1997-06-20"
          ];
        expect(calculateAges(array)).toEqual([33, 38, 23, 28, 30, 26]);
        expect(calculateAges(2)).toEqual('Input is not an array.');
        expect(calculateAges(["1997-06-20", 2])).toEqual([26, 'Invalid Date']);
        expect(calculateAges(['string'])).toEqual(['Invalid Date']);
    });
});


afterAll(() => {
    global.Date = RealDate; // Restore Date after test
});
