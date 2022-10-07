/* Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.  
Puedes usar este array para probar tu función: */

const counterWords = [
  "code",
  "repeat",
  "eat",
  "sleep",
  "code",
  "enjoy",
  "sleep",
  "code",
  "enjoy",
  "upgrade",
  "code",
];

function repeatCounter(array) {

  //Creamos una variable que sea un objeto vacío
  const counter = {};
  //Con un bucle for recorremos el array que introducimos en la función
  for (let i = 0; i < array.length; i++) {
    //Reservamos una variable con el valor de cada elemento del array en cada iteracion del bucle
     //* const item = array[i]; 
    //Comprobamos si la variable item está en nuestro objeto counter
    if (array[i] in counter) {
      counter[array[i]]++; //Si la encuentra le suma 1
    } else {
      counter[array[i]] = 1; //Si no la encuentra, la creamos con valor 1 (la primera vez pasará esto con todos los elementos)
    }
  }
  return counter; // Retornamos el valor de counter que tiene que contener 
}

console.log(repeatCounter(counterWords));

/* if (param[i] in counter) */
