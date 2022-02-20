const switchToNum = num => {
    const switchedNum = num.charCodeAt() - 64;
    return switchedNum;
}

var titleToNumber = function(columnTitle) {
   let sum = 0;
   const len = columnTitle.length - 1; 
    
   for(let i = 0; i <= len; i++) {
       const targetNum = switchToNum(columnTitle[i]);
       console.log(targetNum);
       sum += targetNum * (Math.pow(26, len - i));
   }
    
   return sum;
};

// AB => 1 * 26^1 + 2*26^0 = 26 + 2