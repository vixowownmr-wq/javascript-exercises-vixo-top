const sumAll = function(num1, num2) {
    const menor = Math.min(num1, num2);
    const mayor = Math.max(num1, num2);

    if(!Number.isInteger(num1) || !Number.isInteger(num2)) {
        return "ERROR";
    }

    if(num1 < 0 || num2 < 0) {
        return "ERROR";
    }

    let resultado = 0;

    for(let i = menor; i <= mayor; i++) {
        resultado += i;
    }

    return resultado;

};

// Do not edit below this line
module.exports = sumAll;
