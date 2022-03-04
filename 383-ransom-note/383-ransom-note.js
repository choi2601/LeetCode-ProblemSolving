/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const sH1 = new Map();
    const sH2 = new Map();
    
    for(let x of ransomNote) {
        if(!sH1.has(x)) sH1.set(x, 1);
        else sH1.set(x, sH1.get(x) + 1);
    }
    
    for(let x of magazine) {
        if(!sH2.has(x)) sH2.set(x, 1);
        else sH2.set(x, sH2.get(x) + 1);
    }
    
    for(let [key, val] of sH1) {
        const magazineVal = sH2.get(key);
        if(magazineVal < val || !magazineVal) return false;
    }
    
    return true;
};