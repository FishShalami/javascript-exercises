const fibonacci = function(num) {

    //In this exercise, the Fibonacci sequence used is 0,1, 1, 2, 3, 5, 8, etc.
    //Take the num parameter and return that index value in the fibonacci sequence

    let fib = [0, 1, 1]
    //if num > fib.length - 1, then calculate up to num
    if (num < 0) {
        return 'OOPS'
    } else if (fib.length - 1 >= num) {
        return fib[num]
    } else if (fib.length - 1 < num) {
        //for loop to the desired length
        for (let i = 3; i <= num; i++) {
        fib.push(fib[i-1] + fib[i-2]);
        };
        return fib[num];
    } 


};

// Do not edit below this line
module.exports = fibonacci;
