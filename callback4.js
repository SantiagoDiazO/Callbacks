let equipos = [
    {
        nombre: "Equipo1",
        numeroTitulos: 6,
        fechaCreacion: "12/04/1999",
        inversion: 100
    },
    {
        nombre: "Equipo2",
        numeroTitulos: 3,
        fechaCreacion: "21/08/2001",
        inversion: 150
    },
    {
        nombre: "Equipo3",
        numeroTitulos: 7,
        fechaCreacion: "02/12/1989",
        inversion: 200
    }
]

/* let sumatoriaInversiones = 0

function VerificarEquipos(equiposVerificar, SumarInversiones){
    setTimeout(() => {
        let equiposValidos = equiposVerificar.filter(equipo => equipo.numeroTitulos >= 5 && equipo.inversion >= 100000000)
        SumarInversiones(equiposInversionValidos)
    }, 3000);
}

VerificarEquipos(equipos, function(equiposValidos){
    for(let i = 0; i < equiposValidos.lenght; i++){
        sumatoriaInversiones += equiposValidos[i].equipos.inversion
    }
    console.log("La sumatoria de las inversiones de los equipos son: "+ sumatoriaInversiones)
}) */

function FiltrarEquipos(equipos, SumarInversiones){
    setTimeout(() => {
        let equiposFiltrados = equipos.filter(equipo => equipo.numeroTitulos >= 5 && equipo.inversion >= 100)
        SumarInversiones(equiposFiltrados)
    }, 3000);
}

FiltrarEquipos(equipos, function(equiposFiltrados){
    let sumatoriaInversiones = 0
    console.log(equiposFiltrados)
    equiposFiltrados.forEach(equipo => {
        sumatoriaInversiones += equipo.inversion
    });
    console.log("La sumatoria de las inversiones es: "+ sumatoriaInversiones)
})