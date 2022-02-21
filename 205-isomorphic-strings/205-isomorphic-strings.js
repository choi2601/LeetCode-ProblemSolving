var isIsomorphic = function(s, t) {
    const sH = new Map();
    const len = s.length;
    
    for(let i = 0; i < len; i++) {
        if(!sH.has(s[i])) {
            sH.set(s[i], t[i]);
        } else {
            if(sH.get(s[i]) !== t[i]) return false;
        }
    }
    
    if(new Set([...sH.values()]).size !== sH.size) return false;
    else return true;
};