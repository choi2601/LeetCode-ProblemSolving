/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function(edges) {
   const cd = edges[0];
    
   for(let i = 0; i < cd.length; i++) {
       let isCenter = true;
       for(let j = 1; j < edges.length; j++) {
           if(!edges[j].includes(cd[i])) {
               isCenter = false;
               break;
           }
       }
       if(isCenter) return cd[i];
   }
};