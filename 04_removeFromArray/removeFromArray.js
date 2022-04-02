const removeFromArray = function(array, ...filter) {
    const filterArray = []
    filter.forEach(item => filterArray.push(item));
    const newArray = array.filter(element => !filterArray.includes(element))
    return newArray
};

// Do not edit below this line
module.exports = removeFromArray;
