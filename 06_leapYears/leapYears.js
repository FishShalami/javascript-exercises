const leapYears = function(year) {
    if ((!Number.isInteger(year)) || year <= 0) {
            return 'ERROR';
    }
    console.log('Value supplied is a valid year');

    if (year % 400 === 0) {
        console.log(`Year is divisible by 400`)
        return true;
    } else if (year % 100 == 0) {
        console.log(`Year is divisible by 100`)
        return false;
    } else if (year % 4 === 0) {
        console.log(`Year is divisible by 4`)
        return true;
    } else {
        console.log(`Not divisible by 4 or 400`)
        return false;
    }

};

// Do not edit below this line
module.exports = leapYears;
