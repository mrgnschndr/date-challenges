// dateFunctions.test.js

const {
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
    test('calculateDaysSince', () => {
        const startDate = "2023-01-01";
        const daysSince = Math.floor((new Date() - new Date(startDate)) / (1000 * 60 * 60 * 24));
        expect(calculateDaysSince([{ startDate }])).toEqual([daysSince]);
        expect(calculateDaysSince([{ startDate: "Invalid Date" }])).toEqual([NaN]);
        expect(calculateDaysSince([{ startDate: 0 }])).toEqual[NaN];
        expect(calculateDaysSince([{ startDate: null }])).toEqual[NaN];
    });

    test('filterRecentDates', () => {
        // const today = "2024-11-15";
        const datesArray = ["2024-11-11", "2024-10-31"];
        expect(filterRecentDates('string')).toBe('This is not an array.'); // Not an array
        expect(filterRecentDates(datesArray)).toEqual(["2024-11-11", "2024-10-31"]); // Inside 30 days


        // expect(filterRecentDates(["1990-01-19"])).toEqual([]); // Outside of 30 days
        // expect(filterRecentDates(datesArray)).toEqual(["2024-10-25", "2024-10-31", "2024-10-30"]); // Past dates 2 within 30 days
        // expect(filterRecentDates(["1990-01-19", today])).toEqual([today]); // Today's date
    });
});


afterAll(() => {
    global.Date = RealDate; // Restore Date after test
});
