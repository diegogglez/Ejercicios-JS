// 1.1 Consigue el valor "HULK" del array de cars y muestralo por consola.

const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
let hero = avengers[0];
console.log(hero);

// 1.2 Cambia el primer elemento de avengers a "IRONMAN"

avengers.push('IRONMAN');
avengers.reverse();
console.log(avengers);

// 1.3 Alert numero de elementos en el array usando la propiedad correcta de Array.

console.log(avengers.length);

// 1.4 Añade 2 elementos al array: "Morty" y "Summer". 
// Muestra en consola el último personaje del array

const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];
rickAndMortyCharacters.push('Morty', 'Summer');
console.log(rickAndMortyCharacters[4]);

// 1.5 Elimina el último elemento del array y muestra el primero y el último por consola.
// const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];

rickAndMortyCharacters.push('Lapiz Lopez');
console.log(rickAndMortyCharacters);
rickAndMortyCharacters.pop();
console.log(rickAndMortyCharacters[0], rickAndMortyCharacters[4]);


// 1.6 Elimina el segundo elemento del array y muestra el array por consola.
// const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];

rickAndMortyCharacters.push('Lapiz Lopez');
console.log(rickAndMortyCharacters);
rickAndMortyCharacters.splice(1,1);
console.log(rickAndMortyCharacters);
