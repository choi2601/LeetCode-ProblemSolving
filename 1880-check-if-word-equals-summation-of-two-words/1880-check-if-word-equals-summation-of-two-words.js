/**
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 */
function changeToNum(s) {
    return s.toUpperCase().charCodeAt(0) - 65;
}

function changeToNumericalValue(str) {
    const value = [];
    for(let s of str) {
        value.push(changeToNum(s));
    }
    
    return Number(value.join(''));
}

var isSumEqual = function(firstWord, secondWord, targetWord) {
    const firstNum = changeToNumericalValue(firstWord);
    const secondNum = changeToNumericalValue(secondWord);
    const targetNum = changeToNumericalValue(targetWord);
    
    return (firstNum + secondNum) === targetNum;
};