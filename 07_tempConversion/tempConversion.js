const convertToCelsius = function(tempF) {
  let roundedTempf = ((5/9)*(tempF-32)).toFixed(1)
  return (parseFloat(roundedTempf)%1 === 0)? parseInt(parseInt(roundedTempf).toFixed(0)):parseFloat(roundedTempf)
};

const convertToFahrenheit = function(tempC) {
  let roundedTempC = (tempC*(9/5)+32).toFixed(1)
  return (parseFloat(roundedTempC)%1 === 0)? parseInt(parseInt(roundedTempC).toFixed(0)):parseFloat(roundedTempC)
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
