const AlegrifyDate = require('../index');

describe('Regular Date methods', () => {
    describe('getTime method', () => {
        it('should return the same result as the regular getTime method', () => {
            const date1 = new Date('2019-06-03T00:00:00');
            const date2 = new AlegrifyDate('2019-06-03T00:00:00');
            expect(date1.getTime()).toBe(date2.getTime());
        });
    });

    describe('toString method', () => {
        it('should return the same result as the regular getTime method', () => {
            const date1 = new Date('2019-06-03T00:00:00');
            const date2 = new AlegrifyDate('2019-06-03T00:00:00');
            expect(date1.toString()).toBe(date2.toString());
        });
    });
});

describe('Second manipulation', () => {
    it('should set second value', () => {
        const date = new AlegrifyDate('2019-05-31T23:59:59');
        date.second = 23;
        expect(date.second).toBe(23);
    });

    it('should format with one digit', () => {
        const date = new AlegrifyDate('2019-05-31T23:59:08');
        expect(date.formatSecond()).toBe(8);
    });

    it('should format with two digit', () => {
        const date = new AlegrifyDate('2019-05-31T23:59:07');
        expect(date.formatSecond('ss')).toBe('07');
    });

    it('should increment second value', () => {
        const date = new AlegrifyDate('2019-05-31T23:59:07');

        date.second++;
        expect(date.format('YYYY-MM-DDTHH:mm:ss')).toBe('2019-05-31T23:59:08');

        date.second += 50;
        expect(date.format('YYYY-MM-DDTHH:mm:ss')).toBe('2019-05-31T23:59:58');

        date.second += 10;
        expect(date.format('YYYY-MM-DDTHH:mm:ss')).toBe('2019-06-01T00:00:08');
    });

    it('should decrement second value', () => {
        const date = new AlegrifyDate('2019-05-01T00:00:36');

        date.second--;
        expect(date.format('YYYY-MM-DDTHH:mm:ss')).toBe('2019-05-01T00:00:35');

        date.second -= 30;
        expect(date.format('YYYY-MM-DDTHH:mm:ss')).toBe('2019-05-01T00:00:05');

        date.second -= 10;
        expect(date.format('YYYY-MM-DDTHH:mm:ss')).toBe('2019-04-30T23:59:55');
    });
});

describe('Minute manipulation', () => {
    it('should set minute value', () => {
        const date = new AlegrifyDate('2019-05-31T23:59:59');
        date.minute = 23;
        expect(date.minute).toBe(23);
    });

    it('should format with one digit', () => {
        const date = new AlegrifyDate('2019-05-31T23:08:59');
        expect(date.formatMinute()).toBe(8);
    });

    it('should format with two digit', () => {
        const date = new AlegrifyDate('2019-05-31T23:07:59');
        expect(date.formatMinute('mm')).toBe('07');
    });

    it('should increment minute value', () => {
        const date = new AlegrifyDate('2019-05-31T23:00:00');

        date.minute++;
        expect(date.format('YYYY-MM-DDTHH:mm:ss')).toBe('2019-05-31T23:01:00');

        date.minute += 50;
        expect(date.format('YYYY-MM-DDTHH:mm:ss')).toBe('2019-05-31T23:51:00');

        date.minute += 10;
        expect(date.format('YYYY-MM-DDTHH:mm:ss')).toBe('2019-06-01T00:01:00');
    });

    it('should decrement minute value', () => {
        const date = new AlegrifyDate('2019-05-01T00:36:00');

        date.minute--;
        expect(date.format('YYYY-MM-DDTHH:mm:ss')).toBe('2019-05-01T00:35:00');

        date.minute -= 30;
        expect(date.format('YYYY-MM-DDTHH:mm:ss')).toBe('2019-05-01T00:05:00');

        date.minute -= 10;
        expect(date.format('YYYY-MM-DDTHH:mm:ss')).toBe('2019-04-30T23:55:00');
    });
});

