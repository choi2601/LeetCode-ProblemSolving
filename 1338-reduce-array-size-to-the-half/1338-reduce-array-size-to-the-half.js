/**
 * @param {number[]} arr
 * @return {number}
 */
var minSetSize = function(arr) {
    const size = arr.length / 2;
    if(size === 1) return 1;
    
    const sH = {};
    
    for(let x of arr) {
        if(!sH[x]) sH[x] = 1;
        else sH[x] = sH[x] + 1;
    }
    
    const values = Object.values(sH).sort((a, b) => b - a);
    
    let cnt = 0;
    let sum = 0;
    for(let x of values) {
        sum += x;
        if(arr.length - sum > size) cnt++;
        else {
            cnt++;
            return cnt;
        }
    }
    
};