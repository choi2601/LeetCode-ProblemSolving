/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    const answer = [];
    const cpyNums = nums.slice();
    const sortedNums = nums.sort();
    
    for(let i = 0; i < cpyNums.length; i++) {
        const curNum = cpyNums[i];
        let cnt = 0;
        for(let j = 0; j < sortedNums.length; j++) {
            const cpNum = sortedNums[j];
            if(curNum > cpNum) cnt++;
        }
        answer.push(cnt);
    }
    
    return answer;
};