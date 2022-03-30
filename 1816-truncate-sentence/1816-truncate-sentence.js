/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
    const arr = s.split(' ');
    let answer = '';
    
    for(let i = 0; i < arr.length; i++) {
        if(i !== 0) answer += ` ${arr[i]}`;
        else answer += `${arr[i]}`;
        if(i + 1 === k) return answer;
    }
};