describe('Hour manipulation', () => {
    it('should set hour value', () => {
        const date = new AlegrifyDate('2019-05-31T23:59:59');
        date.hour = 13;
        expect(date.hour).toBe(13);
    });

    it('should format with one digit', () => {
        const date = new AlegrifyDate('2019-05-31T08:59:59');
        expect(date.formatHour()).toBe(8);
    });

    it('should format with two digit', () => {
        const date = new AlegrifyDate('2019-05-31T07:59:59');
        expect(date.formatHour('HH')).toBe('07');
    });

    it('should format with one digit - 12h', () => {
        const date = new AlegrifyDate('2019-05-31T08:59:59');
        expect(date.formatHour('h')).toBe(8);
        expect(date.format('ha')).toBe('8am');
    });

    it('should format with two digit - 12h', () => {
        const date = new AlegrifyDate('2019-05-31T16:59:59');
        expect(date.formatHour('hh')).toBe('04');
        expect(date.format('hha')).toBe('04pm');
    });

    it('should format 10 pm', () => {
        const date = new AlegrifyDate('2019-05-31T22:59:59');
        expect(date.format('h')).toBe('10');
        expect(date.format('ha')).toBe('10pm');
    });

    it('should increment hour value', () => {
        const date = new AlegrifyDate('2019-05-31T02:00:00');

        date.hour++;
        expect(date.format('YYYY-MM-DDTHH:mm:ss')).toBe('2019-05-31T03:00:00');

        date.hour += 20;
        expect(date.format('YYYY-MM-DDTHH:mm:ss')).toBe('2019-05-31T23:00:00');

        date.hour += 10;
        expect(date.format('YYYY-MM-DDTHH:mm:ss')).toBe('2019-06-01T09:00:00');
    });

    it('should decrement hour value', () => {
        const date = new AlegrifyDate('2019-05-01T23:00:00');

        date.hour--;
        expect(date.format('YYYY-MM-DDTHH:mm:ss')).toBe('2019-05-01T22:00:00');

        date.hour -= 20;
        expect(date.format('YYYY-MM-DDTHH:mm:ss')).toBe('2019-05-01T02:00:00');

        date.hour -= 10;
        expect(date.format('YYYY-MM-DDTHH:mm:ss')).toBe('2019-04-30T16:00:00');
    });

    it('should set pm time', () => {
        const date = new AlegrifyDate('2019-05-01T02:00:00');

        date.hour = '4pm';
        expect(date.format('YYYY-MM-DDTHH:mm:ss')).toBe('2019-05-01T16:00:00');

        date.hour = '11pm';
        expect(date.format('YYYY-MM-DDTHH:mm:ss')).toBe('2019-05-01T23:00:00');

        date.hour = '12pm';
        expect(date.format('YYYY-MM-DDTHH:mm:ss')).toBe('2019-05-01T12:00:00');

        date.hour = '7pm';
        expect(date.format('YYYY-MM-DDTHH:mm:ss')).toBe('2019-05-01T19:00:00');
    });

    it('should set am time', () => {
        const date = new AlegrifyDate('2019-05-01T17:00:00');

        date.hour = '1am';
        expect(date.format('YYYY-MM-DDTHH:mm:ss')).toBe('2019-05-01T01:00:00');

        date.hour = '12am';
        expect(date.format('YYYY-MM-DDTHH:mm:ss')).toBe('2019-05-01T00:00:00');

        date.hour = '7am';
        expect(date.format('YYYY-MM-DDTHH:mm:ss')).toBe('2019-05-01T07:00:00');

        date.hour = '11am';
        expect(date.format('YYYY-MM-DDTHH:mm:ss')).toBe('2019-05-01T11:00:00');
    });
});

