/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) { 
  let answer = false;
  let x = 0;
  const powerOfTwo = Math.pow(2, 0);
    
  while(1) {
    const powerOfTwo = Math.pow(2, x);
    if(powerOfTwo === n) {
        answer = true;
        break;
    } 
    if(powerOfTwo > n) break;
    x++;
  }
    
  return answer;
};