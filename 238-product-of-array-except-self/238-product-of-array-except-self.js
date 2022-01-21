var productExceptSelf = function(nums) {
    let answer = [];
    let sH = new Map();
    
    for(let i = 0; i < nums.length; i++) {
        const key = String(nums[i]);
        let total;
        if(sH.has(key)) total = sH.get(key);
        else {
            total = nums.reduce((a, b, currentIndex) => {
            if(currentIndex === i) return a;
            else return a * b
        }, 1);
            sH.set(key, total);
        }
        answer.push(total);
    }
    
    return answer;
};