/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    const sH = new Map();
    
    for(let x of nums) {
        if(!sH.has(x)) sH.set(x, 1);
        else sH.set(x, sH.get(x) + 1);
    }
    
    let answer = 0;
    
    for(let [key, val] of sH) {
        if(val === 1) answer += Number(key);
    }
    
    return answer;
};
