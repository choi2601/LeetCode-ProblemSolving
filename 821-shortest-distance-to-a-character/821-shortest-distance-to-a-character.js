/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function(s, c) {
    const answer = [];
    let prev = Number.MAX_SAFE_INTEGER;

    for(let i = 0; i < s.length; i++) {
        if(s[i] === c) {
            answer.push(0);
            prev = i;
            continue;
        }
        
        if(!s[i + 1]) answer.push(Math.abs(i - prev));
        for(let j = i + 1; j < s.length; j++) {
            if(s[j] === c) {
                const dis = Math.min(Math.abs(i - prev), Math.abs(i - j));
                answer.push(dis);
                break;
            }
            if(j === s.length - 1) answer.push(Math.abs(i - prev))
        }
    }
    
    return answer;
};