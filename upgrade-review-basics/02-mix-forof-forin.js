// Dado el siguiente javascript usa forof y forin para hacer la media del volumen de todos los sonidos favoritos que tienen
// los usuarios.

const users = [
  {
    name: 'Manolo el del bombo',
    favoritesSounds: {
          waves: {format: 'mp3', volume: 50},
          rain: {format: 'ogg', volume: 60},
          firecamp: {format: 'mp3', volume: 80},
      }
  },
  {
    name: 'Mortadelo',
    favoritesSounds: {
          waves: {format: 'mp3', volume: 30},
          shower: {format: 'ogg', volume: 55},
          train: {format: 'mp3', volume: 60},
      }
  },
  {
    name: 'Super Lopez',
    favoritesSounds: {
          shower: {format: 'mp3', volume: 50},
          train: {format: 'ogg', volume: 60},
          firecamp: {format: 'mp3', volume: 80},
      }
  },
  {
    name: 'El culebra',
    favoritesSounds: {
          waves: {format: 'mp3', volume: 67},
          wind: {format: 'ogg', volume: 35},
          firecamp: {format: 'mp3', volume: 60},
      }
  },
]



// console.log('----ACCEDIENTO A UNO DE LOS VOLUMENS----');
// console.log(users[3].favoritesSounds.waves.volume);

const volumeRegister = []; //--> guardaremos en este array el valor de todas las propiedades volume

for (let user of users) {
  for (let sounds in user.favoritesSounds) {
    // Estoy accediendo a la propiedad volum de cada objeto dentro de favouriteSounds
    volumeRegister.push(user.favoritesSounds[sounds].volume);  
  }
}

let sumVolumes = 0;
for (item of volumeRegister) {
  sumVolumes += item;
}

const mediaVolumes = sumVolumes / volumeRegister.length
console.log(mediaVolumes);







