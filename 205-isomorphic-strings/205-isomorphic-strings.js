var isIsomorphic = function(s, t) {
//     const sH = new Map();
//     const len = s.length;
    
//     for(let i = 0; i < len; i++) {
//         if(!sH.has(s[i])) {
//             sH.set(s[i], t[i]);
//         } else {
//             if(sH.get(s[i]) !== t[i]) return false;
//         }
//     }
    
//     if(new Set([...sH.values()]).size !== sH.size) return false;
//     else return true;
     const obj = (str1, str2) => {
    let result = {};
    for (let i = 0; i < str1.length; i++) {
      result[str1[i]] = str2[i];
    }
    return result;
  };

  const doesMatch = (str1, str2, obj) => {
    const arr = str1.split('');
    for (let i = 0; i < str1.length; i++) {
      arr[i] = obj[str1[i]];
    }
    return arr.join('') === str2 ? true : false;
  };

  return doesMatch(s, t, obj(s, t)) && doesMatch(t, s, obj(t, s));
};