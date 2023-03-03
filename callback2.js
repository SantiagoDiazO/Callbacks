//Programa que reciba 5 numeros, los sume despues de 5 segundos y el resultado lo multiplique por 100

let numeros = [1, 2, 3, 4, 5]

function Principal(numeros, Callback){
    setTimeout(() => {
        let sumatoria = 0;
        numeros.forEach(numero => {
            sumatoria = sumatoria + numero
        });
        Callback(sumatoria); //Llamando al callback
    }, 5000);
}

/* function Callback(suma){
    let multiplicacion = suma * 100;
    console.log("El resultado es: "+ multiplicacion)
} */

Principal(numeros, function(sumatoria){
    let resultado = sumatoria * 100;
    console.log("El resultado es: " + resultado)
});//Llamando la funcion principal