var strStr = function(haystack, needle) {
    let targetIndex = -1;
    
    if(needle === '') return 0;
        
    for(let i = 0; i < haystack.length; i++) {
        if(needle[0] === haystack[i]) {
            const targetStr = haystack.substring(i, i + needle.length);
            if(needle === targetStr) {
                targetIndex = i;
                return targetIndex;
            }
        }
    }
    
    return targetIndex;
};