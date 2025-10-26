const convertToCelsius = function(temp) {
  let celsius = (temp-32)*(5/9);
  return (celsius%1 !== 0) ? Number(celsius.toFixed(1)) : Number(celsius);
};

const convertToFahrenheit = function(temp) {
  let fahrenheit = (temp*(9/5)+32);
  return (fahrenheit%1 !== 0)? Number(fahrenheit.toFixed(1)) : Number(fahrenheit);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
