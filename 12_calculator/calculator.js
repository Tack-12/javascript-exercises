const add = function(a,b) {
	return (a+b)
};

const subtract = function(a,b) {
	return ((a)-(b))
};

const sum = function(arr) {
  let total = arr.reduce(((acc , a)=> {return acc+= a}),0);

  return total
};

const multiply = function(arr) {

  total = arr.reduce((acc , a)=> {return acc*= a },1)

  return total;

};

const power = function(a,b) {
	return (Math.pow(a,b));
};

const factorial = function(n) {
  let total =1;
	for(i=n ; i>0 ; i--){
    total *= i
  }
  return total;
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
