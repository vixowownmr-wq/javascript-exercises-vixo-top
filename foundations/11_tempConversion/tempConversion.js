const convertToCelsius = function(fahTemp) {
  let celsiusResult = (fahTemp - 32) * 5/9 ;
  return Math.round(celsiusResult * 10)/10;
  
};

const convertToFahrenheit = function(celTemp) {
  let fahrenheitResult = (celTemp * 9/5) + 32;
  return Math.round(fahrenheitResult * 10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
