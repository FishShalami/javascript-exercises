const convertToCelsius = function(tempF) {
  //define the constant for use in the conversion
  const degreeCelsiusConvert = 5/9;
  const freezingPoint = 32;
  let celsius = 0;

  function round1(value, precision) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
  }

  //take the function parameter and perform the calculation
celsius = (tempF - freezingPoint) * degreeCelsiusConvert;

  //round the result to one decimal
return round1(celsius,1);

};

const convertToFahrenheit = function(tempC) {

  //define the constant for use in the conversion
  const degreeCelsiusConvert = 9/5;
  const freezingPoint = 32;
  let fahrenheit = 0;

  function round1(value, precision) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
  }

  //take the function parameter and perform the calculation
  fahrenheit = (tempC * degreeCelsiusConvert) + freezingPoint;

  //round the result to one decimal
  return round1(fahrenheit,1);


};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
