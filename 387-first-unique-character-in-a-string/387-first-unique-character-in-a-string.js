/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
        const sH = new Map();
    for(let x of s) {
       if(!sH.has(x)) sH.set(x, 1);
        else sH.set(x, sH.get(x) + 1)
    }
  let pt = 0;  
  const len = sH.size;
    
    for(let [key, val] of sH) {
      if(val === 1) return s.indexOf(key);
      pt++;
      if(pt === len) return -1;
}
};