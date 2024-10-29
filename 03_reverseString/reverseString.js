const reverseString = function(string) {
    let finalString = '';
    if (string === '') {
        return finalString;
    } else {
    finalString = string.split('').reverse().join('')
    }
    return finalString;
}



// Do not edit below this line
module.exports = reverseString;
