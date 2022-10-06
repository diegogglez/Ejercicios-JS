// Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, 
// en caso que existan los elimina para retornar un array sin los elementos duplicados. 
// Puedes usar este array para probar tu función:

const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
];


function removeDuplicates(array) {

  for (let i = 0; i < array.length; i++){

    for (let j = i + 1; j < array.length; j++){

      if (array[i] === array[j]){
      
      array.splice(j, 1);
      j--;

      }
    }
  }

  return array;
}

console.log(removeDuplicates(duplicates));


//! Explicacion Santi utilizando .slice

/* function removeDuplicates(array) {
  const arrayDuplicates = [];
  //* Encontrar los elementos que necesitamos eliminar
  for (let i = 0; i < array.length; i++) {
    if (!arrayDuplicates.includes(array[i])) {
      for (let j = i + 1; j < array.length; j++) {
        if (array[i] === array[j]) {
          arrayDuplicates.push(array.slice(j, j + 1)[0]);
          console.log(array.slice(j, j + 1)[0]);
        }
      }
    }
  }
  //* Eliminar los elementos
  for (let i = 0; i < arrayDuplicates.length; i++) {
    const posicionAEliminar = array.lastIndexOf(arrayDuplicates[i]);
    array.splice(posicionAEliminar, 1);
  }
  return array;
}
console.log(removeDuplicates(duplicates)); */
