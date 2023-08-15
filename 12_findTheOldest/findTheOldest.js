const findTheOldest = function(arrayOfPplObj) {
    CURRENT_YEAR = 2023
    let oldestPersonObj = ""
    let oldestAge = 0
    let age
    for (let person of arrayOfPplObj){
        console.log(`oldest ${oldestAge}`)
        console.log(person)
        if (person.hasOwnProperty("yearOfDeath")){
            age = person.yearOfDeath - person.yearOfBirth
        }
        else{
            age = CURRENT_YEAR - person.yearOfBirth
            
        }
 
        if (age>oldestAge){

            oldestPersonObj = person
            oldestAge = age
        }
    }
    return oldestPersonObj

};

// Do not edit below this line
module.exports = findTheOldest;
