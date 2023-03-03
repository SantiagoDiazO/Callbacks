function Saludar(){//Declarando la funcion UNO(Principal)
    setTimeout(() => {
        console.log("Hola como estas, Iniciando el programa...")
        Despedir()//Llamado a la función secundaria(CALLBACK)
    }, 2000);
}

function Despedir(){//Declarando la funcion SECUNDARIA
    console.log("Adios, Finalizando el programa...")
}

Saludar()//Llamando a la funcion primaria