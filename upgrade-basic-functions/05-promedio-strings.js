// Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud
// del string y lo sume. Puedes usar este array para probar tu función:

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
function averageWord(param) {
  // reservo una variable para guardar el valor de la suma
  let sumTotal = 0;
  // Recorro el array con un bucle for
  for (let i = 0; i < param.length; i++){
  // Identifico los valores que se corresponden con un número con un typeof()
    if(typeof(param[i]) === 'number'){
      sumTotal += param[i];
      //Los que no cumplan la condición asumo que son strings y sumo su .length
    } else sumTotal += param[i].length;

  }
  console.log(sumTotal);
} 

averageWord(mixedElements);



/* let hola = 24;
console.log(typeof(hola)); */

