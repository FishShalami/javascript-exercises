const sumAll = function(int1, int2) {
    //check that the values are in fact positive integers before proceeding, otherwise throw ERROR 
    if ((!Number.isInteger(int1)) || int1 <= 0 ||
        (!Number.isInteger(int2)) || int2 <= 0) {
            return 'ERROR';
        } else if (int1 === int2) return 0;
    console.log('Both numbers are postiive integers');
    //create final sum variable
    let finalSum = 0;
    let minVar = 0;
    let maxVar = 0;

    //sort the input parameters from smallest to largest, maybe rename them to min and max
    //if int1 > int2, then int1 = max and int2 = min, otherwise vice versa

    if (int1 > int2) {
        maxVar = int1;
        minVar = int2;
    } else {
        maxVar = int2;
        minVar = int1;
    }

    console.log(`The min value is ${minVar} and the max value is ${maxVar}`)

    //use for loop to increment between min and max
    for (let i = minVar; i <= maxVar; i++) {
        // console.log(`Processing ${i}`)
        finalSum += i
    }

    //return the final sum
return finalSum;
    

};

// Do not edit below this line
module.exports = sumAll;
