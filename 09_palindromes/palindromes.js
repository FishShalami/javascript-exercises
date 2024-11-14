const palindromes = function (string) {
        
    const stringClean = [...string.toLowerCase()].filter(char => /[a-z0-9]/.test(char)); //clean the string input, remove puncutation, letters only, as array
    return stringClean.join('') === stringClean.slice().reverse().join('');
    //reverse the string and check conditional



};

// Do not edit below this line
module.exports = palindromes;
