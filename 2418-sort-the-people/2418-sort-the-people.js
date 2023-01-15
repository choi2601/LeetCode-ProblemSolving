/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
   const infos = names.map((name, index) => {
       const info = { name: name, heights: heights[index] };
       return info;
   })
   const answer = infos.sort((a, b) =>  b.heights - a.heights).map(info => info.name);
   
   return answer;
};