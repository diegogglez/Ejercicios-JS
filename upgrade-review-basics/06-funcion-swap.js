// Crea una función llamada `swap()` que reciba un array y dos parametros que sean indices del array. 
// La función deberá intercambiar la posición de los valores de los indices que hayamos enviado como parametro. 
// Retorna el array resultante.

// Sugerencia de array:

const players = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño'];

let swapItems = (arr, indexA, indexB) => {
  let itemB = arr[indexA]
  arr[indexA] = arr[indexB];
  arr[indexB] = itemB;
  return arr;
}
console.log(players);
console.log(swapItems(players, 2, 3));