describe('Day manipulation', () => {
    it('should set day value', () => {
        const date = new AlegrifyDate('2019-05-31T23:59:59');
        date.day = 23;
        expect(date.day).toBe(23);
    });

    it('should set day value when giving a weekday - next month', () => {
        const date = new AlegrifyDate('2019-05-31T23:59:59');
        date.day = 'Sunday';
        expect(date.day).toBe(2); // Sunday, June 2nd 2019
    });
    
    it('should set day value when giving a weekday - previous month', () => {
        const date = new AlegrifyDate('2019-06-02T23:59:59');
        date.day = 'Monday';
        expect(date.day).toBe(27); // Monday, May 27th 2019
    });

    it('should return day of month in 2 digits', () => {
        const date = new AlegrifyDate('2019-06-02T23:59:59');
        date.day = 3;
        expect(date.formatDay('DD')).toBe('03');
    })

    it('should format weekday as a number', () => {
        const date = new AlegrifyDate('2019-05-31T23:59:59');
        date.day = 'Sunday';
        expect(date.formatDay('d')).toBe(7);
    });

    it('should format weekday as a Mo', () => {
        const date = new AlegrifyDate('2019-05-31T23:59:59');
        date.day = 'Monday';
        expect(date.formatDay('dd')).toBe('Mo');
    });
    
    it('should format weekday as a Tue', () => {
        const date = new AlegrifyDate('2019-05-31T23:59:59');
        date.day = 'Tuesday';
        expect(date.formatDay('ddd')).toBe('Tue');
    });

    it('should format weekday as a Sunday', () => {
        const date = new AlegrifyDate('2019-05-31T23:59:59');
        date.day = 'Sunday';
        expect(date.formatDay('dddd')).toBe('Sunday');
    });

    it('should format day as 31st', () => {
        const date = new AlegrifyDate('2019-05-31T23:59:59');
        expect(date.formatDay('Do')).toBe('31st');
    });

    it('should increment day value', () => {
        const date = new AlegrifyDate('2019-05-20T02:00:00');

        date.day++;
        expect(date.format('YYYY-MM-DDTHH:mm:ss')).toBe('2019-05-21T02:00:00');

        date.day += 7;
        expect(date.format('YYYY-MM-DDTHH:mm:ss')).toBe('2019-05-28T02:00:00');

        date.day += 7;
        expect(date.format('YYYY-MM-DDTHH:mm:ss')).toBe('2019-06-04T02:00:00');
    });

    it('should decrement day value', () => {
        const date = new AlegrifyDate('2019-05-11T02:00:00');

        date.day--;
        expect(date.format('YYYY-MM-DDTHH:mm:ss')).toBe('2019-05-10T02:00:00');

        date.day -= 7;
        expect(date.format('YYYY-MM-DDTHH:mm:ss')).toBe('2019-05-03T02:00:00');

        date.day -= 7;
        expect(date.format('YYYY-MM-DDTHH:mm:ss')).toBe('2019-04-26T02:00:00');
    });
});

