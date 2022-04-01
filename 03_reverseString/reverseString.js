const reverseString = function(string) {
    const stringArray = Array.from(string)
    stringArray.reverse()
    let newString = stringArray.join('')
    return newString
};

// Do not edit below this line
module.exports = reverseString;
