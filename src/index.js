module.exports = function reverse (n) {
    let arrayInt = Array.from(String(n));
    if(arrayInt[0] === '-') {
        arrayInt.shift();
    }
    return Number(arrayInt.reverse().join(''));
}
