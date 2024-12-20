// dateFunctions.test.js

const {
    calculateDaysSince,
    filterRecentDates,
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

    test('filterRecentDates', () => { // Challenge 2
        const datesArray = [
            new Date(2023, 9, 13),  
            new Date(2024, 2, 20),  
            new Date(2023, 9, 3),  
            new Date(2024, 7, 5),   
            new Date(2024, 10, 25) 
          ];
        expect(filterRecentDates('string')).toBe('Input is not an array.');
        expect(filterRecentDates(datesArray)).toEqual(["Fri Oct 13 2023", "Tue Oct 03 2023"]);
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
        expect(sortDatesAscending(datesArray)).toEqual(["Mon Jan 15 2024", "Wed Mar 20 2024", "Fri May 10 2024", "Mon Aug 05 2024", "Mon Nov 25 2024"]); // All valid dates
        expect(sortDatesAscending('string')).toEqual('Input is not an array.');
        expect(sortDatesAscending(invalidDatesArray)).toEqual(["Mon Jan 15 2024", "Wed Mar 20 2024", "Fri May 10 2024", "Mon Aug 05 2024", "Mon Nov 25 2024", "Invalid Date", "Invalid Date"]);
    });

    test('calculateAges', () => { // Challenge 5
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

    test('groupDatesByYear', () => { // Challenge 6
        const datesArray = [
            new Date(2024, 4, 12), 
            new Date(2024, 7, 20),
            new Date(2023, 2, 28),
            new Date(2024, 5, 28),
            new Date(1997, 6, 20),
            new Date(1870, 4, 22),
            new Date(1997, 1, 21),
          ];
        expect(groupDatesByYear('string')).toEqual('Input is not an array.');
        expect(groupDatesByYear(datesArray)).toEqual({2024: [12, 20, 28], 2023: [28], 1997: [20, 21], 1870: [22]});
        expect(groupDatesByYear([new Date(2024, 4, 12), 
            new Date(2024, 7, 20),
            new Date(2023, 2, 28), 3])).toEqual('Invalid Date');
    });

    test('findFirstMonday', () => { // Challenge 7
        expect(findFirstMonday(2024)).toBe('Missing year or month.');
        expect(findFirstMonday(2024, 10)).toBe(4); // Past date
        expect(findFirstMonday(2024, 11)).toBe(2); // Future date
        expect(findFirstMonday([1], ['string'])).toBe('Invalid year or month.'); // Invalid data type
    });

    test('checkLeapYears', () => { // Challenge 8
        expect(checkLeapYears([1900, 2000, 2024, 2023, 1777])).toEqual([false, true, true, false, false]);
        expect(checkLeapYears('string')).toEqual('Input is not an array.');
        expect(checkLeapYears([2000, 1800, 'string', 1777])).toEqual([true, false, 'Invalid Date', false]);
    })

    test('addDaysToDates', () => { // Challenge 9
        const datesArray = [
            new Date(2024, 4, 12), 
            new Date(2024, 7, 20),
            new Date(2023, 2, 28),
            new Date(2024, 5, 28),
            new Date(1997, 6, 20),
            new Date(1870, 4, 22),
            new Date(1997, 1, 21),
        ];
        expect(addDaysToDates('string')).toEqual('Input is not an array.');
        expect(addDaysToDates(datesArray, 'string')).toEqual('Invalid number of days.');
        expect(addDaysToDates(datesArray, 2)).toEqual(['Tue May 14 2024', 'Thu Aug 22 2024', 'Thu Mar 30 2023', 'Sun Jun 30 2024', 'Tue Jul 22 1997', 'Tue May 24 1870', 'Sun Feb 23 1997'])
    })

    test('getDayOfWeekForDates', () => { // Challenge 10
        const datesArray = [
            new Date(2024, 4, 12), 
            new Date(2024, 7, 20),
            new Date(2023, 2, 28),
            new Date(2024, 5, 28),
            new Date(1997, 6, 20),
            new Date(1870, 4, 22),
            new Date(1997, 1, 21),
        ];
        expect(getDayOfWeekForDates(datesArray)).toEqual(['Sunday', 'Tuesday', 'Tuesday', 'Friday', 'Sunday', 'Sunday', 'Friday']);
        expect(getDayOfWeekForDates('string')).toEqual('Input is not an array.');
        expect(getDayOfWeekForDates([
            new Date(2024, 4, 12),
            "2024-7-20",
            new Date(2023, 2, 28)
        ])).toEqual(['Sunday', 'Invalid Date', 'Tuesday']);
    })

    test('findMostRecentDate', () => { // Challenge 11
        const datesArray = [
            new Date(2024, 4, 12), 
            new Date(2024, 7, 20),
            new Date(2023, 2, 28),
            new Date(2024, 5, 28),
            new Date(1997, 6, 20),
            new Date(1870, 4, 22),
            new Date(1997, 1, 21),
        ];
        expect(findMostRecentDate(datesArray)).toBe("Tue Aug 20 2024");
        expect(findMostRecentDate('string')).toBe('Input is not an array.');
        expect(findMostRecentDate()).toBe('Input is not an array.');
    })

    test('getLastDayOfMonth', () => { // Challenge 12
        expect(getLastDayOfMonth(2024, 3)).toBe('Tue Apr 30 2024');
        expect(getLastDayOfMonth('string', 3)).toBe('Invalid year or month.');
        expect(getLastDayOfMonth()).toBe('Invalid year or month.');
    })

    test('calculateDuration', () => { // Challenge 13
        expect(calculateDuration('2024-11-2', '2024-11-18')).toEqual('Days between: 15, Hours between: 378, Minutes between: 22680');
        expect(calculateDuration('2024-11-2')).toEqual('Make sure you input 2 dates.');
        expect(calculateDuration()).toEqual('Make sure you input 2 dates.');
    })

    test('listDatesOfWeekdayInMonth', () => { // Challenge 14
        expect(listDatesOfWeekdayInMonth(2024, 10, 3)).toEqual(['Wed Nov 06 2024', 'Wed Nov 13 2024', 'Wed Nov 20 2024', 'Wed Nov 27 2024']);
        expect(listDatesOfWeekdayInMonth('string', 10, 3)).toEqual('Invalid Date');
    })

    test('getDateDifferences', () => { // Challenge 15
        const dates = {
            date1: "2024-11-01",
            date2: "2024-10-15",
            date3: "2024-11-10",
            date4: "2023-12-01",
            date5: "2024-11-05"
          };
        expect(getDateDifferences('string')).toBe('Please input an object.');
        expect(getDateDifferences(dates)).toEqual({date1: 383, date2: 366, date3: 392, date4: 47, date5: 387});
        expect(getDateDifferences({date: "2023-10-17"})).toEqual({date: 2});
        expect(getDateDifferences({date: "2023-10-17", date2: "string"})).toEqual({date: 2, date2: 'Invalid Date'});
    })
});


afterAll(() => {
    global.Date = RealDate; // Restore Date after test
});
