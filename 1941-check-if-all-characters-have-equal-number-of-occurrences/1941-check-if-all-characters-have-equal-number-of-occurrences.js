/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function(s) {
    const map = new Map();
    
    for(let item of s) {
        if(!map.has(item)) {
            map.set(item, 1);
        } else {
            const num = map.get(item);
            map.set(item, num + 1);
        }
    }
    
    const target = new Set(Array.from(map).map(item => item[1])).size;
    return target === 1;
};