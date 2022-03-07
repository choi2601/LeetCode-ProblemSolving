/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
    const answer = [];
    const str1 = s1.split(' ');
    const str2 = s2.split(' ');
    const sH1 = new Map();
    const sH2 = new Map();
    
    for(let x of str1) {
        if(!sH1.has(x)) sH1.set(x, 1);
        else sH1.set(x, sH1.get(x) + 1);
    }
    for(let x of str2) {
        if(!sH2.has(x)) sH2.set(x, 1);
        else sH2.set(x, sH2.get(x) + 1);
    }
    
    for(let [key, val] of sH1) {
        if(val === 1) {
            if(!str2.includes(key)) answer.push(key);
        }
    }
    for(let [key, val] of sH2) {
        if(val === 1) {
            if(!str1.includes(key)) answer.push(key);
        }
    }
    
    return answer;
};