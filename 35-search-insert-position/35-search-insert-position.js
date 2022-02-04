var searchInsert = function(nums, target) {
    let prev;
    let next;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === target) return i;
        if(nums[i] > target) {
            if(i === 0) return i;
            return i - 1;   
        }
        if(nums[i] < target && nums[i + 1] > target) return i + 1;
        if(i === nums.length - 1) return nums.length;
    }
};