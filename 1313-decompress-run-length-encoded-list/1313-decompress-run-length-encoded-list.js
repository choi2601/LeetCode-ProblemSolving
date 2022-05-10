/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
    const answer = [];
    
    for(let i = 0; i < nums.length - 1; i+=2) {
        let freq = nums[i];
        const val = nums[i + 1];
        while(freq) {
            answer.push(val);
            freq--;
        }
    }
    
    return answer;
};