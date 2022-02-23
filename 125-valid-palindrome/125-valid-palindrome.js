/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const newS = s.replace(/ /gi, '').replace(/[^a-z^A-Z^0-9]/gi, '');
    
    const lowerS = Array.from(newS).map(word => word.toLowerCase());
    const len = Math.floor(lowerS.length / 2);
    
    for(let i = 0; i < len; i++) {
        if(lowerS[i] !== lowerS[(lowerS.length - 1) - i]) return false;
    }
    
    return true;
};