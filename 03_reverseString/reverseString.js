const reverseString = function(someString) {
    let res = ""
    for (let i = someString.length-1; i>=0; i--){
        res += someString[i]
    }
    return res
};

// Do not edit below this line
module.exports = reverseString;
