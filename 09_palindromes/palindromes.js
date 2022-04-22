const palindromes = function (string) {
    string = string.toLowerCase()
    let palindrome = string.replace(/[^0-9a-z]/gi, "")
    let palindromeArray = palindrome.split('')
    let palindromeReverse = palindromeArray.reverse()
    let palindromeResult = palindromeReverse.join('')
    return palindrome == palindromeResult
};

// Do not edit below this line
module.exports = palindromes;
