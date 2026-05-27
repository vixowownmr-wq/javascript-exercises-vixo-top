const numero = 10;
const string = "hi";
let resultado = "";

const repeatString = function(string,numero) {
    if (numero < 0) {
        return("ERROR")
    }


    for (let i=0; i<numero; i++) {
        resultado += string;
    }
    return resultado;


};

// Do not edit below this line
module.exports = repeatString;
