let frutas = ['pera', 'durazno', 'frutilla', 'naranjas', 'limones'];

let verduras = ['lechuga', 'alcachofa', 'espinaca', 'acelgas']

let ensaladaMixta = frutas.concat(verduras);

const frutasYverduras = (array1, array2) =>{

    console.log(array1.concat(array2)) 
}

frutasYverduras(frutas, verduras);