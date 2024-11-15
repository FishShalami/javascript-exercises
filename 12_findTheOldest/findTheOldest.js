const findTheOldest = function(arr) {
    const currentYear = new Date().getFullYear();

    const peopleWithAge = arr.map(person => {
        const yearOfDeath = person.yearOfDeath || currentYear;
        const age = yearOfDeath - person.yearOfBirth;
        return {...person, age};

    });            
            
    let peopleAgeSort = peopleWithAge.sort((a,b) => (b.age - a.age));
    return peopleAgeSort[0];
            
       

};

// Do not edit below this line
module.exports = findTheOldest;
