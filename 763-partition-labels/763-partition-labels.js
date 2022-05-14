/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
    const answer = [];
    const last = {};
    
    for(let i = 0; i < s.length; i++) {
        last[s[i]] = i;
    }
    
    let next = 0;
    let sum = 0;
        
    for(let i = 0; i < s.length; i++) {
        sum++;
        
        if(last[s[i]] > next) next = last[s[i]];
        if(next === i) {
            answer.push(sum);
            sum = 0;
        }
    }
    
    return answer
};