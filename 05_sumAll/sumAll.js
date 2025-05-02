const sumAll = function(a, b) {
    if ((a | b) < 0) return "ERROR";
    if (!Number.isInteger(a) || !Number.isInteger(b)) return "ERROR";
    let sum = 0;
    if (a > b) [a, b] = [b, a];
    let i = a;
    while (i <= b) {
        sum += i;
        i++;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
