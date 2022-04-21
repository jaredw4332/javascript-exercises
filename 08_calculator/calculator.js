const add = function(a,b) {
  return a + b
	
};

const subtract = function(a,b) {
  return a - b
	
};

const sum = function(array) {
  let sum = 0
  for (let i = 0; i < array.length; i++){
    sum += array[i]
  }
  return sum
	
};

const multiply = function(array) {
  let multiple = 1
  for (let i = 0; i< array.length; i++){
    multiple *= array[i]
  }
  return multiple
};

const power = function(number, powerOf) {
  let finalNumber = number
  for (let i = 0; i < powerOf - 1; i++){
    finalNumber *= number
  }
	return finalNumber
};

const factorial = function(num) {
  if (num == 0){
    return 1
  }
  for (let i = num - 1; i != 0; i--){
    num *= i
  }
  return num
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
