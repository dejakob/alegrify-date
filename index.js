/**
 * Create DateManager not to override default behavior
 */
class DateManager extends Date {
    /**
     * @returns {Number}
     */
    get second() {
        return this.formatSecond();
    }

    /**
     * Set the second value
     * @param {Number} value
     */
    set second(value) {
        this.setSeconds(value);
    }

    /**
     * @returns {Number}
     */
    get minute() {
        return this.formatMinute();
    }

    /**
     * Set the minute value
     * @param {Number} value
     */
    set minute(value) {
        return this.setMinutes(value);
    }

    /**
     * @returns {Number}
     */
    get hour() {
        return this.formatHour();
    }

    /**
     * @returns {Number}
     */
    set hour(value) {
        return this.setHours(value);
    }

    /**
     * @returns {Number}
     */
    get day() {
        return this.formatDay();
    }

    /**
     * Set the day value
     * @param {String|Number} value
     * @example
     *  date.day = 3
     * @example
     *  date.day = 'Thursday';
     */
    set day(value) {
        if (typeof value === 'number' || !isNaN(value * 1)) {
            this.setDate(value * 1);
            return;
        }

        if (typeof value === 'string') {
            const weekdayNames = DateManager.EN_WEEKDAY_NAMES.map(value => value.toLowerCase());
            const weekdayNumber = weekdayNames.indexOf(value.toLowerCase()) + 1;

            if (weekdayNumber > 0) {
                const currentWeekDay = this.formatDay(DateManager.DAY_FORMATS.DAY_IN_WEEK_NUMERIC_ONE_DIGIT);
                const diffInDays = weekdayNumber - currentWeekDay;

                this.setDate(this.getDate() + diffInDays);
                return;
            }
        }
    }

    /**
     * @returns {Number}
     */
    get month() {
        return this.formatMonth();
    }

    /**
     * Set the month value
     * @param {String|Number} value
     * @example
     *   date.month = 2 // February
     * @example
     *   date.month = 'April';
     */
    set month(value) {
        if (typeof value === 'number' || !isNaN(value * 1)) {
            const day = this.getDate();
            this.setMonth(value * 1 - 1, 15);
            this.setDate(day);
            return;
        }

        if (typeof value === 'string') {
            const monthNames = DateManager.EN_MONTH_NAMES.map(value => value.toLowerCase());
            const monthIndex = monthNames.indexOf(value.toLowerCase());

            if (monthIndex > -1) {
                const day = this.getDate();
                this.setMonth(monthIndex, 15);
                this.setDate(day);
            }
        }
    }

    /**
     * @returns {Number}
     */
    get year() {
        return this.formatYear();
    }
    
    /**
     * Set the year value
     * @param {Number} year
     * @example
     *   date.year = 2018;
     */
    set year(value) {
        this.setFullYear(value);
    }

    /**
     * Get second of the date into certain format
     * @param {String} [format=DateManager.SECOND_FORMATS.SECONDS_NUMERIC_ONE_DIGIT]
     * @returns {Number|String}
     */
    formatSecond(format = DateManager.SECOND_FORMATS.SECONDS_NUMERIC_ONE_DIGIT) {
        let seconds = this.getSeconds();

        switch (format) {
            case DateManager.SECOND_FORMATS.SECONDS_NUMERIC_TWO_DIGITS:
                if (seconds < 10) {
                    seconds = '0' + seconds;
                }
                
                return '' + seconds;

            default:
                return seconds;
        }
    }

    /**
     * Get minute of the date into certain format
     * @param {String} [format=DateManager.MINUTE_FORMATS.MINUTES_NUMERIC_ONE_DIGIT]
     * @returns {Number|String}
     */
    formatMinute(format = DateManager.MINUTE_FORMATS.MINUTES_NUMERIC_ONE_DIGIT) {
        let minutes = this.getMinutes();

        switch (format) {
            case DateManager.MINUTE_FORMATS.MINUTES_NUMERIC_TWO_DIGITS:
                if (minutes < 10) {
                    minutes = '0' + minutes;
                }
                
                return '' + minutes;

            default:
                return minutes;
        }
    }

