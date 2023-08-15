const add = function(a,b) {
	return a+b
};

const subtract = function(a,b) {
  return a-b
};

const sum = function(someArray) {
	let sum = 0
  for(let ele of someArray){
    sum += ele
  }
  return sum
};

const multiply = function(someArray) {
  res = 1
  for (let num of someArray){
    res*=num
  }
  return res
};

const power = function(a,b) {
	return a**b
};

const factorial = function(a) {
  let result = 1
  if (a===0 || a===1){
    return 1
  }
	for (let i=2; i<=a; i++){
    result *= i
  } 
  return result
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
