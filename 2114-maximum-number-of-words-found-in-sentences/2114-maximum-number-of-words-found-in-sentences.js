/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let max = 0;
    
    for(let x of sentences) {
        const curLen = x.split(' ').length;
        if(curLen > max) max = curLen;
    }
    
    return max;
};