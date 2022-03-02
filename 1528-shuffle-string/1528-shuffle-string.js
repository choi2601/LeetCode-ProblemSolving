/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    let answer = '';
    const sH = new Map();
    
    for(let i = 0; i < indices.length; i++) {
        if(!sH.has(indices[i])) sH.set(indices[i], s[i]);
    }
    
    const arr = Array.from(sH).sort((a, b) => Number(a[0]) - Number(b[0]));
    for(let [key, val] of arr) {
        answer += val;
    }
    
    return answer;
};