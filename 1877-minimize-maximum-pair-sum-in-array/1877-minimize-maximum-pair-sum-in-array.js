/**
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function(nums) {
    const sortedNums = nums.sort((a, b) => a - b);
    
    
    const sumList = [];
    let pt1 = 0;
    let pt2 = nums.length - 1;
    
    
    while(pt1 <= pt2) {
      const sum = sortedNums[pt1++] + sortedNums[pt2--];
      sumList.push(sum);
    }
    
    const answer = Math.max(...sumList);
    
    return answer;
};