/**
 * @param {number[][]} logs
 * @param {number} k
 * @return {number[]}
 */
var findingUsersActiveMinutes = function(logs, k) {
    const answer = Array.from({length: k}, () => 0);
    const sH = new Map();
    
    for(let [id, time] of logs) {
        if(!sH.has(id)) sH.set(id, new Set().add(time));
        else sH.set(id, sH.get(id).add(time));
    }
    
    for(let [_, time] of sH) {
        const result = time.size;
        answer[result - 1] += 1;
    }
    
    return answer;
};