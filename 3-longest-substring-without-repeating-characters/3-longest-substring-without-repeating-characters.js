var lengthOfLongestSubstring = function(s) {
    let maxNum = 0;
    let stackStrs = [];
    
    for(let i = 0; i < s.length; i++) {
        const curStr = s[i];
        
        if(stackStrs.includes(curStr)) {
            maxNum = Math.max(stackStrs.length, maxNum);
            
            let targetIndex = stackStrs.indexOf(curStr) + 1;
            if(targetIndex === 0) stackStrs.shift();
            else {
                while(targetIndex) {
                  stackStrs.shift()
                  targetIndex--;  
                }
            }
        }
        stackStrs.push(curStr);
        console.log(stackStrs);
        if(i === s.length - 1) maxNum = Math.max(stackStrs.length, maxNum);
    }

    return maxNum;
};
