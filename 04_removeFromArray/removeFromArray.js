const removeFromArray = function(someArray, ...elementsToRem) {
    const args = [...arguments]
    for (let i=1; i<args.length; i++){
        if(args[i]){
            indexToRem = someArray.indexOf(args[i])
            if (indexToRem != -1){
                someArray.splice(indexToRem, 1)
            }
        }
    }
    return someArray
};
removeFromArray([3,2,1], 2)

// Do not edit below this line
module.exports = removeFromArray;
