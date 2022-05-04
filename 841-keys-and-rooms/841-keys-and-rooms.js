/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
//     const len = rooms.length;
//     const isVisited = Array.from({length: len}, () => 0);
//     const queue = [];
    
//     const firstRoom = rooms[0];
    
//     if(firstRoom.length === 0) queue.push(-1);
//     else queue.push(...firstRoom); 
    
//     isVisited[0] = 1;
    
//     while(queue.length) {
//         const key = queue.shift();
        
//         for(let i = 0; i < len; i++) {
//             if(isVisited[i] && i === len - 1) return false;
            
//             if(i === len - 1 && key !== i) return false;
//             if(isVisited[i] || key !== i) continue;
            
//             const room = rooms[i];
            
//             isVisited[i] = 1;
//             if(room.length === 0) queue.push(-1);
//             else queue.push(...room);  
            
//             break;
//         }
        
//         const isAllVisited = isVisited.reduce((a, b) => a + b);
//         if(isAllVisited === isVisited.length) break;
//     }
    
//     return true;
    
    const visited = new Set();
	const queue = [0]; 

	while (queue.length) {
		const key = queue.shift();
		const room = rooms[key];

		if (visited.has(key)) continue; 

		visited.add(key); 
		queue.push(...room); 
	}

	return visited.size === rooms.length;

};