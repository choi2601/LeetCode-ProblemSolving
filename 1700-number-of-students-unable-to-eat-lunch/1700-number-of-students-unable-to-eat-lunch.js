/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function(students, sandwiches) {
    let cnt = 0;
    
    while(students.length) {
        if(!students.includes(sandwiches[0])) {
            students.shift();
            cnt++;
        } else {
            if(sandwiches[0] === students[0]) {
                students.shift();
                sandwiches.shift();
            } else {
                const curStudent = students.shift();
                students.push(curStudent);
            }
        }
    }
    return cnt;
};