const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, {name: 'Lucia Aranda', T1: true, T2: false, T3: true}, {name: 'Abel Cabeza', T1: false, T2: true, T3: true}, {name: 'Alfredo Blanco', T1: false, T2: false, T3: false}, {name: 'Raquel Benito', T1: true, T2: true, T3: true}
]

let notas = 0;

for (let index = 0; index < alumns.length; index++) {
    const alumno = alumns[index];

    if (alumno.T1){
        notas++;
    }
    if (alumno.T2){
        notas++;
    }
    if (alumno.T3){
        notas++;
    }
    alumno.isApproved = notas >= 2;

    notas = 0
}

console.log(alumns);

