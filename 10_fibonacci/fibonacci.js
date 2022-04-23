let fibonacci = function(int) {
    if( int < 0){
        return "OOPS"
    }
    let fibonacciArray = [1, 1]
    for (let i = 0; i < int; i++) { 
        let fibonacciMinusOne = fibonacciArray[fibonacciArray.length - 1]
        let fibonacciMinusTwo = fibonacciArray[fibonacciArray.length - 2]
        fibonacciArray.push(fibonacciMinusOne + fibonacciMinusTwo)
    }
    return fibonacciArray[int-1]
};

// Do not edit below this line
module.exports = fibonacci;
