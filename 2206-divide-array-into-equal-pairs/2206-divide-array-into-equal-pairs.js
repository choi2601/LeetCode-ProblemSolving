/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function(nums) {
//     const sH = new Map();
    
//     for(let x of nums) {
//         if(!sH.has(x)) sH.set(x, 1);
//         else sH.set(x, sH.get(x) + 1);
//     }
    
//     for(let [_, val] of sH) {
//         if(val % 2 !== 0) return false;
//     }
    
//     return true;
    const set = new Set();
    
    for(let x of nums) {
        if(set.has(x)) set.delete(x);
        else set.add(x);
    }
    
    if(set.size === 0) return true;
    else return false;
};