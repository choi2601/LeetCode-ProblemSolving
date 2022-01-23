/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let answer = 0;
    let sH = new Map();
    
    for(let x of nums) {
        if(sH.has(x)) sH.set(x, sH.get(x) + 1);
        else sH.set(x, 1);
    }
    
    let max = 0; 
    for(let [key, val] of sH) {
        if(val > max) {
            answer = key;
            max = val;
        }
    }
    return answer;
};