/**
 * @param {number} start
 * @param {number} goal
 * @return {number}
 */
var minBitFlips = function(start, goal) {
    const cnt = (start ^ goal).toString(2).split('0').join('').length;
    
    return cnt;
};