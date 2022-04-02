/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
//     const answer = [];
//     const n = graph.length;
//     const nodes = Array.from(Array(n), () => Array(n).fill(0));
//     const ch = Array.from({length: n}, () => 0);
    
//     for(let i = 0; i < graph.length; i++) {
//         const route = graph[i];
//         for(let j = 0; j < route.length; j++) {
//             const path = route[j];
//             nodes[i][path] = 1;
//         }
//     }
    
//     const tmp = [0];
    
//     function DFS(v) {
//         if(v === n - 1) {
//             answer.push(tmp.slice());
//             return;
//         }
//         else {
//             for(let i = 0; i < n; i++) {
//                 if(nodes[v][i] === 1 && ch[i] === 0) {
//                     ch[i] = 1;
//                     tmp.push(i);
//                     DFS(i);
//                     ch[i] = 0;
//                     tmp.pop();
//                 }
//             }
//         }
//     }
    
//     ch[0] = 1;
//     DFS(0);
    
//     return answer;
    
    const answer = [];
    const n = graph.length;
    const nodes = Array.from(Array(n), () => Array());
    const ch = Array.from({length: n}, () => 0);
    
    for(let i = 0; i < graph.length; i++) {
        const route = graph[i];
        for(let j = 0; j < route.length; j++) {
            const path = route[j];
            nodes[i].push(path);
        }
    }
    
    const tmp = [0];
    
    function DFS(v) {
        if(v === n - 1) {
            answer.push(tmp.slice());
            return;
        }
        else {
            for(let i = 0; i < nodes[v].length; i++) {
                if(ch[nodes[v][i]] === 0) {
                    ch[nodes[v][i]] = 1;
                    tmp.push(nodes[v][i]);
                    DFS(nodes[v][i]);
                    ch[nodes[v][i]] = 0;
                    tmp.pop();
                }
            }
        }
    }
    
    ch[0] = 1;
    DFS(0);
    
    return answer;
};