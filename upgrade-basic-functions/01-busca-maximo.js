// Completa la función que tomando dos números como argumento devuelva el más alto.

function sum(numberOne , numberTwo) {
  if (numberOne > numberTwo){

    console.log('Valor más alto', numberOne);

  } else if (numberOne === numberTwo){

      console.log('Ambos números tienen el mismo valor');

  } else console.log('valor más alto', numberTwo);
}

//? function test

sum(10, 50);

sum(1, 0.5);

sum(13,13);