describe('Month manipulation', () => {
    AlegrifyDate.EN_MONTH_NAMES.forEach((monthName, monthIndex) => describe(monthName, () => {
        const monthNumber = monthIndex + 1;

        it('should set month value', () => {
            const date = new AlegrifyDate('2019-05-31T23:59:59');

            if ([1,3,5,7,8,10,12].indexOf(monthNumber) === -1) {
                date.day = 28;
            }

            date.month = monthNumber;
            expect(date.formatMonth()).toBe(monthNumber);

            if ([1,3,5,7,8,10,12].indexOf(monthNumber) === -1) {
                expect(date.day).toBe(28);
            }
            else {
                expect(date.day).toBe(31);
            }
        });
    
        it('should format month with one digit', () => {
            const date = new AlegrifyDate('2019-05-01T23:08:59');
            date.month = monthName;
            expect(date.formatMonth()).toBe(monthNumber);
            expect(date.day).toBe(1);
        });
    
        it('should format with two digit', () => {
            const date = new AlegrifyDate('2019-05-30T23:08:59');

            if (monthNumber === 2) {
                date.day = 28;
            }

            date.month = monthName;
            expect(date.formatMonth('MM').length).toBe(2);
            expect(date.formatMonth('MM') * 1).toBe(monthNumber);
            expect(date.day).toBe(monthNumber === 2 ? 28 : 30);
        });
    
        it('should format month as a short string', () => {
            const date = new AlegrifyDate('2019-05-16T23:08:59');
            date.month = monthName;
            expect(date.formatMonth('MMM').toLowerCase()).toBe(monthName.toLowerCase().substr(0, 3));
            expect(date.day).toBe(16);
        });
    
        it('should format month as a full string', () => {
            const date = new AlegrifyDate('2019-05-25T23:08:59');
            date.month = monthName;
            expect(date.formatMonth('MMMM').toLowerCase()).toBe(monthName.toLowerCase());
            expect(date.day).toBe(25);
        });

        const MONTH_ABBRS = ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th', '11th', '12th'];
        it(`should format month as ${MONTH_ABBRS[monthIndex]}`, () => {
            const date = new AlegrifyDate('2019-05-15T23:08:59');
            date.month = monthName;
            expect(date.formatMonth('Mo')).toBe(MONTH_ABBRS[monthIndex]);
            expect(date.day).toBe(15);
        });
    }));

    it('should increment month value', () => {
        const date = new AlegrifyDate('2019-05');

        date.month++;
        expect(date.format('YYYY-MM')).toBe('2019-06');

        date.month += 6;
        expect(date.format('YYYY-MM')).toBe('2019-12');

        date.month += 3;
        expect(date.format('YYYY-MM')).toBe('2020-03');
    });

    it('should decrement month value', () => {
        const date = new AlegrifyDate('2019-05');

        date.month--;
        expect(date.format('YYYY-MM')).toBe('2019-04');

        date.month -= 3;
        expect(date.format('YYYY-MM')).toBe('2019-01');

        date.month -= 3;
        expect(date.format('YYYY-MM')).toBe('2018-10');
    });
});

describe('Year manipulation', () => {
    it('should set year value', () => {
        const date = new AlegrifyDate('2019-05-01T23:08:59');
        date.year = 2020;
        expect(date.year).toBe(2020);
    });

    it('should format year to two digits', () => {
        const date = new AlegrifyDate('2019-05-01T23:08:59');
        date.year = 2007;
        expect(date.formatYear('YY')).toBe('07');
        date.year = 2020;
        expect(date.formatYear('YY')).toBe('20');
    });

    it('should format year to four digits', () => {
        const date = new AlegrifyDate('2019-05-01T23:08:59');
        date.year = 2007;
        expect(date.formatYear()).toBe(2007);
        date.year = 2020;
        expect(date.formatYear('YYYY')).toBe(2020);
    });

    it('should increment year value', () => {
        const date = new AlegrifyDate('2019-05-31');
        
        date.year++;
        expect(date.year).toBe(2020);
        
        date.year += 10;
        expect(date.year).toBe(2030);
    });

    it('should decrement year value', () => {
        const date = new AlegrifyDate('2019-05-31');
        
        date.year--;
        expect(date.year).toBe(2018);
        
        date.year -= 20;
        expect(date.year).toBe(1998);
        
        date.year -= 2000;
        expect(date.year).toBe(-2);
    });
});

describe('format method', () => {
    it('should format YYYY-MM-DD', () => {
        const date = new AlegrifyDate('2019-05-01T23:08:59');
        expect(date.format('YYYY-MM-DD')).toBe('2019-05-01');
    });

    it('should format DD MMMM YYYY', () => {
        const date = new AlegrifyDate('2016-12-22T23:08:59');
        expect(date.format('DD MMMM YYYY')).toBe('22 December 2016');
    });

    it('should format HH:mm', () => {
        const date = new AlegrifyDate('2016-12-22T23:08:59');
        expect(date.format('HH:mm:ss')).toBe('23:08:59');
    });

    it('should format HHhmm', () => {
        const date = new AlegrifyDate('2016-12-22T23:08:59');
        expect(date.format('HHhmm')).toBe('231108');
    });

    it('should format HH[h]mm', () => {
        const date = new AlegrifyDate('2016-12-22T23:08:59');
        expect(date.format('HH[h]mm')).toBe('23h08');
    });
});