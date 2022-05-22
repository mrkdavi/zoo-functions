const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const { species } = data;
  const spc = species.find((specie) => specie.name === animal);
  const isEveryOlderThan = spc.residents.every((anim) => anim.age >= age);
  return isEveryOlderThan;
}

module.exports = getAnimalsOlderThan;
