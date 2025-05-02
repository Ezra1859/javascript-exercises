const reverseString = function(word) {
    let reverse = '';
    let i = word.length - 1;
    while (i >= 0) {
        reverse += word[i];
        i--;
    }
    return reverse;
};

// Do not edit below this line
module.exports = reverseString;
