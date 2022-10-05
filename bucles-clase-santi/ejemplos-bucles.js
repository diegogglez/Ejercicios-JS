//?  Bucle que empiece en 30, resde de dos en dos, por lo tanto vamos a tener solo números pares y el límite sea  -10
console.log('bucle 1');
for (let i = 30; i >= -10; i = i -2){
  console.log(i);
}

//? Bucle que empiece en 100, vaya dividiendo de 2 en 2 hasta que esté por debajo de 10

console.log('bucle 2');
 for (let i = 100; i > 10; i = i / 2) {
   console.log(i);
}

//? Bucle que empiece en 1.01, vaya multiplicando*2 hasta que llegue a 1000
console.log('bucle 3');
for (let i = 1.01; i <= 1000; i = i * 2){
  console.log(i);
}

// Hacer una pirámide de asteriscos
console.log('Pirámide de asteriscos');
let row = ''
for (let i = 1; i <= 10; i++){
  
  for (let j = 1; j < i; j++){

    row += i;
    
  }

  row += '\n'
}

console.log(row);

/* let piramide = '';

for (let i = 1; i <= 10; i++) {

  for (let j = 0; j < i; j++) {

    piramide += '*';

  }

    piramide += '\n';

  }



  console.log(piramide); */


  // explicación Caru

  console.log('CROQUIS PIRÁMIDE');

  let piramide = '';
for (let i = 2; i <= 7; i++) {
    console.log(`Estoy en la vuelta ${i-1} del bucle exterior`);
  for (let j = 1; j < i; j++) {
    console.log(`    Estoy en la vuelta ${j} del bucle interior mi límite es ${i}`);
  }
    piramide += '\n';
  }
  console.log(piramide);