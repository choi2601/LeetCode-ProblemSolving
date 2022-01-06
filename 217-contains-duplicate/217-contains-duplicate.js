var containsDuplicate = function(nums) {
    let prevLength = nums.length;
    let newLength = new Set(nums).size;
    
    if(prevLength === newLength) return false;
    else return true;
};