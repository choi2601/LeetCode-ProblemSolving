/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    const sH = new Map();
    const cdKey = 'balon';
    
    for(let x of text) {
        if(cdKey.includes(x)) {
            if(!sH.has(x)) sH.set(x, 1);
            else sH.set(x, sH.get(x) + 1);   
        }   
    }
    
    if(sH.size !== cdKey.length) return 0;
    
    let num = Number.MAX_SAFE_INTEGER;
    
    for(let [key, val] of sH) {
        if(key === 'l' || key === 'o') {
            const prNum = Math.floor(val / 2);
            if(!prNum) return 0;
            if(prNum < num) num = prNum;
        } else {
            if(val < num) num = val;    
        }
    }
    
    return num;
};