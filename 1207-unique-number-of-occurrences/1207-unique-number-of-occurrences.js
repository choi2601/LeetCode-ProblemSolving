/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    const sH = new Map();
    
    for(let x of arr) {
        if(!sH.has(x)) sH.set(x, 1);
        else sH.set(x, sH.get(x) + 1);
    }
    
    const sHArr = [...sH];
    
    for(let i = 0; i < sHArr.length; i++) {
        const target = sHArr[i][1];
        for(let j = i + 1; j < sHArr.length; j++) {
            const cp = sHArr[j][1];
            if(target === cp) return false;
        }
    }
    
    return true;
};