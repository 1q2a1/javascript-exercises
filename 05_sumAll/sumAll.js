const sumAll = function(start, end) {
    if (!(Number.isInteger(start) && Number.isInteger(end)) || (start<0 || end<0)){
        return 'ERROR'
    }
    const firstNum = Math.min(start,end)
    const secondNum = Math.max(start,end)
    let sum=0
    for (let i= firstNum; i<=secondNum; i++){
        sum+=i
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
