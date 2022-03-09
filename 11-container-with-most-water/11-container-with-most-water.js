/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
//   let max = Number.MIN_SAFE_INTEGER;
//   let prevH = 0;

//   for(let i = 0; i < height.length; i++) {
//     let h1 = height[i];
//     if(h1 < prevH) {
//         prevH = h1;
//         continue;
//     }
//     for(let j = i + 1; j < height.length; j++) {      
//       let w = (j - i);
//       let h2 = height[j];
//       let size;
//       if(h1 !== h2) {
//         let standard = Math.min(h1, h2);
//         size = w * standard;
//       } else {
//         size = w * h1;
//       }
//       if(max < size) max = size;
//     }
//     prevH = h1;
//   }
//   return max;
    let max = Number.MIN_SAFE_INTEGER;
    let lt = 0;
    let rt = height.length - 1;
    
    while(lt < rt) {
        const side = Math.min(height[lt], height[rt]);
        const width = rt - lt;
        const size = width * side;
        if(size > max) max = size;
        
        if(height[lt] < height[rt]) lt++;
        else rt--;
    }
    
    return max;
};