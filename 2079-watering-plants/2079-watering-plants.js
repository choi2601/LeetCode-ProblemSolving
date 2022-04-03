/**
 * @param {number[]} plants
 * @param {number} capacity
 * @return {number}
 */
var wateringPlants = function(plants, capacity) {
    let steps = 0;
    let pos = 0;
    let remain = capacity;
    
    while(plants[pos]) {
        if(plants[pos] <= remain) {
            remain -= plants[pos];
            pos++;
            steps++;
        } else {
            steps += pos;
            remain = capacity;
            steps += pos + 1;
            remain -= plants[pos];
            pos++;
        }
    }
    
    return steps;
};