    /**
     * Get hour of the date into certain format
     * @param {String} [format=DateManager.HOUR_FORMATS.HOURS_NUMERIC_ONE_DIGIT]
     * @returns {Number|String}
     */
    formatHour(format = DateManager.HOUR_FORMATS.HOURS_NUMERIC_ONE_DIGIT) {
        let hours = this.getHours();

        switch (format) {
            case DateManager.HOUR_FORMATS.HOURS_NUMERIC_TWO_DIGITS:
                if (hours < 10) {
                    hours = '0' + hours;
                }
                
                return '' + hours;

            default:
                return hours;
        }
    }

    /**
     * Get day of the date into certain format
     * @param {String} [format=DateManager.DAY_FORMATS.DAY_IN_MONTH_NUMERIC_ONE_DIGIT]
     * @returns {Number|String}
     */
    formatDay(format = DateManager.DAY_FORMATS.DAY_IN_MONTH_NUMERIC_ONE_DIGIT) {
        let day, weekday;

        switch (format) {
            case DateManager.DAY_FORMATS.DAY_IN_WEEK_NUMERIC_ONE_DIGIT:
                weekday = this.getDay();

                if (weekday === 0) {
                    weekday = 7;
                }

                return weekday;

            case DateManager.DAY_FORMATS.DAY_IN_WEEK_NUMERIC_ONE_DIGIT_US:
                return this.getDay();

            case DateManager.DAY_FORMATS.DAY_IN_WEEK_NAME_SHORT:
                weekday = this.getDay();
                return DateManager.EN_WEEKDAY_NAMES[weekday ? weekday - 1 : 6].substr(0, 2);

            case DateManager.DAY_FORMATS.DAY_IN_WEEK_NAME_MEDIUM:
                weekday = this.getDay();
                return DateManager.EN_WEEKDAY_NAMES[weekday ? weekday - 1 : 6].substr(0, 3);

            case DateManager.DAY_FORMATS.DAY_IN_WEEK_NAME_FULL:
                weekday = this.getDay();
                return DateManager.EN_WEEKDAY_NAMES[weekday ? weekday - 1 : 6];

            case DateManager.DAY_FORMATS.DAY_IN_MONTH_NUMERIC_STRING:
                day = this.getDate();
                let suffix = DateManager.EN_SUFFIXES[day];

                if (!suffix) {
                    suffix = DateManager.EN_SUFFIXES.other;
                }

                return day + suffix;
            
            case DateManager.DAY_FORMATS.DAY_IN_MONTH_NUMERIC_TWO_DIGITS:
                day = this.getDate();

                if (day < 10) {
                    day = '0' + day
                }

                return '' + day;

            default:
                return this.getDate();
        }
    }

    /**
     * Get month of the date into certain format
     * @param {String} [format=DateManager.MONTH_FORMATS.NUMERIC_ONE_DIGIT]
     * @returns {Number|String}
     */
    formatMonth(format = DateManager.MONTH_FORMATS.NUMERIC_ONE_DIGIT) {
        const zeroBasedMonth = this.getMonth();
        let result;

        switch (format) {
            case DateManager.MONTH_FORMATS.NAME_SHORT:
                return DateManager.EN_MONTH_NAMES[zeroBasedMonth].substr(0, 3);

            case DateManager.MONTH_FORMATS.NAME_FULL:
                return DateManager.EN_MONTH_NAMES[zeroBasedMonth];

            case DateManager.MONTH_FORMATS.NUMERIC_STRING:
                result = zeroBasedMonth + 1;
                let suffix = DateManager.EN_SUFFIXES[result];

                if (!suffix) {
                    suffix = DateManager.EN_SUFFIXES.other;
                }

                return result + suffix;

            case DateManager.MONTH_FORMATS.NUMERIC_TWO_DIGITS:
                result = zeroBasedMonth + 1;

                if (result < 10) {
                    result = '0' + result;
                }

                return '' + result;

            default:
                result = zeroBasedMonth + 1;
                return result;
        }
    }

    /**
     * Get year of the date into certain format
     * @param {String} [format=DateManager.YEAR_FORMATS.FOUR_DIGITS]
     * @returns {Number}
     */
    formatYear(format = DateManager.YEAR_FORMATS.FOUR_DIGITS) {
        const result = this.getFullYear();

        switch (format) {
            case DateManager.YEAR_FORMATS.TWO_DIGITS:
                return (result + '').substr(2, 2);

            default:
                return result;
        }
    }

