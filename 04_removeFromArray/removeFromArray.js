const removeFromArray = function(array, ...removals) {
    let inputArray = array,slice; //clone the array to maintain the original
    // let outputArray = [];

    console.log(removals);

    for (let removalItem of removals) {
        console.log(`Processing removal of ${removalItem}`);

        // const index = inputArray.indexOf(removalItem);

        let duplicates = inputArray.filter(item => item === removalItem);

        if (duplicates.length > 0) {
            console.log(`The item ${removalItem} appears ${duplicates.length} times in the array.`);
            inputArray = inputArray.filter(item => item !== removalItem);
            console.log(`Removed ${removalItem} -- the array is now ${inputArray}`);
        } else {
            console.log(`Item ${removalItem} not found, no removal needed.`);
        }
    }
    
    return inputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
