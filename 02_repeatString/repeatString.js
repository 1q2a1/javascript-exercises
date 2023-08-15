const repeatString = function(someString, numRepeat) {
    res = ""

    if (numRepeat<0){
        return "ERROR"
    }
    for (i=0; i<numRepeat; i++){
        res += someString
    }
    return res
};

// Do not edit below this line
module.exports = repeatString;