    format(format) {
        let result = format;
        
        const secondFormats = Object.keys(DateManager.SECOND_FORMATS).map(k => DateManager.SECOND_FORMATS[k]);
        const minuteFormats = Object.keys(DateManager.MINUTE_FORMATS).map(k => DateManager.MINUTE_FORMATS[k]);
        const hourFormats = Object.keys(DateManager.HOUR_FORMATS).map(k => DateManager.HOUR_FORMATS[k]);
        const yearFormats = Object.keys(DateManager.YEAR_FORMATS).map(k => DateManager.YEAR_FORMATS[k]);
        const monthFormats = Object.keys(DateManager.MONTH_FORMATS).map(k => DateManager.MONTH_FORMATS[k]);
        const dayFormats = Object.keys(DateManager.DAY_FORMATS).map(k => DateManager.DAY_FORMATS[k]);
        const allFormats = [
            ...secondFormats,
            ...minuteFormats,
            ...hourFormats,
            ...yearFormats,
            ...monthFormats,
            ...dayFormats
        ];

        const regex = new RegExp(allFormats
            .sort((a, b) => b.length - a.length)
            .map(val => '(' + val + ')')
            .join('|'), 'g');

        return result.replace(regex, match => {
            if (yearFormats.indexOf(match) > -1) {
                return this.formatYear(match);
            }

            if (monthFormats.indexOf(match) > -1) {
                return this.formatMonth(match);
            }

            if (dayFormats.indexOf(match) > -1) {
                return this.formatDay(match);
            }

            if (hourFormats.indexOf(match) > -1) {
                return this.formatHour(match);
            }

            if (minuteFormats.indexOf(match) > -1) {
                return this.formatMinute(match);
            }

            if (secondFormats.indexOf(match) > -1) {
                return this.formatSecond(match);
            }

            return match;
        });
    }
}
DateManager.EN_SUFFIXES = {
    1: 'st',
    2: 'nd',
    3: 'rd',
    21: 'st',
    22: 'nd',
    23: 'rd',
    31: 'st',
    other: 'th'
};
DateManager.EN_MONTH_NAMES = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
];
DateManager.EN_WEEKDAY_NAMES = [
    'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
];
DateManager.SECOND_FORMATS = {
    SECONDS_NUMERIC_ONE_DIGIT: 's',
    SECONDS_NUMERIC_TWO_DIGITS: 'ss',
};
DateManager.MINUTE_FORMATS = {
    MINUTES_NUMERIC_ONE_DIGIT: 'm',
    MINUTES_NUMERIC_TWO_DIGITS: 'mm',
};
DateManager.HOUR_FORMATS = {
    HOURS_NUMERIC_ONE_DIGIT: 'H',
    HOURS_NUMERIC_TWO_DIGITS: 'HH',
    // HOURS_NUMERIC_ONE_DIGIT_12H: 'h', // To be implemented
    // HOURS_NUMERIC_TWO_DIGITS_12H: 'hh', // To be implemented
};
DateManager.DAY_FORMATS = {

    // 1
    DAY_IN_MONTH_NUMERIC_ONE_DIGIT: 'D',

    // 02
    DAY_IN_MONTH_NUMERIC_TWO_DIGITS: 'DD',

    // 3rd
    DAY_IN_MONTH_NUMERIC_STRING: 'Do',

    // Monday = 1
    DAY_IN_WEEK_NUMERIC_ONE_DIGIT: 'd',
    
    // Sunday = 0
    DAY_IN_WEEK_NUMERIC_ONE_DIGIT_US: 'e',

    // Mo Tu ...
    DAY_IN_WEEK_NAME_SHORT: 'dd',

    // Mon Tue ...
    DAY_IN_WEEK_NAME_MEDIUM: 'ddd',

    // Monday Tuesday ...
    DAY_IN_WEEK_NAME_FULL: 'dddd'
};
DateManager.MONTH_FORMATS = {
    // January = 1
    NUMERIC_ONE_DIGIT: 'M',

    // February = 02
    NUMERIC_TWO_DIGITS: 'MM',

    // March = 3rd
    NUMERIC_STRING: 'Mo',

    // April = Apr
    NAME_SHORT: 'MMM',

    // August = August
    NAME_FULL: 'MMMM'
};
DateManager.YEAR_FORMATS = {
    // 18 19 ...
    TWO_DIGITS: 'YY',

    // 2018 2019 ...
    FOUR_DIGITS: 'YYYY'
};

module.exports = DateManager;