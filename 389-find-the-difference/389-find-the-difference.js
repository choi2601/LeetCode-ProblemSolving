/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    if(s.length === 0) return t;
    let sH = new Map();
    
    for(let x of s) {
        if(!sH.has(x)) sH.set(x, 1);
        else sH.set(x, sH.get(x) + 1);
    }
    
    let pt = 0;
    for(let x of t) {
        pt++;
        if(!sH.has(x)) return x;
        else {
            if(sH.get(x) === 0) return x;
            sH.set(x, sH.get(x) - 1);
        }
    }
};