# Alegrify Date

Pure JS Date library

[![Build Status](https://travis-ci.org/dejakob/alegrify-date.svg?branch=master)](https://travis-ci.org/dejakob/alegrify-date)
[![NPM]https://img.shields.io/npm/v/alegrify-date/latest.svg?label=npm](https://npmjs.com/package/alegrify-date)

## Install

```bash
npm i alegrify-date
```

or 

```bash
yarn i alegrify-date
```

## How to use

```js
const AlegrifyDate = require('alegrify-date');

const date = new AlegrifyDate();

// Set year to 2020
date.year = 2020;

// Set month to January
date.month = 'Jarnuary';

// Add one month
date.month++;

// Subtract 3 days
date.day -= 3;

// Add 5 minutes
date.minute = 5;

// Format the date
console.log(date.format('DD MMMM, HHhmm'));
```

## API

### Date.prototype

Alegrify Date extends from the Date Object, so every original Date method can be used such as `getTime` and `toString`

### [Property] second

```js
date.second = 22;
console.log(date.second);
```

### [Property] minute

```js
date.minute = 15;
console.log(date.minute);
```

### [Property] minute

```js
date.hour = 23;
console.log(date.hour);
```

### [Property] day

```js
date.day = 'Monday'; // Set to Monday in the same week
date.day = 16; // Set to the 16th day in the month
console.log(date.day);
```

### [Property] month

```js
date.month = 'Februrary'; // Set date to same day in February
date.month = 3; // Set date to same day in March
console.log(date.month);
```

### [Property] year

```js
date.year = 2017;
console.log(date.year);
```

### [Method] format

Display the date in a certain format

```js
const date = AlegrifyDate('2019-06-03T20:45:00');
return date.format('D MMMM YYYY HHh');
// Will return 3 June 2019 20h
```

| Param | Description            | Example  |
|-------|------------------------|----------|
| s     | 1 digit second value   | 1 2 12   |
| ss    | 2 digits second value  | 01 02 12 |
| m     | 1 digit minute value   | 1 2 12   |
| mm    | 2 digits minute value  | 01 02 12 |
| H     | 1 digit hour value     | 1 2 12   |
| HH    | 2 digits hour value    | 01 02 12 |
| D     | 1 digit day value      | 1 2 12   |
| DD    | 2 digits day value     | 01 02 12 |
| Do    | Format day with 'Xth'  | 2nd 4th  |
| d     | Weekday one digit      | Mo = 1   |
| dd    | Short weekday string   | Mo Tu    |
| ddd   | Medium weekday string  | Mon Tue  |
| dddd  | Full weekday string    | Monday   |
| dddd  | Full weekday string    | Monday   |
| e     | Weekday one digit      | Su = 0   |
| M     | Month one digit        | Jan = 1  |
| MM    | Month two digits       | Jan = 01 |
| MMM   | Month short name       | Jan Feb  |
| MMMM  | Month full name        | January  |
| Mo    | Format month with 'Xth'| Jan = 1st|
| YY    | Short code year        | 2019 = 19|
| YYYY  | Short code year        | 2018 2019|