// custom node module 

console.log("This mdoule");

function average(arr) {
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    });
    return sum/arr.length;
}

module.exports = {
    avg: average,
    "anme": "Harry",
    "repo": "github"
}