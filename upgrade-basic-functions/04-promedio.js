// Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función:


const numbers = [12, 21, 38, 5, 45, 37, 6];

function average(param) {
  //? debo conseguir la suma de los elementos del array

  let sumTotal = 0;

  for (const item of param){

    sumTotal += item;

  }
  //? Ahora debo dividir la suma total entre el número de elementos del array
  promedio = sumTotal / param.length;
  console.log('El valor promedio de tu array es:',promedio);
}

average(numbers);