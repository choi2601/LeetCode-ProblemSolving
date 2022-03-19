/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    const answer = [];
    let pt1 = num1.length - 1;
    let pt2 = num2.length - 1;
    let tmp = 0;
    
    while(num1[pt1] || num2[pt2]) {
          let sum = 0;
          if(!num1[pt1] || !num2[pt2]) {
             if(!num1[pt1]) {
                 if(tmp) sum = tmp + Number(num2[pt2]);
                 else sum = Number(num2[pt2]);
             } else {
                 if(tmp) sum = tmp + Number(num1[pt1]);
                 else sum = Number(num1[pt1]);
             }
          } else {
            if(tmp) sum = tmp + (Number(num1[pt1]) + Number(num2[pt2]));
            else sum = Number(num1[pt1]) + Number(num2[pt2]);    
          }
          if(sum > 9) {
              tmp = 1;
              answer.unshift(Math.floor(sum % 10));
          } else {
              tmp = 0;
              answer.unshift(sum);
          }
        pt1--;
        pt2--;
        if((!num1[pt1] && !num2[pt2]) && tmp) answer.unshift(1);
    }
    
    return answer.join('');
};