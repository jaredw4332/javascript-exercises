const sumAll = function(intOne, intTwo) {
if(intOne < 0 || intTwo < 0 || typeof(intOne) != 'number' || typeof(intTwo) != 'number'){
    return "ERROR"
}

if(intOne > intTwo){
    [intOne, intTwo] = [intTwo, intOne]
}


let rangeInt = intOne

for (rangeInt; rangeInt < intTwo + 1; ++rangeInt){
    sum = intOne += rangeInt;
    sum -= 1
    }
    return sum

};

// Do not edit below this line
module.exports = sumAll;
