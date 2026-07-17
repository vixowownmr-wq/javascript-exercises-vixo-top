const fibonacci = function(n) {
    let previous = 1;
    let current = 1;

    n = Number(n);

    if(n < 0) {
        return "OOPS";
    }

    if(n === 0) {
        return 0;
    }

    for(let i = 2; i < n; i++) {
        let next = previous + current;

        previous = current;
        current = next;
        
    }
    return current;

};

// Do not edit below this line
module.exports = fibonacci;
