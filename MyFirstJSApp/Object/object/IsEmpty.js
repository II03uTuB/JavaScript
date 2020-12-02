
function isEmpty (object) {
    for (let prop in object) {
        if (prop) {
            return false;
        }        
    }
    return true;
}

let schedule = {};

console.log( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

console.log( isEmpty(schedule) );