/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const cp1 = String(x);
    const cp2 = cp1.split('').reverse().join('');
    if(cp1 === cp2) return true;
    else return false;
};